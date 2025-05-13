---
id: installing-uipath-assistant
title: Assistant - Installing UiPath Assistant
sidebar_position: 3
---
# Installing UiPath Assistant

The UiPath Assistant is available for both Windows and MacOS machines. Here's how you install it:

## Installing on Windows

On Windows machines, UiPath Assistant comes bundled with the `UiPathStudio.msi` installer. You can install is using the wizard, or by command line when installing the robot. The application can be deployed in user mode or in service mode.

Use the following command to install UiPath Assistant:

assignment

```
UiPathStudio.msi ADDLOCAL=Robot /QUiPathStudio.msi ADDLOCAL=Robot,RegisterService /QUiPathStudio.msi ADDLOCAL=Robot /QUiPathStudio.msi ADDLOCAL=Robot,RegisterService /Q
```

## Installing on Mac

The UiPath Assistant is available for macOS machines as a `.dmg` file for both Intel or Apple Silicon devices.

Installation steps:

1. Download the `.dmg` file from the Featured Download section in the Automation Cloud Resource Center
   * Download for Intel Macs - x64
   * Download for Apple Silicon
2. Double-click the DMG file to make its content available.
3. Drag the application from the DMG window into the Applications directory to install it.
4. Wait for the copy process to finish.