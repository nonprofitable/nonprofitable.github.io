---
layout:     post
title:      "Chromebooks For Developers"
description:   "The thin client returns."
date:       2016-08-20
tag: 		[Chromebook, Dev, Thin Client, Gear]
permalink: "/chromebook-for-developers/"
image:
  feature: programming-chromebook-clouds.jpg
  credit: Unplash.com
  creditlink: https://www.pexels.com/photo/jumping-person-nature-mountains-7042/

---

Although my usual coding hardware (a Mac Mini on the desk, a Macbook Air in a Pelican Backpack on the road) continues to serve me well, we've finally reached the point where cloud-based web development is practical, simple, and even compelling. (Don't believe me? Here's a [five minute tutorial](/cloud9-jekyll-github/) for a completely cloud-based workflow for publishing to your Github-hosted Jekyll site from Cloud9). My Macbook Air seems to stay home for an increasing percentage of my travels these days. 

As a VISTA fellow a decade ago, I had a conversation with Phil Shapiro about the potential for thin client computing at public libraries in Washington, DC. Five years ago, I returned to the topic of thin clients, this time for web development instead of community tech training, when I was trying to figure out if it was finally time to replace a Macbook with something other than a newer Macbook - much inspiration came from Mark O'Connor's article on <a href="http://yieldthought.com/post/12239282034/swapped-my-macbook-for-an-ipad">swapping a Macbook for an Ipad + Linode</a>. At the time, however, I was a little too tied to Sublime Text (Mark notes that he was already in love with vim when he made the switch, which makes a <em>big</em> difference), and a little too uncertain about my sysadminly skills to trust a fully cloud-based workflow for authoring code. I ended up grabbing (yet) another Macbook.

## Not Your Grandma's Chromebook

Chromebooks have been around for a few years now, aiming to provide cheap, inconsequential hardware that does one thing well: runs Chrome tabs. Everything that is (or could be) a Chrome "app" is supposed to work flawlessly, and that's it. Super simple, and covers 90% of what your grandmother needs a computing device for, right? And importantly, it keeps you from having to run over and reinstall Windows every couple of months.

In 2014 and '15, Chromebooks had started to stray a little (or a lot) from the narrow scope that had thus far been their forte. The OS was relatively mature, and we started seeing Chromebooks with an array of configurations that would have been considered "high-end" a couple of years ago. At the same time, cloud-based dev environments like Cloud9 were getting a <em>ton</em> of mentions in the web dev world, and offer me a much more familiar set of tools than trying to convert to vim. The two were becoming an increasingly better fit.

In late 2015, I ended up traveling extensively; I wrote code and met clients in Chicago, Oakland, Tijuana, and London, as well as several locations in India ranging from the beaches to high in the Himalayan mountains. I wanted to grab a new backup laptop while I was in the US (prices are a <em>lot</em> cheaper in the US than anywhere else in the world, and it was looking like I'd be leaving Chicago for London just after Black Friday, when pricing was likely to be even cheaper). I assumed it'd being a Mac or a PC set up with Ubuntu. 

## Hardware

I had a pretty good idea of what I'd want from a backup laptop in terms of hardware:

* A good screen, not necessarily a touch screen. Higher resolutions would be nice, but not at the expense of battery life.
* Really, really good battery life. I travel a lot, and a lot of the places I set up don't have power outlets. 5 hours just doesn't cut it for me (this ruled out some of the gaming laptops I'm tempted by on Woot sales every now and then).
* Good keyboard. I type a lot. This ruled out most 11-inch laptops. 
* Reasonably light. Must fit in the Pelican backpack (can't be over an inch thick). 
* SSDs. Once you've worked on a system with solid state storage, it's <em>really</em> hard to go back. 
* Linux-capable, without too much pain, unless it's an OSX device. 

If you're like me, you've already looked at the laptops I was considering last year: the Dell XPS Ubuntu version (gorgeous screen, but pricey), the usual Macbook / Air / Pro releases, maybe an ASUS ultrabook. Also worth noting at this point is that all of those options range north of $800, likely double that for something well-equipped.

Enter the Toshiba Chromebook 2:

* 1080p 13 inch screen, easily better than the one on my Macbook Air. Your mileage may vary if you <em>must</em> have a retina display, but for me, this was perfect. Every review I read about this laptop mentioned the screen, which was a good sign. You're also not paying for touch, which was a plus. I'm not a fan of touch interfaces for authoring code.
* The battery lasts as long as the Air for writing code, browsing, watching a movie, or Facebookery. 
* Keyboard's great. 
* Fits in the Pelican case. 
* SSD. Not a lot of storage, but how much do you <em>need</em> for code? This was a compromise I was willing to try.
* Linux. This was the unexpected plus: A chromebook will run a full Linux distro with <em>very</em> little effort. Much less effort than tracking down drivers for any of the other options I was considering. Even the XPS developer edition had a lot of bugs in the first couple of generations. 
* ~$200 if you wait for a good sale. Available for $300 pretty much everywhere. Sometimes as low as $160 refurb. 

## Can you actually write client code in a Chromebook?

Short answer: Yes. And surprisingly well. 

Switching to a completely cloud-based workflow for writing code involves a time investment, and like any change to your carefully-tweaked-and-perfected workflow, this should be viewed with a healthy amount of skepticism. Your situation will vary, but I was willing to give this a shot for the following reasons:

* The price. Instead of a Macbook Air replacement in the $800 - $1600 range, we're talking about something cheaper than a decent tablet. If it didn't work out, I could leave it on the desk as a spare testing monitor, or keep it around as a guest machine - there's <em>always</em> someone visiting my home office who needs a machine to browse, grab mail, manage content, or check social media. If this were going to be my sole laptop, I would have thought about this some more before committing. As it is, I have both a Mac Mini hooked up to two 1080p screens on the desk and a Macbook Air for the road, so I was more willing to take some chances. 

* Both the hardware and dev environment are portable and disposable. Like many thin clients, I could destroy this in the rain on a motorcycle trip and just grab my code and continue working on the main laptop / desktop later. If Vagrant were hardware, it would be this laptop. 

* The hardware seemed to fit all of my requirements at a fraction of the price. I was willing to compromise on the drive space and reduced processing power, knowing that I'm going to use machine mostly for writing (not compiling) code, offloading the heavy lifting to a VPS somewhere. 

* The intrinsic geek coolness of doing all of my work in the cloud was pretty compelling; it's an idea I kept coming back to, and the Toshiba Chromebook 2 effectively removed all of my excuses for not jumping in. 

* I could always install Ubuntu and use it as a 'nix dev environment if working in the cloud involved too much fail. 

## One year with the Toshiba Chromebook 2

It's been almost a year since I picked up Toshiba's Chromebook 2, expecting it to be a low-powered backup laptop to use for programming-in-the-cloud experiments and authoring code when the Macbook's not around. Instead, I find myself grabbing the Chromebook very often and leaving the Air at home. The Air's undoubtedly packing more muscle in a much sexier, thinner frame (mine's an I7, 13 inch model with 8G of RAM), but how often do I actually need that?

Not that often, apparently. When I'm riding a motorcycle in the mountains, meeting an entrepreneur for two weeks in the middle of the rainy season in Goa, or headed to Tijuana where the Macbook makes me a target, the Chromebook's a laptop I'm not afraid to break or lose. And the more I work in the cloud, the more I'm getting used to the sheer freedom of a device-agnostic workflow. I find myself switching much more easily between devices; I work from the Toshiba at a coffee shop, the desktop at the Calcutta office, and then the Macbook air at a standing workstation without missing a beat. 

If you've recently visited Michael Hartl's outstanding <a href="https://www.railstutorial.org/">Rails Tutorial</a> (frequently refered to as <strong>The</strong> Rails Tutorial), you may have noticed that he now recommends using a cloud-based IDE. While several bootcamps take the view that it's important to learn how to configure and maintain your own local development environment (and I agree), once you have those skills there's a useful and efficient simplicity in using a cloud-based environment that is disposable, recreatable, and portable. It's the reason we all started using Vagrant, but taken to the next level, freed of local hardware. 

## What I'd do differently in 2016

There are a couple of considerations if you're reading this in 2016 and thinking about going cloud-based yourself, perhaps with a Chromebook. While Toshiba seems to be shifting emphasis to enterprise customers and away from consumer products, the Chromebook 2 is still widely available and <em>very</em> cheap. It's hard to find a reason not to grab one, and most of the new Chromebook models that have been released in the past year would be hard pressed to hit that perfect balance between programmer-friendly features and price. 

On the other hand, there's some news in the Android world that's worth keeping your eye on. Android N should launch within a few days, and I'm looking forward to trying out split-screen multi-tasking on the Nexus 9. That one feature is a game-changer; it would mean that devices like the Pixel C are suddenly in the running for cloud-based dev devices. I almost bought a Pixel C last year; the hardware's a lot shinier than the Chromebook, and it looks like a significant upgrade to the Nexus 9, which I absolutely love. I'd strongly recommend sticking with a Pixel or Nexus device if you go the Android route; waiting a year for your manufacturer to upgrade you to Android N for split-screen functionality is going to really suck otherwise. 

The Pixel C would offer a smaller screen than a large Chromebook, but would also be <em>much</em> more portable. Instead of a backpack, I could toss it into my SCOTTeVEST and head to work without any luggage at all. This is very appealing. 

Android has several code editing environments that I've tried in the past, none of which I thought were ready to replace my current workflow. Split screen could change that, and I expect that it will. And, of course, you could always use your Cloud9 IDE on Android, or run your favorite Android apps on the Chromebook (the Chromebook 2 I'm using will support this later in '16, as will several other recent Chromebook models). 

It's worth noting that the <a href="http://yieldthought.com/post/12239282034/swapped-my-macbook-for-an-ipad">Yield Thought article</a> I linked to in the beginning of this post is five years old; Mark was happy enough with his workflow on an Ipad 2 to continue using it for over a year. Modern tablet hardware (Apple or Android) is <em>much</em> better than that. Seriously, if you've been putting this off, there aren't many excuses left.
