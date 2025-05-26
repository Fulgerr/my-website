# December 19, 2024
## Healing Agent available in public preview
We are excited to announce the public preview of Healing Agent. This feature harnesses a set of AI-powered experiences across Robot, Orchestrator, and Studio, aiming to reduce automation downtime and enhance efficiency.

Healing Agent is equipped with an intelligent self-healing functionality designed for UI-based automation tasks. Its primary function is to react whenever a change occurs in the application interface or when the UI interference disrupts the automation process.

The Enable Healing Agent functionality can be activated at the process level, on the Additional Settings tab, and at the job level, on the Execution Target tab. It allows you to receive suggestions and detailed debugging information on how to fix issues that may arise during job execution. Furthermore, you can enable Healing Agent™ to take independent action towards fixing these issues. On the Community plan, both options are enabled by default for new processes and jobs.

![docs image](URL)

Healing Agent details and logs are available in the Job details panel, which also includes the option of downloading the debug file or opening it in Studio.

![docs image](URL)

For details on prerequisites and dependencies, check out the [Healing Agent Public Preview Guide](URL).

# December 9, 2024
## Package version behavior change
To avoid parsing errors, we no longer pre-select the package version under Packages - Explore package. You must now select the package version manually from the package explorer.

## Enhancing more filters with multi-selection
We announced the multi-selection feature in  . Starting today, the following filters also support multi-selection:

- The Storage Buckets tab: Options
- The Test Executions tab: Source
- The User sessions tab: Type
- The Unattended sessions tab: Runtime type
- The Transactions window: Revision, Priority

## Removing Asset value help text
In My Workspace - Add Asset, we no longer display a help text when no override table shows up under Asset value.
