---
layout:     post
title:      "Cloud9, Jekyll and GitHub"
subtitle:   "Authoring Markdown in the cloud."
date:       2016-09-12
tag: 		[Tutorials, Jekyll, Git, Cloud9]
permalink: "/cloud9-jekyll-github/"
description: "Combining the speed and simplicity of Jekyll with the thin-client benefits of authoring code (and content) in the cloud, in five minutes."
image:
  feature: cloud9-jekyll-github.jpg

---

One of the things I loved about the transition to Jekyll was the simplicity of writing in Sublime Text. Sometimes I write directly in HTML, sometimes in markdown. Then I save the post, commit it to git, and do a git push and I'm done. I sometimes wish git was slower so I'd have more time to savor the complete lack of TinyMCE in my life. 

This brought an unexpected hiccup when I started working from the Chromebook; I suddenly didn't *have* an offline editor. I experimented briefly with Kali Linux and Sublime Text running on the Chromebook and decided it'd work when necessary, but a completely cloud-based solution would be more elegant.

The solution worked without a hitch on the first try, took a total of five minutes, and really made me kick myself for not doing this sooner. 

## 0. Housekeeping

I already had a working Jekyll blog hosted on GitHub that I was posting to using Sublime Text on an OSX desktop and laptop. If you're just starting out, you should at *least* have an already-functional Jekyll blog on GitHub before you start this tutorial. In particular, you'll want to make sure Jekyll's already compiling without errors. You don't really need to post to it from the traditional workflow I was using; you could run an entirely cloud-based workflow for blog dev / authoring using Cloud9. 

## 1. Set up your Cloud9 account

If you don't have one already, start [here](https://c9.io) and set up a free account. It's possible to use the free tier indefinitely if you're just using this as a way to work on your Jekyll instance; you only pay if you need more than one private repo at some point. 

## 2. Link GitHub to Cloud9

Since I used my GitHub account to set up Cloud9, that was where I began. Clicking on the repos [link in the dashboard](https://c9.io/account/repos) helpfully had my GitHub repos already displayed, with links for easy cloning in case I wanted to work on one.

If you don't see your GitHub repos, you probably need to tell Cloud9 about your GitHub account. Visit the [connected services section](https://c9.io/account/services) of your Cloud9 dashboard to get it connected. You can also sync with your Google Cloud Platform and Bitbucket repos here. 

## 3. Clone your Jekyll repo into a new workspace

Once your GitHub repos show up, hit the Clone button and it'll ask you how you'd like to set up your new workspace. The Cloud9 free tier offers unlimited public workspaces, but you have to upgrade to a paid plan if you want more than one private workspace here. 

I set mine up as a public, hosted workspace for now; I wanted to be able to test Jekyll builds locally before pushing instead of editing directly on GitHub. I used "Ruby" for the workspace template.  

## 4. Author a test post

At this point, you should have a workspace with your Jekyll repo cloned and ready to go. I poked around the file tree to make sure it was all there, and then wrote a new blog post (this one). 

## 5. Commit, then push 

Once your new file's saved, git status should look familiar:

```shell
$ git status

On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        _posts/2016-09-12-cloud9-jekyll-github.markdown

nothing added to commit but untracked files present (use "git add" to track)
```

As expected, git seems to be working fine, and sees the new file. The rest of your workflow should also be familiar if you've been using Jekyll:

```shell
$ git add -A    # Adds the new blog post.
$ git commit -am "Add blog post."   # The usual commit + commit message. 
$ git push origin master
```

If all worked well, you should see that last command pushing code to your GitHub repo. Note that you didn't have to tell git where to push code; since Cloud9 set up this repo from your connected GitHub account, it's already connected and configured. Simple, huh? 

## 6. Next steps

This gets you an authoring workflow that's entirely cloud-based, using free tools to host your dev environment, author code and content, and a version-controlled deployment process to push code live to GitHub, without cloning code to or editing code on your local environment. In other words, this is the *ideal* Jekyll workflow if you're traveling with a Chromebook, and in the future, I'm curious to see how productive it'd be on something like last year's Pixel C.

I'll likely add on to this tutorial later once I've started using Cloud9 as more of a self-contained development environment, with Jekyll testing / proofreading happening directly on Cloud9 before pushing the final draft to GitHub.

>In June '17, I wrote a follow-up describing the steps required to test Jekyll locally on Cloud9, watching your instance for changes and regenerating your site automatically (as you'd expect if you're coming from developing Jekyll on the desktop), along with a quick automation shortcut: [Jekyll and C9: Launching Local Testing](/jekyll-c9-part-2).