---
id: technology-comparison
title: Assistant - Technology Comparison
sidebar_position: 11
---
# Technology Comparison

Depending on your environment, type of automations, and applications used, you can choose one of the two available PiP technologies.

**PiP - Child Session** is best suited for complex automations that make use of hardware events and image-based automation, while **PiP - Virtual Desktop** provides a faster process start time and can run on more Windows operating systems.

If both PiP technologies are compatible with your environment and automations, **PiP - Virtual Desktop** is recommended as it is faster and uses less resources to start the automation. You can also keep a **PiP - Child Session** instance open throughout the day to achieve similar performance when starting an automation.

The main differences are presented below:

## Session authentication and VPN compatibility

| Scenario | PiP - Child Session | PiP - Virtual Desktop |
| --- | --- | --- |
| Normal Password Authentication | available | available |
| PIN Authentication | available`1` | available |
| Smart Card Authentication | available`1` | available |
| VPN Configurations | available`2` | available |

`1` Only works the first time a PiP session is spawned. After that, the PiP session can be authenticated only using username
and password until the next restart of the machine.

`2` More information on how PiP - Child Session works with VPN can be found [here](/assistant/standalone/latest/user-guide/pip-child-session#known-issues-and-limitations).

## UI Automation compatibility

| Scenario | PiP - Child Session | PiP - Virtual Desktop |
| --- | --- | --- |
| Edge/Chrome Browser Automation | available | available`1` |
| Hardware Events UIAutomation | available | not available |
| Image-Based Automation | available | not available |
| Windows Messages`2` | available | available |
| Simulate`2` | available | available |

`1` UIAutomation Activities v22.4 and above is required for Edge/Chrome browser automation when using PiP - Virtual Desktop.

`2` These input methods may not work on all applications. Check the [Input methods](/studio/standalone/latest/user-guide/input-methods) table for the overall compatibility with applications.

## Applications and integrations usage

| Scenario | PiP - Child Session | PiP - Virtual Desktop |
| --- | --- | --- |
| Microsoft Office Suite | available | available |
| Other UiPath Activities/Integrations | available | available |

## Supported Operating Systems and Virtualization

| OS | PiP - Child Session | PiP - Virtual Desktop |
| --- | --- | --- |
| Windows 8/10/11 - Home Edition | not available | available |
| Windows 8/10/11 - Pro/Enterprise Edition | available | available |
| Windows Server 2012/2016/2019/2022 | not available | available |
| Mac OS X | not available | not available |
| Remote Desktop | available | available |
| App-V | not available | available |

## Miscellaneous

| Scenario | PiP - Child Session | PiP - Virtual Desktop |
| --- | --- | --- |
| Ability to run an executable as administrator | not available | available |
| Recording execution or taking screenshots | available | not available |