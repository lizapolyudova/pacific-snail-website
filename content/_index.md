---
title: Introduction
type: docs
---

## Home

This is my ([Digital Garden]({{< ref "Digital Garden" >}})): a corner of the world on the internet I sporadically maintain, plant seeds which grow exposed to the wild unknown and nurture where I get the chance.

Less metaphorically speaking, this is intended to be a blend of:
* notes I'd like to share with fiends (examples are [makerspaces]({{< ref "makerspaces" >}}))
* writeups on things I learn about (Archeoastronomy) as well as media impressions (`Reviews`)
* finally, it's a compilation of beautiful places on the internet that I wish to return to. Small mementos from the past which can remind me while it can seem like we live in a cold dark universe of corporate entities trying to spam every single brain cell with their shorts - other digital gardens exist. [places on the internet]({{< ref "places on the internet" >}}))

Here are recent things I am thinking about:

- [ ] [personal museums]({{< ref "personal museums" >}}). Human tendency to drag everything they love into their home. We decorate by brining what we love most on the outside in. We go on journeys and bring back postcards, magnets, rocks.
- [ ] [Upcycling art]({{< ref "Upcycling art" >}}). Trying hard to come up with projects which can make use of my increasingly growing and increasingly varied collection of "trash". What is trash anyway?

## technical info
* built using [hugo](https://gohugo.io/) static site generator ([book theme](https://themes.gohugo.io/themes/hugo-book/))
* hosted on netlify
* most content syncs from an [obsidian](https://obsidian.md/) (my primary note-taking app)

The setup might seem a bit convoluted, but it's what I have so far:

hugo file structure looks like this:
```
├── archetypes
│   └── default.md
├── assets
│   ├── _custom.scss
│   ├── _defaults.scss
│   └── themes
├── content
│   ├── _index.md
│   ├── pages
│   ├── pages-soft -> /Users/snail/Documents/obsidian-root/website
│   └── posts
├── data

```

hugo-pages theme allows to auto-generate a table of contents based on a nested folder structure (such a relief!) for which I use "pages"

So, I have pages-soft be symlinked from obsidian notes, which means I can edit my "website" from obsidian which is where I'd take notes to begin with and it will end up in my website.

But `pages-soft` and `pages`?
git does not follow links; so while it's true that it works fine for local development, in order to be able to actually check in content and sync it, I have to have create hard links at some point.

I am not aware of anything that will "materialize" the soft links; rather, I choose to have two separate directories and have the following pre-commit hook which makes sure state is captured

```
#!/usr/bin/env bash

cd content
rm -rf pages && cp -r `readlink pages-soft` pages
cd ..
```

might not be the most elegant, but it works :)