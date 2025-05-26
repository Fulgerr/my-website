# April 30, 2025

## Maestro general availability
UiPath Maestro™, which we announced as a public preview in March 2025, is now generally available. Maestro enables you to seamlessly integrate agents, robots and humans into complex, multi-system processes.

For details on using Orchestrator to leverage the capabilities of Maestro, refer to our [initial announcement](URL).

## Introducing indexes
You can now create and monitor indexes in Orchestrator. Previously available in the AI Trust Layer interface, creating Context Grounding indexes is now integrated into Orchestrator. This simplifies the process and eliminates the need for organization administrator rights.

The new index management capabilities in Orchestrator provide a centralized point for management and monitoring at the tenant level. You can track query performance over specified time intervals, analyze index usage trends, and view a complete list of all indexes created within the tenant.

For details, refer to [Indexes](URL).

# April 28, 2025

## Creating disconnected event triggers
Orchestrator now allows you to create disconnected event triggers, which you define from scratch, outside of an existing process. The new functionality, previously available in Integration Service, complements the existing Orchestrator capability to edit connected triggers defined as package requirements for a process. Therefore, Orchestrator now provides a unified trigger experience, enabling you to create and manage all types of triggers.

For details on creating disconnected event triggers, refer to [Creating an event trigger](URL).

## Bug fixes
QueueItem.transactionAbandoned webhook events occasionally had a wrong timestamp of 0001-01-01T00:00:00. We have fixed the issue.
