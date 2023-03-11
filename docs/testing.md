# 🧪 Testing

## Libraries

- Testing framework: [Jest](https://jestjs.io/)
- Testing library: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- End to End: TODO

## Project Testing Structure

Component (unit) tests are co-located with the component they are testing as described in the [Project Structure](./project-structure.md) documentation.

Page (integration) tests are located in the `__tests__` folder. This directory should correspond to the `pages` folder.

i.e. `pages/index.tsx` should have its tests in `__tests__/index.test.tsx`.

```shell
pages
|
+-- index.tsx       # Next.js page component

__tests__
|
+-- index.test.tsx  # Integrations tests for the page component
```
