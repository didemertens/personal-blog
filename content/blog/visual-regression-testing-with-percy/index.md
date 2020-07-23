---
title: Visual regression testing with Percy
date: 2020-07-23T16:02:37.777Z
description: Set up visual regression tests for your Gatsby website with Percy.
---
Go to the [Percy website](https://percy.io/) and create an account. Then add a project (it's easiest if you give it the same name as your repo) and copy your PERCY_TOKEN. Keep this token a secret, and go to your repo on GitHub. Click on settings > secrets and add your token here. 

Then in your `.github/workflows` folder, create a `yml` file and add the following code:

```yaml
name: Percy Testing
on: 
  pull_request
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: "14.x"
      - run: npm install
      - run: npm run build
      - name: Percy Test
        uses: percy/snapshot-action@v0.1.0
        with:
          build-directory: "./public"
        env:
          PERCY_TOKEN: ${{ secrets.PERCY_TOKEN }}
```

This will make snapshots which you can see on the Percy website, and you can keep an eye on all of the visual changes there. 

But you can even get checks to pass/fail in your pull request if you add the Percy integration on GitHub. Go to your project on the Percy website and click on `Integrations`. Then install the integration for GitHub and add your repo to your Percy project. For every pull request, you can now approve (or not) the visual regressions Percy has spotted. 
