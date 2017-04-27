---
layout:     post
title:      "Bandwidth-Challenged Programming: Drupal in Sikkim"
description:   "Building modern websites without modern internet."
date:       2016-04-09 12:00:00
tag: 		digital nomad
permalink: "/drupal-sikkim/"
image:
  feature: drupal-sikkim.jpg
  credit: Dave Chakrabarti

---

<p>One of the recurring challenges in the digital nomad world is <em>bandwidth</em>. Not surprisingly, some of the remote parts of the planet we love working from are, by definition, the least connected. If your work involves programming, you're probably used to first-world broadband connections piped directly to your coffee shop. Working high in the Himalayas, on the other hand, requires a different approach, and a different set of tools. I'll outline a the workflow that has helped me as I'm traveling in the Himalayan mountain kingdom of Sikkim, and how it has informed (and improved) my workflow in Chicago or London.</p>

## Workflow Over Tools.

<p>In the past, I frequently adapted my tools to my environment. Most developers do. It's not too painful switching back and forth between Ubuntu, OSX, and a Chromebook these days, and even on a hardware level, it's become second nature to grab a lighter laptop if I'm heading out to work from a coffee shop and switch back to the desktop when I'm at a more long-term location.</p>

<p>Being able to get work done, however, is very different from being able to work at an optimum level of efficiency. While it's certainly <em>possible</em> to upload a Drupal project to a client server from a Nexus 9 tethered to a cell phone's 3G connection, it is highly unlikely to be anyone's preferred workflow for client projects. To transition from being <em>able</em> to work at all to being able to put in ten hours of efficient, productive coding during a client emergency, we need to examine our workflows before worrying about our tooling.</p>

<p>Being able to put in those ten productive hours of code is the difference between taking a few days off to see one of the most beautiful, remote places on earth, and being able to spend a few weeks working from there.</p>

## Code Authoring Environments Are Not Dev Environments.

<p>Preface: If you aren't already using development, staging, and production environments, you should <em>really</em> do that before perpetrating client code at all, let alone from a challenging location.</p>

<p>Like many web developers, I used to think of my "dev" environment as whichever local environment I'm carrying with me (for example, OSX on a Macbook Air). Virtualization adds another layer to that, so I can use a local Ubuntu stack managed by Vagrant as a local dev server. And some specific coding contexts involve their own variations on this; for example, you might want to spin up local dev servers for jekyll, ruby, or node.js code, if that's what you're working on.</p>

<p>As I transitioned to spending more and more time on the road, I started becoming more agnostic to development environments, and I started moving more towards automated configuration for those environments. Once spinning them up becomes trivial, one becomes much more flexible about moving between environments in general.</p>

This led to a belated realization of something I'd been practicing for a while: <em>My code authoring environment is not my development environment.</em>

<p>Over time, I've started doing an increasing amount of testing on the staging server. In many cases, I now write code directly <em>on</em> the server, either using nano in a terminal session for quick edits or Sublime over ssh for actual code. The benefits are huge; just transmitting tiny text edits back and forth is very fast even on slower 3G internet connections, and some operations are <em>really</em> fast on a server. For a Drupal project, think of the pain involved in downloading a contrib module, enabling it, and then uploading the new site to a staging server (involving MySQL + code), versus just using drush directly on the staging server. Once you've done this a few times, it's difficult to go back.</p> 

<p>For small projects, blurring the lines slightly between dev and staging might be all you need. For larger projects or projects involving other developers, a better approach might be to move your development environment to the cloud as well, keeping it distinct from the staging server. I've maintained personal dev spaces online in the past, without other developers even being aware that my code was coming from a Linode instead of my local machine.</p>

<p>This shift in perspective on where your code gets written and tested is also critical to being able to work from a Chomebook, since most folks authoring code from a Chromebook are using entirely cloud-based code authoring <em>and</em> development environments, like <a href="https://c9.io/">Cloud9</a>.</p>

## Real-World Testing: A Drupal Project In Sikkim.

<p>While I'd tried this approach on several projects in the past, I always had the safety net of being able to build out the project locally if all else failed, testing on a local dev server and uploading it to the staging server via ssh. Over these few weeks in Sikkim, that safety net became impractically slow, so I had to trust a little more fully in my new decoupled workflow.</p>

<p>It worked surprisingly well. Drush operations to build a site are lightning fast on my Linode dev server, since the datacenter's blazing fast connectivity means that Drupal modules and libraries install in seconds. Pushing CSS edits back and forth is slightly slower, since I have to wait for the code to hit the remote dev server before I can review it in Chrome, and I'm very used to doing this locally with livereload. Completely dead connections forcing me to work offline (which would have meant rebuilding a local dev server for testing, since I wouldn't be able to test on the Linode for a while) were a concern, but I found I could keep writing CSS code and testing in Chrome for surprisingly long chunks of bug-hunting before <em>needing</em> the dev server, and this only happened once or twice.</p>

What didn't work as well was the client VPN. Since the client is a major university in Chicago, I'd mistakenly assumed that the connectivity on <em>their</em> end wouldn't be an issue, but connecting to their staging server through their VPN resulted in so many AJAX timeouts that some things we take for granted (like configuring Display Suite!) were almost unuseable. Finding workarounds wasn't impossible or time-consuming, but it's worth noting the irony in a developer sitting in a hotel room in a remote Himalayan mountain kingdom complaining about VPN slowness at a university in Chicago. 

## Towards Decoupled Development: Lessons For Chicago

Sikkim was just the latest adventure; in the past year, I've also worked in bandwidth-constrained situations in a hotel room in Mexico, an apartment in Calcutta, coffee shops in Darjeeling (also in the Himalayas), and on the beach in Goa. Surprisingly, however, my workflow didn't change back when I was in London, Oakland or Chicago, with access to much faster internet connections. 

I think this is because I've become very used to the idea of my work being decoupled from the device I'm using. The device becomes a thin client for my VPS a lot of the time, which adds a level of resilience and independence that I think is essential for larger code projects. What happens if someone steals the Macbook, or it gets dropped in a puddle? I can grab a new one and keep working without worrying about synching data; my downtime is literally the time to acquire a new device. There's also an immense freedom in being able to travel with a $200 Chromebook (I'm currently using the Toshiba Chromebook 2, which has a great keyboard and a 1080p screen that's nicer than the one on my Air) instead of more expensive, more prone-to-theft Apple hardware. This has the added benefit of being able to leave the uber-heavy <a href="/pelican-s100-backpack-eighteen-month-review/">Pelican case</a> at home and just toss the Chromebook in a backpack (or in a folder) and head out for the day. 

Disaster recovery isn't the only benefit. I've also found it much easier to collaborate with folks on other projects, since my development environment is already in the cloud. Decoupling from my primary programming device has also made it simpler for me to collaborate with myself, since I can now switch between my <em>own</em> devices seamlessly. I find myself leaving a laptop at a friend's place if I'll be working from there, using a loaner desktop with two gigantic monitors at a client office, and finishing up from my desktop machine at home, <em>all in the same day</em>.

Lastly, this was the push I needed to get much more practical about backups, testing disaster recovery processes, and more fully automating (and standardizing) my development environment(s), all of which I benefit from greatly on the road.

<p>If this sounds complex, it's likely because you're not completely confident with environment automation, git, and / or working in the terminal. It's worth learning! Yeah, I know, you'll be heartbroken if you never have to troubleshoot WAMP again, but try it anyway: the benefits to being less closely coupled to your coding environment are huge, regardless of where you're working.</p>

