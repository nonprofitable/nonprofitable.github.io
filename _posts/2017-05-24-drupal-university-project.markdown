---
layout:     post
title:      "Project Review: UIC Admissions Portal"
subtitle:   ""
tag: [Front-end, Drupal, Universities] 		
permalink: "/uic-admissions-front-end/"
description: "This was the first of two large university Drupal projects I contributed to as part of my engagement with LimeRed Studio, Chicago."
image:
  feature: jekyll-c9.jpg

---

## Areas of Work

A former employee began development of the project, but left my clients with the project undocumented. My main areas of contribution on this project were Drupal (7) site-building and front-end code, while pitching in on occasional infrastructure issues. I was remote for this project, working primarily from hotel rooms and cafes in the Himalayan mountain range, ranging from Northern Bengal to Sikkim.

1. Custom content types
2. Views
3. Display Suite troubleshooting and re-configuration
4. Server-side SASS processing workflow and troubleshooting
5. Theming

<figure>
  <img src="/img/uic-admissions-screenshot.jpg" alt="Screenshot of the new UIC admission portal.">
</figure>

## Custom Content Types

After an initial review period to determine existing architecture and approaches, I identified several areas where existing content types and taxonomies needed further development, tweaks to field configurations, or additional work on taxonomies for views built in future iterations. 

## Views

Much of my site-building work focused on building out missing or incomplete views, reconfiguring them where necessary, and generating views blocks as required by the senior designer / UX architect. 

## Display Suite

The existing prototype made extensive use of Display Suite for custom layouts, so we elected to continue working with Display Suite for the remaining deliverables. This involved creating new theme template files where necessary, since the project required heavily customized internal sections. 

## Sass Workflow

The original developer's theming process involved pushing SASS to the staging server, which used a Node.js workflow for generating CSS files. While we made use of this for the first few development iterations, we eventually found the troubleshooting overhead involved in running Node.js on this particular client-managed staging server was adding significant complexity to theme testing cycles, and moved to a locally-compiled workflow for working with Sass. 

## Theming 

My largest contribution to this project was in authoring front-end code for the theme; this was the major deliverable missing when I took over from the original developer. As wireframes were delivered by the senior designer / UX architect, I built and tested accompanying theme code before submitting them to the testing / review team and the project manager. Work was primarily in Sass, with occasional jQuery, HTML, or PHP snippets as needed. The project was not written mobile-first, but adheres to the client's responsive usability and accessibility guidelines. 