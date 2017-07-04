---
layout:     post
title:      "Project Review: UIC College of Dentistry"
subtitle:   ""
tag: [Front-end, Drupal, Universities] 		
permalink: "/uic-dentistry-front-end/"
description: "This was the second of two large university Drupal projects I contributed to as part of my engagement with LimeRed Studio, Chicago."
image:
  feature: jekyll-c9.jpg

---

## Areas of Work

My main areas of contribution to [The UIC College of Dentistry](https://dentistry.uic.edu/) project were Drupal (7) site-building and front-end code. I also helped with setting up a git-based workflow for version controlled theming. 

1. Initial setup and site-building
2. Custom content types
3. Views
4. Theming

## Initial Setup And Site-building

I handled the initial Drupal 7 installation and housekeeping tasks, setting up dev, production, and staging servers with a shared database between staging and production, along with initial site configuration tasks (WYSIWYG, filter configuration, initial work on user roles / permissions). Site building tasks included a custom drop-down menu embedded within the site breadcrumbs section (addressed using Menu block, theming to control display, and some light JavaScript to inject items into the DOM at the appropriate point).

<figure>
  <img src="/img/drupal-megamenu-screenshot.jpg" alt="Screenshot of the Drupal megamenu system for the College of Dentistry at UIC.">
  <figcaption>I also performed extensive mega-menu customizations, simplifications, and troubleshooting, resulting from conflicts with incorrectly configured code added by another consultant (three copies of the jQuery library, two different mega-menu modules enabled simultaneously).</figcaption>
</figure>

## Views

I built and configured several views for the project, based on wireframes from the senior designer / UX architect.

## Theming 

As wireframes were delivered by the senior designer / UX architect, I built and tested accompanying theme code. Work was primarily in CSS, with occasional jQuery, JavaScript, HTML, and PHP snippets as needed. My theming contributions focused heavily on the megamenu feature and the dropdown menu embedded into site breadcrumbs.  

As with other projects at Lime Red, code for this theme was not written mobile-first, but adheres to the University of Illinois requirements for mobile responsive, usable, and accessible code. 