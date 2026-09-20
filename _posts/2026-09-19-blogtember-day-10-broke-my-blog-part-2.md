---
layout: post
title:  "Blogtember Day 10 - Broke my Blog Part 2"
tagline: "Debugging in process"
date: 2026-09-19
categories: blogtember, writing, habits, challenge, tech, qa, dev
tags: [blogtember, writing, habits, tech, dev, qa, video games, tekken 8]
permalink: blog/blogtember-day-ten-broke-my-blog-part-two/
---

I wasn't sure if I should have paused the challenge to focus *just* on debugging this pagination issue, and then save all my notes for one big tech blog post, or blog along the way. It's not like people are going to be able to see this before I push a fix.

But this time I would feel icky to stop. It's not like I'm out of town, or doing anything outside of my daily routine. Plus, part of this challenge is just building the habit.

I did notice when I pulled up my website locally, the oldest two blog posts were showing up on the blog's landing page. Upon further inspection, I realized that the posts were not in order from newest to oldest. That led me to look into jekyll-paginate-v2. The thing with jekyll-paginate-v2 is that it is not on GitHub's list of officially supported plugins, though research is suggesting I could use GitHub Actions instead of GitHub Pages builder if I really wanted to use it.

We'll see. I'll keep playing around.