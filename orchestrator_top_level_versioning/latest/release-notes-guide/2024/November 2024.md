# November 26, 2024

## Removing the real count hint from Logs
We removed the real count hint from the Logs page and now display only 10,000 items. This change helps maintain a clean and efficient user interface.

## Bug fixes
When you attempted to download more than one file from a storage bucket, the first file downloaded successfully. However, when you downloaded the second file, the first file would download a second time. The issue occurred for storage buckets that had the pre-signed URLs disabled for external storage.

# November 4, 2024

## Migrating to the new permissions model
Starting with December 9, 2024, at the earliest, we will replace the current break inheritance model with the union of privileges permissions model for Community organizations. The change will happen automatically, and no further action is required from your side.

The new model improves access control across all users. As a result, each time you add or remove a privilege to or from a group, all users who are part of that group will start passing that privilege check.

This change impacts the following set of privileges:
- UI Profile settings (No UI access, Personal Workspace only, Standard Interface)
- Update policy settings
- Enable user to run automations
- Create a personal workspaces for this user

Moreover, early in 2025, we will also enable the feature on Enterprise. For more details, check the [Upcoming deprecations page](URL).

## Retention policy updates
We know that streamlining your database is as important to you as it is for us. This is why we are taking our retention policies up a notch by adding the option to delete or archive non-terminal state jobs and queue items.

This new option is integrated in the existing retention policy component at the process level for jobs, and at the queue level for queue items. It is available via a new set of fields dedicated to uncompleted jobs and queue items, respectively.

The default values for jobs and queue items are as follows:

- Completed
  - The default duration is 30 days.
  - The maximum duration is 180 days.
- Uncompleted
  - The default duration is 180 days.
  - The maximum duration is 540 days.
