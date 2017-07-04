---
layout:     post
title:      "Case Study: Drupal For Intranet Directories"
subtitle:   ""
tag: [Kolkata, Drupal, Startups] 		
permalink: "/drupal-for-intranet-directories/"
description: "Due to the decade-long maturity of custom content types and views, Drupal is a near-perfect platform for building intranets that require customized directory listings."
image:
  feature: jekyll-c9.jpg

---

## The Project Brief

After a few initial meetings with the startup founder and her team, we kicked off a more formal discovery phase and began prioritizing requirements. The major deliverables were:

1. A website built on a CMS with a similar management interface to GeoScholars.com, which I had built for them the previous year. They liked the administrative interface and had trained two team members on it internally, and wanted to minimize re-training for the intranet. 
2. A hardened VPS configured to host the project, with a maintenance contract for security updates and a disaster recovery retainer for six months. 
3. A directory of student resumes that their job placement team could search quickly to match students based on job / project requirements coming in from placement partners.
4. Pre-configured listings on a dashboard of student resumes matching frequent requests, such as "web development" or "graphic design".
5. A database of jobs available for students in the placement program.  

## Architecture

The project was built using the then-current Drupal 7 release, using the same CKEditor WYSIWYG interface as their existing website to maintain continuity for staff training purposes. The admin panel looks and feels almost identical to their existing public site, though the front-end for the portal uses a custom theme implementing the same branding color palette.

Drupal is particularly well-suited to this kind of directory development due to the combination of the Views and Custom Content Type functionality. For this project, we were able to build out basic "resume" and "job posting" content types in early iterations before a full set of field requirements was finalized by the client team, hook them up to appropriate views for canned reports appearing in an administrative dashboard (using views-generated blocks and the menu block module), and update both content types in later iterations as new fields were requested, along with (in some cases) accompanying views. Taxonomy term selectors allow GeoScholars staff to categorize both resumes and jobs based on specific criteria, such as "graphic design" or "unpaid internship", which are then used by views to display data for the staff dashboard.

Theming was mostly mobile-first, written in CSS, using Bootstrap. Very light jQuery was used for UI effects and for a slider of high-priority items over the dashboard (with a back-end generated in views).

User permissions followed a similar model to that of their existing public website; a site administrator role for a team member with a deeper technical background and some Drupal training, and a site manager role for their non-technical team members who will be adding / managing both databases.

>Note: although Solr was deemed out of scope for this particular project, it is worth noting that Solr integration offers extremely powerful Amazon.com-style faceted search capabilities for this kind of directory / database, while adding some infrastructural / maintenance complexity and overhead to the project budget. 

## Infrastructure

The project was hosted on a VPS at [Linode](http://linode.com), my favorite hosting provider. The server was built using Ubuntu 16.04.2 LTS, running a fairly standard LAMP stack with Drush installed. A partial list of hardened features includes firewall rules, switching off unused services, disallowing root ssh, and switching a few things to nonstandard ports. 

I haven't pushed all of these setup tasks into Ansible yet, but plan to do so in the coming months to make this more replicable. 



