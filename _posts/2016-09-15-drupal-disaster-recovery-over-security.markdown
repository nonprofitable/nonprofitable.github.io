---
layout:     post
title:      "Drupal: Security vs. Disaster Recovery"
subtitle:   "Two roads diverged in a wood."
date:       2016-09-15
tag: 		[Security, Disaster Recovery, Drupal]
permalink: "/drupal-security-recovery/"
description: "For most projects, security is not the solution."
image:
  feature: drupal-security-disaster-recovery-header.jpg
---

I remember meeting a recruiter for a project a couple of years who got very excited when the topic of "server hardening" came up. And that's part of the problem. We've fetishized security-fu to an alarming extent, mostly because we're all living out secret Snowdenesque fantasies in our heads. Behind our keyboards, we're James Bond, minus all the pushups and stuff. And there's an entire industry feeding that fantasy, complete with Certified Ethical Hacker training courses and the next season of Mr. Robot. 

I'm as guilty of this as anyone else. I remember when I first started figuring out VPS security as an accidental sysadmin a few years ago, and I came across that [Linode setup guide that mentioned server hardening](https://www.linode.com/docs/security/securing-your-server). Whoah. I'm going to harden a server. This sounds impressively manly, right?

It's actually not as cool and security-fu as you're given to believe. Soon afterwards, armed with a cursory knowledge of firewall configuration, shutting down non-essential services, running things on nonstandard ports, and a few other tricks and tips that did wonders for my fledgling linux knowledge, I had a "hardened" VPS, ready to defend my Drupal instances against the hacker armies of the deep, dark, internet.

None of this mattered when the client site was compromised six months later; they hadn't budgeted for security updates to the actual Drupal project.

## Two paths diverged in the woods

The reality is that Drupal project security involves *overhead*; an ongoing series of processes carried out by trained, expensive professionals, usually difficult to quantify, with no guarantees of success. *I'm not saying this isn't necessary.* On the contrary, security is so necessary that when we necessarily neglect it, we're screwed. And this is something we see over and over again. 

The reality is that clients with project budgets under, say, $25k, are simply not going to be able to pay for proactive security staff, because one security staff member is going to a draw a salary four times that high. Hell, very few clients under $50k are even hiring consultants to serve as red teams. You'll be lucky if you can land a retainer for a couple of years of security updates to Drupal core and any contrib modules.

> I'm not really calling out Drupal in this post; Drupal's arguably better about security than Wordpress, and the security work that goes into a project as large as Drupal is always going to be far better than anything a small consulting shop is going to be able to custom build and maintain. Importantly, if you talk about security retainers with Wordpress or Joomla shops, you'll start to hear *very* similar stories.

In that light, it's sheer hubris that we've managed to brand security so powerfully that we're still trying to sell it at all. And by comparison, "disaster recovery" sounds like a boring part of corporate management run by the lowest ranking MBA on the team. It's barely a line item on the budget, if it's mentioned at all, and most nonprofit projects I've worked on in the past few years (including a couple of major university website overhauls) had never thought of drilling, measuring, or improving it.

## Planning For Failure

This starts to change if we begin, as Netflix does, with the perspective that security is always an arms race, and that it will inevitably fail. Instead of asking how we can prevent entropy, we accept that infrastructure can fail in unexpected ways, often, and with unpredictable consequences. This leads to what is (or should be) a far more important question: what do we do when we fail?

<figure>
	<img src="/images/drupal-site-down.gif" alt="">
	<figcaption>Handling client calls when Drupal's down. (Image source: Devops Reactions)</figcaption>
</figure>

## Improving Failure

I see several advantages to disaster recovery as the core component of a small project's security strategy.

- Once we accept that infrastructure will fail, it's relatively easy to figure out *how* critical certain kinds of uptime are. For example, an organization might be happiest with recovery times under one minute and no data loss, but when they understand the cost for this, they might be willing to compromise on a weekly backup and <1hr resolution times.
- The resulting processes are easy for consultants or in-house staff to estimate. Project estimation is black magic. Anything that produces project components that can be precisely estimated is a huge plus, and will result in far greater project management zen when stuff breaks. We know *exactly* how much work is involved in taking a weekly Drupal codebase + DB snapshot, and we know how to deploy from known good copies of a site (usually because we use the same processes to push from dev to staging, or from staging to production).
- The resulting processes are *easy to drill*, without requiring the budget for a red team. Drop the staging server with an interesting error at 3am on a Saturday and see how long it takes to recover. Once the team's more seasoned, try this in production. Drilling is the best way to set real-world expectations for both the project team and stakeholders / senior management.
- A couple of iterations will show you the weakest parts of your process. Maybe it's taking too long to move MySQL databases around, and it'd be useful to keep a spare MySQL instance available? Maybe there's too much environment-specific stuff in the site configuration (I'm looking at you, Expression Engine) and it'd be faster to use blue-green deployments for recovery? Maybe you need to automate VPS setups? The focus on better recovery leads to tangible efficiencies in processes ranging across development, devops, and systems administration. 

## The Argument For a Chaos Budget

We're just starting to wrap our heads around the idea of performance budgets, and some of our most tech-savvy clients are getting to the point where they're asking for them. Performance budgeting is the mobile-first of 2016; the value in setting those performance goals is not (just) in meeting them, but in developing with performance as a priority the way we've (hopefully) learned to develop responsive websites with mobile as a priority. It represents a shift in our thinking, causing a subsequent shift in our workflows. 

We should begin approaching infrastructure integrity the same way. If we budget for a certain level of entropy for a project over the course of a given year, we can begin building both initial and ongoing disaster recovery processes into our work, setting rigorously tested expectations for resolving failure(s), with an emphasis on recovery instead of security-fu. 



