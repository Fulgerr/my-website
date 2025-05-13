---
id: sign-in-to-your-account
title: Assistant - Signing In to Your Account
sidebar_position: 4
---
# Signing In to Your Account

1. Click the **Sign in** button from the main window or click ![docs image](https://documentationpicturerepo.blob.core.windows.net/screenshots/screenshots/Robot%20+%20Assistant%2020.8/icon.png) to open the **Preferences** menu, then click **Sign In**.
2. A new browser window opens. Depending on your authentication method, you can either log in with your username and password
   or by using one of the available authentication providers.

When you log in, you are authenticated against the default Service URL, `https://cloud.uipath.com`.

Note:

* If your organization is using a basic authentication proxy, the UiPath Assistant automatically detects it, and prompts you
  to enter the username and password.
* If your organization defined a trusted IP range using access policies, and your IP falls outside this range, you will be prompted
  with the following error message: `UiPath Robot Error. Response status code does not indicate success: 403 (Forbidden)`.