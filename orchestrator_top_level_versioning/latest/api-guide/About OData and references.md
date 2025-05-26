## About OData and references

The Orchestrator API implementation is based on the OData protocol. OData (Open Data Protocol) is an ISO/IEC approved OASIS standard that defines a set of best practices for building and consuming RESTful APIs.

The Open Data Protocol (OData) enables the creation of REST-based data services, which allow resources, identified using URLs and defined in a data model, to be published and edited by Web clients using simple HTTP messages. This specification defines the core semantics and the behavioral aspects of the protocol.

The default format for the Orchestrator OData metadata endpoint is JSON, and the metadata URL is `https://{yourDomain}/{organizationName}/{tenantName}/orchestrator_/odata`. To change the default format to XML, append `/?$format=xml` to this URL.

For more information on protocol principles and definitions, we recommend checking the [official OData official documentation](URL).

**Note:** We aim at compliance with the OData standard, but cannot guarantee it. While the standard mandates that the metadata endpoint should return XML format by default, we return JSON for historical compatibility.

## Logical resources and metadata

The Orchestrator API provides custom methods for querying stats about various entities registered in Orchestrator. Each logical resource is an OData entity. All entities (such as Robot, Process, Queue) have properties, relationships, and operations.
