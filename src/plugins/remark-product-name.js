/*const { visit } = require('unist-util-visit');

module.exports = (options) => {
  console.log('Remark lalalalalala Product Name Plugin is running with options:', options);
  return (tree, file) => {
    visit(tree, 'text', (node) => {
      if (options.productName && node.value && node.value.includes('::productName::')) {
        console.log('Before replacement:', node.value);
        node.value = node.value.replace(/::productName::/g, options.productName);
        console.log('After replacement:', node.value);
      }
      // Add other variable replacements here following the same pattern
    });
  };
};*/

const { visit } = require('unist-util-visit');

module.exports = (options) => {
  console.log('Remark Global Vars Plugin is running with options:', options);
  return (tree, file) => {
    visit(tree, 'text', (node) => {
      if (options.productName && node.value && node.value.includes('[productName]')) {
        console.log('Before replacement:', node.value);
        node.value = node.value.replace(/\[productName\]/g, options.productName);
        console.log('After replacement:', node.value);
      }
      // Add other variable replacements here following the same pattern
    });
  };
};