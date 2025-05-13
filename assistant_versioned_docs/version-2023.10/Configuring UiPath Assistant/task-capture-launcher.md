---
id: task-capture-launcher
title: Assistant - Task Capture Launcher
sidebar_position: 5
---
# Task Capture Launcher

Starting with the 2021.10 release, users can download and install or run the Task Capture desktop application directly from
the UiPath Assistant.

This is done by expanding the right side panel of the Assistant, and clicking on the "Document a task" tile from the "UiPath
Products" section, or from the expandable menu right under **Home**.

## Launching Task Capture

If the Task Capture application is not installed on the machine, a pop-up dialog appears with a short description and video
about the application and the user is able to install it from there by clicking on the **install** button.

The installation process takes into consideration the Assistant version (32 bit or 64 bit) and downloads the compatible Task
Capture application.

After the application is [installed](/task-capture/standalone/latest/user-guide/installing-task-capture), the user must acquire a license by following the steps from [this document](/task-capture/standalone/latest/user-guide/activation).

Note: Based on the policies on the machine, administrator rights may be needed to install the Task Capture Application.

If Task Capture is already installed on the machine, clicking on the "Document a Task" tile in the Assistant opens the application
as usual.

## Disabling the Task Capture Tile

The option to run Task Capture from Assistant is available by default for all users and can be disabled from the **Launchpad** section in the Assistant **Preferences** menu.

Note: To disable Task Capture, open `policy.json` and add `disableTaskCapture: true` below (and outside of the) `user` entry.