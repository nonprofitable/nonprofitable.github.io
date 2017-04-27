---
layout:     post
title:      "Drupal vs. Jekyll"
description:   "One of the questions I've been asked recently is why I rebuilt this site in Jekyll instead of Drupal, when almost all of my current consulting work involves Drupal site-building and front-end code. It seems <em>appropriate</em> to use the same solutions we build for clients; why isn't Drupal be good enough for me too?"
date:       2016-08-26
tag: 		[Drupal, Jekyll]
permalink: "/drupal-vs-jekyll/"
image:
  feature: drupal-vs-jekyll.jpg
  credit: Unplash.com
  creditlink: https://www.pexels.com/photo/brown-metal-engine-29047/

---

Like everyone else, I've read far too many of the "Drupal vs. Wordpress" or "Drupal vs. custom thingy I built in Rails" comparisons everyone's been fond of writing for the past decade (seriously, that's the Hello World of having a web dev blog), but I think a Drupal vs. Jekyll comparison misses the point. 

## Why clients use Drupal

There are quite a few reasons we build stuff with Drupal. It's reasonably secure, it's reasonably performant, it scales well, and it's <em>extremely</em> customizable when we need to build highly specific content structures and workflows around those structures. Instead of conforming to a CMS package's requirements, the way many Wordpress folks end up doing, Drupal allows us to build a custom CMS based on a client's requirements, assuming there's a budget for it. Essentially, every project gets it's own custom CMS, using Drupal as a foundation, built to manage one particular organization's web presense.

These are good reasons, and they guarantee that Drupal's going to be around for a while. 

In addition to these, there are a couple of personal reasons I should add to the list. We've often advised clients to pick a consulting team they trust instead of a specific CMS; way back at one of the early Nonprofit Software Development Summits we realized that Joomla and Drupal teams estimated roughly the same number of hours to build out different sets of client requirements. This is because there is value in deep expertise; someone who has worked with one CMS for a couple of years and knows it well can build things far faster than a generalist who uses a new CMS for every project, or a Wordpress developer you just persuaded to use Drupal.

This is compounded when a couple of years becomes several years; at that point, most of us have a documented, automated way to deploy projects in our favorite CMS, pre-configured and ready to roll, with our tested, also automated development, staging, and production environments at our disposal.

This creates a significant amount of momentum; I can spin up a Drupal project far, far faster than I can spin up even a trivial website in any other platform.[^1]

[^1]: Or so I thought, till I realized how quickly I was up and running (and writing!) on a completely unfamiliar Jekyll instance.

## ...and why clients do not use Jekyll

The reason most Jekyll users are developers is that Jekyll wasn't <em>intended</em> for non-technical users. Think about the average client: let's say a member of the administrative staff at a mid-sized university, who needs to manage content on their department's site. He probably doesn't have a favorite code editor (or even have one installed), types all content in Word, and expects to be able to use Word to format things instead of writing HTML or Markdown. He has no idea what git is, and isn't going to learn. He won't remember to push stuff to the server half the time, and will then wonder where his content's gone, and a not-insignificant portion of it will be saved in documents named "Untitled(67)" in his My Documents folder. 

Jekyll, in short, isn't a great solution for this kind of client, and this client is *very* representative of the folks out there in the Drupal / Wordpress / Joomla / custom CMS world. 

So there are a ton of good reasons everyone's using Drupal, and quite a few reasons Jekyll is difficult. It'd be simpler to just use Drupal here and be done with it, instead of learning and maintaining a second CMS solution ...which is why previous versions of this site have lived happily on Drupal since '09.

## Understanding the client

To start with, I decided to treat <em>myself</em> as a consulting client. When most web developers build their own sites, we gleefully crank away on code and design (sometimes, we even write content!), bathed in the sublime joy of Having No Client. This means we get to skip a lot of client managery stuff. Beginning by analyzing our own requirements the way we analyze a client's is an important shift.

For one thing, it led me to question a lot of the underlying assumptions in a CMS solution. How useful is the database backend to me, really? Do I really need to handle comments locally? Do I really need a WYSIWYG editor? Do I need one badly enough to handle a CMS platform's maintenance / security overhead? In short, am I at all like my clients when it comes to CMS requirements? If not, is Drupal even a good fit?

<figure>
  <img src="https://cdn.meme.am/instances/500x/65250608.jpg" alt="TinyMCE meme.">
  <figcaption>In Jekyll, you get to write posts in your favorite editor instead of a WYSIWYG interface. Yeah, I know, you're already thinking "But TinyMCE is beautiful, that interface is the reason I got out of bed this morning." I am not thinking this.</figcaption>
</figure>

## Exploring Jekyll

Jekyll is a very different beast. It's a static site generator instead of a true CMS; no database, no php code, no GUI config screens. At first glance, it seemed like a lean, insanely fast, flexible version of the semi-automated site-generation thingies I used to build with Dreamweaver site templates back in '00 or '01; you write some code, let it fly, and it generates a static site for you. Sounds like something out of the bronze age of web development. So why are all the cool kids using it these days?

In brief, because static files are <em>extremely</em> fast (no database calls!), the entire generated site can sit in the cache or on a CDN, and your security footprint becomes tiny (no database calls!). At the same time, your entire site (and all content) can live in version control, your deployment process is git, and your disaster recovery process is to push from any of your git repos to the new / old / any server. If you're allergic to even that much sysadminery (perhaps after too many hours of accidental sysadminly duties for clients?), just point your domain to github and stop worrying about hosting infrastructure and maintenance completely. 

Again, none of those benefits would apply to my clients; most of them would find writing a blog post in markdown or HTML using Sublime Text a frustratingly "techie" process. For me, on the other hand, those are fairly compelling reasons to switch.

This brings me back to the beginning of this post, where I wrote that I thought a Drupal vs. Jekyll comparison was missing the point; the decision had far more to do with what kind of client I am than with the strengths / weaknesses of the two platforms.  

I'm giving it a shot now. if I change my mind, I can always build a similar theme for Drupal and switch back later; I'd just have to figure out a way to move my HTML / markdown posts back into the CMS (worst case, by copy-pasting). If this is successful, I may even experiment with a few client implementations; I've come across a few small projects where clients aren't planning to update content for a year or two, mostly microsites or tiny static sites for a small business. Some of these might be good candidates for Jekyll's speed, security, and simplicity of hosting. 
