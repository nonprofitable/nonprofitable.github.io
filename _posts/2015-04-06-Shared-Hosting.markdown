---
layout:     post
title:      "Shared Hosting"
description:   "Welcome to the 99 cent cheeseburger of the web infrastructure world."
date:       2015-04-06 11:29:00
permalink: "/shared-hosting/"
tag: 		hosting
image:
  feature: burger-shared-hosting.jpg
  credit: Pixabay
---

<p>Every accidental techie in the nonprofit sector tasked with selecting a hosting provider has been buried under promises of unlimited domains, unlimited email accounts, and unlimited random-techy-sounding-things, all for the low, low price of $2.99 a month.</p>

<h2 class="section-heading">Want fries with that?</h2>

<p>The inevitable spawn of high-volume, low-margin sales strategy and craptacular infrastructure, shared hosting resembles your last regretable cheeseburger in unfortunate ways. The burger chains built cheaper and cheaper mass-produced junk masquerading as a burger, polished those turds till they shone on the TV ads, and found themselves locked in a price spiral to the bottom.</p>

<figure>
  <img src="{{ site.baseurl }}/images/nonprofit-hosting.gif" alt="Meme: Animated illustration of Bilbo turning Gandalf down at the start of a quest." />
  <figcaption>Bilbo, if we sign up now they'll give us unlimited databases.</figcaption>
</figure>
 
<p>You know you should know better, you don't fully understand what it's doing to you, and you realize you're going to regret it afterwards ...but somehow <em>you still end up ordering it</em>.</p>

<h2 class="section-heading">Friends don't let friends share hosting.</h2>

<p>Like needles and underwear, sharing hosting poses very few benefits and quite a lot of risk, none of which may be apparent at first glance.</p>

<ul>
	<li>Shared hosts can't use the same security measures your consultants would consider "standard" on a Virtual Private Server (VPS).</li>
	<li>Shared hosts lock your consultants out of root access, meaning that we can't fix things when they break, or even ensure that things are set up so they <em>don't</em> break.</li>
	<li>Your consulting team is going to waste minutes or hours figuring out how to get your particular hosting account working with your website. This is time you're paying for. Hourly. Did you include a "Consultants figuring out how to make our site work with our hosting account" line item in the project budget?</li>
	<li>There's always a risk that a security problem with another customer will affect you. For example, a customer whose site gets hacked and is used as a spam relay will result in <em>every</em> website on that server being listed as a spammer (and there may be 500 of you sharing that server). Do you need people to actually receive the emails you're sending out?</li>
	<li>Your consultants can't standardize their rollout and deployment for projects, because every shared hosting company is different. Each project involves manual setup, with little or no automation. This means we also can't automate other parts of your project, some of which are really important (like your website backups, or disaster recovery processes if you're hacked).</li>
</ul>

<h2 class="section-heading">But...but...but...99 cents?</h2>

<p>There's a bigger story to pricing your el cheapo web hosting that isn't in the sales pitch. Sure, the cheeseburger sounds cheap, but Americans go through years of dieting, workouts, liposuction, and sometimes death as a result of obesity every year.</p>

<p>We had an indy film website on a VPS hacked in early 2015. They didn't have the budget for continuous Drupal security updates and monitoring, but they <em>had</em> signed up for monthly backups and disaster recovery. When I caught the security breach (always good to catch that kind of thing before the client!), we were able to restore a working copy of the site <em>before</em> the site was publicly defaced, resulting in zero down time. We also ensured that the hack compromised no other projects, and our process for restoring the site was partially automated for faster response time.</p>

<p>By comparison a similar-sized project on shared hosting in early 2014 required $500 for setup tweaks, workarounds, and support requests just to get the site up and running on AN Hosting's shared service (now Midphase). The cost to recover from a similar hack would have exceeded their entire annual project budget.</p>

<p>The reality is that the majority of your recurring hosting / infrastructure tasks, and therefore budget, will be allocated to maintenance, support, security, and disaster recovery. <em>These costs far outweigh the actual monthly cost of your infrastructure</em>. Optimize each of those to make sure you're getting value for money before worrying about saving a buck on your hosting bill.</p>

<p>Every time I let a client talk me into the self-flagellation that is working with shared hosting, I regret it. Almost instantly. And then, agonizingly, over the entire project development, testing, launch, and post-launch processes. Either I end up donating extra hours to keep the client under budget, or the client ends up paying a lot of unexpected extras to make their hosting work. And as a result, an increasing number of clients ends up asking us to host them ourselves (I wrote about this <a href="/nonprofit-website-hosting/">back in '09</a>, in one of the earliest posts I migrated from the old site.) </p> 

<p>Every year, we get closer and closer to having 100% of our clients on VPS or better infrastructure. In 2014 and 2015, we started hosting some of our smaller clients <em>free</em> with a paid support, maintenance, or security / disaster recovery retainer, which got us much closer to that goal, and I've been migrating older clients onto spare VPS environments with every new contract. With any luck, 2016 will be the first year we handle zero shared hosting gigs.</p>


