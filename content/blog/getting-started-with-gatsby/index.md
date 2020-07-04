---
title: Getting started with Gatsby
date: 2020-07-04T14:06:34.867Z
description: Everything you need to know for your first Gatsby project.
---
Gatsby is great, and their documentation is awesome, but there are a couple of things you have to keep in mind when getting started with Gatsby.

**What is Gatsby?**

First things first, Gatsby is a static site generator. This means that it builds your website just with static files, which means it's extremely fast and good for SEO. Because everything is prepared at build time, don't use Gatsby when you know the content of your website will change a lot. Want to create a website where millions of users can create posts? Run away now. Want to create your personal blog? Then continue reading.

**Create your Gatsby project**

Use a project from Gatsby's [starter](https://www.gatsbyjs.org/starters/?v=2) collection or create your own Gatsby project with the [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/), and open your project. 

**Gatsby-... What dis?**

So now that you've got your basic project running, let's look at all of those `gatsby-` files. 

* Gatsby-config: This is one of your most important files. Here you can see your metadata and all of your plugins. This is also where you add a plugin after installing it. With Gatsby's plugins you can add all sorts of features to your website, for example for using TypeScript, Sass or for connecting the Netlify CMS. So you'll only change this file when:

  * You first create your project to change the metadata
  * You've installed a plugin
* Gatsby-node: This is one of the magical files of Gatsby. It runs once when your website is build, and can do really cool things like dynamically create your pages. Let's say you are creating a blog with multiple posts, you don't want to create pages for each of those posts (cause we lazy). So what you do is use your `gatsby-node` file to create a page for each post. So you'll mainly use this file when:

  * You want to dynamically create pages
* Gatsby-browser: So we now know that Gatsby builds your website during build time, what happens if we want to do interact with the user's browser? `Gatsby-browser` to the rescue, where you can add different APIs exactly for this purpose. You'll probably won't use this one a lot in the beginning, but use it when:

  * You want to do stuff that affects the user's browser
* Gatsby-ssr: And then we have `gatsby-ssr` which does the same thing as `gatsby-browser` but then for server rendering APIs. You won't really use this one at first either, but use this when:

  * You want to change static files while they are being rendered on the server side

**Next!**

Now that we've looked at the root files, let's open the `src` folder. You'll find 3 very important folders here: components, pages and templates. So what's the difference?

* Components: These can be seen as the building blocks of your website, which can be used inside your pages. For example, you can create a footer component and add that to all of your pages.
* Pages: This is where a lot of Gatsby's magic happens. Any file you add here will automatically become a page WITH a path... so don't use funny file names here.
* Templates: Remember that we were talking about dynamically creating blog posts? This is where you would create a template for a post, which will be used by `gatsby-node` to exactly create that page. Don't worry if you don't see this folder, it depends on what project you started with. 

That's it! Play around with the files and don't forget to look at the Gatsby documentation - it's amazing.

**Wait... what about that Gatsby favicon?**

Go to your `gatsby-config` file and change the favicon (called 'icon' here) in the `gatsby-plugin-manifest` settings.