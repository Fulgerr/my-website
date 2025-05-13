import { visit } from 'unist-util-visit';

const evaluateCondition = (conditionString, options) => {
  const trimmedCondition = conditionString.trim();
  const notOperator = trimmedCondition.startsWith('NOT ');
  const conditionToEvaluate = notOperator ? trimmedCondition.slice(4).trim() : trimmedCondition;
  const [key, value] = conditionToEvaluate.split('=');

  if (key && value && options[key.toLowerCase()] !== undefined) {
    const result = options[key.toLowerCase()] === value;
    return notOperator ? !result : result;
  }
  console.warn(`Warning: Invalid or undefined condition part: ${conditionString}`);
  return false;
};

/** @type {import('unified').Plugin<[Options]>} */
const remarkConditionalContent = (options) => {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      const childrenToRemove = [];
      node.children.forEach((child, childIndex) => {
        if (child.type === 'text' && child.value.startsWith('[if condition="') && child.value.endsWith('"]')) {
          const conditionExpression = child.value.slice(14, -2).trim();

          const andConditions = conditionExpression.split(' AND ');
          let andResult = true;

          for (const andCondition of andConditions) {
            const orConditions = andCondition.split(' OR ');
            let orResult = false;

            for (const orCondition of orConditions) {
              orResult = orResult || evaluateCondition(orCondition.trim(), options);
            }
            andResult = andResult && orResult;
          }

          if (!andResult) {
            childrenToRemove.push(childIndex);
          } else {
            // If condition is met, remove the [if ...] tag
            node.children.splice(childIndex, 1);
          }
        } else if (child.type === 'text' && parent?.children[childIndex - 1]?.type === 'text' && parent.children[childIndex - 1].value.endsWith('[if condition="') && child.value.endsWith('[/if]')) {
          // Handle the closing [/if] tag by removing it
          parent.children.splice(childIndex, 1);
        }
      });

      // Remove marked children in reverse order
      for (let i = childrenToRemove.length - 1; i >= 0; i--) {
        node.children.splice(childrenToRemove[i], 1);
      }
    });
  };
};

export default remarkConditionalContent;