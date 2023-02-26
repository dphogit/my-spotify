# Project structure

This file contains information about how to structure files and folders throughout the project. The most important takeaway is that the structure needs to be consistent and predictable in which these guidelines should help with.

## Root Structure

```bash
root
|
+-- .storybook      # Storybook configuration
|
+-- api             # Global files for API layer containing requests, hooks etc.
|
+-- components      # Shared components for entire application
|
+-- config          # Global configuration files for the project, shared variables, options, etc.
|
+-- docs            # Documentation for the project
|
+-- features        # Feature based modules based on the domains of the application
|
+-- hooks           # Shared hooks for entire application
|
+-- lib             # Configured libraries re-exported for use in the application
|
+-- pages           # Next.js pages (built-in routing)
|
+-- providers       # Providers for the application
|
+-- public          # Next.js public folder (static assets etc. that are served directly)
|
+-- test            # Test files for the application
|
+-- types           # Shared Typescript types and declarations for the application
|
+-- utils           # Shared utility functions for the application
```

## Feature Based Modules

Features are modules which scope to a specific domain of the application. This is a good way to organize the application and keep things modular. It should be interacted with via its `index` file.

For example the [profile feature](features/profile) contains all the components, hooks, types, etc. related to the `profile` domain of the application and is interacted with via the [`features/profiles/index.ts`](features/profile/index.tsx) file.

```bash
features/profile
|
+-- api            # API layer scoped to the specific feature containing requests, hooks etc.
|
+-- components     # Components scoped to the specific feature
|
+-- hooks          # Hooks scoped to the specific feature
|
+-- index.tsx      # Entry point for the feature, export all the components, hooks, etc. here. Serves as public API for the feature.
```

You can be flexible with what you put in and how you organize the feature modules, but it should be consistent and easy to understand.

## Component Folders

Components should consist of their own folder with the following structure:

```bash
../components/ComponentName
|
+-- ComponentName.tsx             # Component implementation (actual component)
|
+-- ComponentName.stories.tsx     # Component stories for Storybook
|
+-- ComponentName.test.tsx        # Component unit tests
|
+-- ComponentName.styles.tsx      # Component styling using Mantine `createStyles` function
|
+-- index.tsx                     # Re-export the component from here
```
