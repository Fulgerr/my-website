---
id: widgets
title: Assistant - Widgets
sidebar_position: 14
---
# Widgets

A Widget refers to a plug-in integrated with the UiPath Assistant holding a functionality, for example, the [Apps Widget](/assistant/standalone/latest/user-guide/apps-widget), or your own [custom](https://github.com/UiPath/assistant-plugin-creator) one.

Widgets built by UiPath are distributed via the Official Feed while custom ones are published to the Orchestrator Library
as a `.nupkg` file. In both cases, based on the governance policies, they are downloaded and installed in the UiPath Assistant.

The procedure to download a Widget goes through the following steps:

1. UiPath Assistant reaches out to Automation Ops to fetch the Governance Policy.
2. The UiPath Assistant looks in the Orchestrator Library Feed for the requested Widget.
3. If the Widget is not found there, the Official NuGet Feed is used.

   Note: If both feeds are allowed, the UiPath Assistant prioritizes the Orchestrator Library Feed over the Official NuGet Feed.
4. Widget is downloaded and added to the UiPath Assistant.

Note: For UiPath Widgets (Apps, Marketplace, Automation Store), you don't need to specify a certain version.

![docs image](https://docs.uipath.com/api/binary/assistant/2/511475/102799)

Note:

* Any error encountered related to a widget is displayed in the widget sections.
* In order to see a new widget, you need to Quit and restart the UiPath Assistant or sign out and sign back in.