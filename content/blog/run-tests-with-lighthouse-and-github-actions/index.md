---
title: Run tests with Lighthouse and GitHub Actions
date: 2020-07-23T15:41:16.583Z
description: Use GitHub Actions to run Lighthouse and audit your Gatsby website.
---
Add a GitHub workflows folder to your product if you don't have one already, and add a `yml` file to that folder (the name doesn't matter here). Once you've got `.github/workflows/lighthouse-ci.yml`, add the following code:

```yaml
name: Lighthouse CI
on: 
  push:
    branches:
      - master
jobs:
  CI:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: "14.x"
      - run: npm install
      - run: npm run build
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v3
        with:
          configPath: './lighthouserc.json'
          temporaryPublicStorage: true
```

Then add a file to the root of your directory, called `lighthouserc.json` and add this configuration:

```json
{
    "ci": {
      "assert": {
        "assertions" : {
          "categories:performance": ["warn", {"minScore": 0.9}],
          "categories:accessibility": ["warn", { "minScore": 0.9 }],
          "categories:best-practices": ["warn", { "minScore": 0.9 }],
          "categories:seo": ["warn", { "minScore": 0.9 }]
         }
      },
      "collect": {
        "url": ["http://localhost/"],
        "staticDistDir": "./public"
      }
    }
  }
```

You can change this config as much as you want. Now Lighthouse is only checking the index page, and giving warnings when the score of the categories is below 90%. But you can also change these warnings into errors and adjust the minimum score for example. 

If you want to check more pages, you just add a URL to the array:

`"url": ["http://localhost/", "http://localhost/posts/"],`

The `localhost` here doesn't refer to your own localhost, but to the one Lighthouse uses. It will for example use `http://localhost/1234` to run audits, and automatically updates the URLs in this array to the one it's using. 

Once you've set this up, you push to master and you'll see the results of this action in the `Actions` tab on GitHub. If you get a warning (or error), you'll see more details about it in the `Annotations` section when you've clicked on that particular workflow. Here you'll also find the link to the Lighthouse reports, which are automatically generated and temporarily stored. 

You can find more info on the page of the Lighthouse CI action I used [here](https://github.com/treosh/lighthouse-ci-action).
And also on the official Lighthouse CI [page](https://github.com/GoogleChrome/lighthouse-ci).