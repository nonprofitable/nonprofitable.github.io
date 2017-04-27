---
layout:     post
title:      "Drupal: Disaster Recovery Planning"
subtitle:   "Top-down approaches for managers and consultants."
date:       2016-09-21
tag: 		[Security, Disaster Recovery, Drupal]
permalink: "/drupal-disaster-recovery/"
description: "This article outlines my discovery phase for working with organizations that are starting to create disaster recovery processes for a website or web app. I'm usually dealing with things built on Drupal, but this approach is general enough to work for any CMS-backed website and most web apps. I'm focusing more on developing robust processes than on the actual tech here."
image:
  feature: drupal-disaster-recovery.jpg
---

## Getting Back Up

When you say "disaster recovery" to a developer, they're generally thinking in terms of development tasks. Their thought process tends to involve phrases like "Upload the backup copy of the Drupal database" or "Grab a new VPS and Ansible all the things". And this is a good thinking; without a casual mastery of the actual tech tasks involved, discussing disaster recovery is premature. But I believe there's value in approaching policy from a top-down perspective, instead of beginning with the tasks themselves. Let's assume that the required competence in tech is available and that we're able to fill in those blanks when tactically required. The more important objective from a policy standpoint is to build organizational processes and a training regimen that get us employing those tactics at the correct time, with successful, measured, and improving outcomes. 

With that in mind, I'll avoid the code snippets for things like "How to download a database backup for Drupal" and focus more on creating a top-down organizational strategy for website disaster recovery. My usual discovery process goes something like this.

## 0. Identify scope

It's best to plan our recovery processes around fairly general classes of downtime; in general, the broader our processes are the more we can standardize, and greater standardization leads to easier (re)training and more effective fire drills. If you're new to disaster recovery drills, this keeps things nice and simple, leading to easy-to-implement recovery policies - which drastically increase the chances that your team will accept and *actually implement* your policies when the zombies come. 

We'll start by defining just two tiers of website "disaster". The initial tier involves site-level outages: the Drupal instance itself was hacked, someone pushed buggy front-end code to production, DB connection strings were overwritten (you'd be surprised how often that happens), or the client misconfigured something. The next tier up involves everything lower in the infrastructure stack: The server's been compromised, Apache was misconfigured, the firewall's mistakenly killing https traffic, the hosting company or an upstream entity is having an outage, etc.

With only two tiers, our prep phase involves answering one question: Is our issue in the Drupal instance or lower in the infrastructure stack? There will be edge cases where this question will involve some thoughtful investigation, but for the most part, your disasters will be immediately recognizable as belonging to one class or the other.

## 1. Chart out processes for each tier

Keeping our tiers deliberately broad lets us develop processes that are extremely *general*. For an organization just starting out with website disaster recovery planning, the more general the processes, the easier the team training phase will be. We're deliberately avoiding edge cases here; we want to develop and document one process that addresses *most* of the situations likely to cause a problem in that tier. 

For example, redeploying on a new VPS will solve *almost* all of the problems related to a server misconfiguration, getting you back to your known-good infrastructure setup, vetted by your sysadmin. If you're seeing errors from manual misconfiguration on a server, mismatched Ruby versions, or similar issues, beginning again from a secure, tested configuration that you can reproduce quickly is usually much faster than trying to troubleshoot the specific error on a production environment. 

## 2. Do a couple of dry runs

These aren't fire drills so much as pre- fire drill prep. You're going through the process looking for gaps in your documentation, areas your team needs to brush up on, and areas where new approaches might offer improvements. To return to the example above, your VPS redeployment could be *much* faster using Ansible instead of having a developer following a tutorial in a terminal shell, or running a selection of home-grown bash scripts. Tools like Puppet will even force compliance with known-good configuration states, making it difficult to introduce potentially untested, potentially error-causing configuration changes.

I find it helpful to have the most junior developer or intern man the terminal during these dry runs. 

## 3. Refactor and repeat

Let's say you've tweaked your process, and are now using Ansible to set up a new VPS when you need to recover from one particular class of infrastructure error. A couple of dry runs with the new Ansible process will a. offer a training opportunity, and b. provide quantitative and qualitative data on how the new process improves on the old one. Documenting a 93% reduction in VPS deployment time for a process addressing 86% of your infrastructure errors is huge, and will help you get buy-in from the suits. 

Again, let your most junior developer do the driving. You want solutions that your least experienced team members can handle within acceptable time frames, and with reasonably low error rates. Having them wired to the projector from the beginning will help you spot their stumbling points much sooner, and will give you a ton of ideas on where your documentation / training could use some work. 

## 4. Manage process dependancies

Steps 2. and 3. also play another important role in process development: dependancy management. For example, if you work through restoring a Drupal backup a couple of times, you quickly notice that you're going to need an acceptably up-to-date, known-good copy of the Drupal database and a known-good copy of the code to get a functional Drupal site back up and running. This means your process now needs to address how you're going to acquire, maintain, and make available any required dependancies to the recovery team. 

This brings us to the most important part of disaster recovery: the pre-emergency, ongoing process(es) designed to enable smooth, rapid responses to a website emergency. If you need backups of the Drupal database, for example, how often will you take a DB snapshot? How can we automate that? Who tests the backup, and how often? How screwed would you be if that database snapshot wasn't available?

Most hospitals don't wait till someone has a heart attack to put gas in the ambulance. In the same way, paying attention to the pre-emergency processes you discover as you work through your dependancies pays off in the long run, by giving you well-tested, efficient tools *before* you need them. 

## 4. Set expectations

After a few runs through #2 and #3, your disaster recovery planning should be mature and ready to drill. Fire drills are intended to be high-pressure, realistic scenarios using both expected and unexpected inputs to test a team's response. Deliberately toss in problems they haven't prepped for, including edge cases that may affect both tiers, or may affect one tier while seeming to be wholly contained within the other. 

For more advanced teams, you may include more complex situations (such as an infrastructure error compounded by a compromised Ansible key, or a problem with your git process for pushing code). Be evil. It's good for them. 

The result is a clear set of expectations on recovery times that management can trust because they've been extensively tested, along with a starting point for ongoing processes and dependancy management. 

## 5. Edge cases

This guide is based on my discovery process with organizations that are new to security and disaster recovery; it's intended as a 0-60 to get things rolling. As you work through the steps and start developing your own policies, however, you'll quickly start coming across edge cases (hopefully when you're trying to think of harder fire drills, and not when an evil hacker figures out your sysadmin's password is "password").

We started out with two tiers of problem, and we built two general processes around them to handle the majority of issues we're likely to see within those two classes. Addressing edge cases moves us away from our neat approach of overly-general solutions and problem classes. Still, this is a necessary evil. As your understanding of your infrastructure, application, and threat profile deepens, it's normal to (belatedly) realize that redeploying your entire Solr search backend every time Tomcat has the hiccups is overkill. So you start writing exceptions into your policy, just like you'd handle edge cases in code (for example, if search goes down weekly, reboot Tomcat before applying actual brain cells to the problem). 

Review your edge cases periodically; once they've grown to a suitably-sized collection, it's time to consider a third class of site outage and (possibly) distill several edge cases into a third outage tier, with an accompanying resolution process. 

Remember: Edge cases are your friends. Your ability to identify and address edge cases keeps you from being replaced with a very small shell script. Documenting those edge cases is the difference between an evil bug that kills your app and a routine issue that your junior-most developer has been trained to address. 




