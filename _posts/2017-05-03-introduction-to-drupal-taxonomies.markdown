---
layout:     post
title:      "Introduction To Drupal Taxonomies"
subtitle:   ""
date:       2017-05-03
tag: 		[Drupal, Tutorials]
permalink: "/introduction-to-drupal-taxonomies/"
description: "Taxonomies are one of the most commonly used tools for Drupal site-builders and developers. This introduction explains what taxonomies are, and describes a common site development pattern that relies on taxonomies for content type re-use."
image:
  feature: drupal-training-in-afghanistan.jpg
---

## Definitions

**Taxonomies** are the hierarchical sets of terms used to organize content on a website. It is important to note that Drupal does not require hierarchical terms, or even exclusive terms, in a taxonomy; it is possible to use Drupal’s taxonomy system to implement a folksonomy (where users generate organic terms) instead.

Drupal organizes taxonomy terms into collections called **vocabularies**. A site can have multiple vocabularies, and specific content types can be associated with zero or more vocabularies, as needed.

> For example, a university website may have a content type called "events" which is associated with the "department" taxonomy. Based on how events are held at the university, the site may be configured so that an event must belong to one department only (an example of exclusive taxonomy terms). This means that an event belonging to the Computer Science Department cannot simultaneously belong to the Math Department. 

## Re-Using Content Types

One very common site-building pattern is to implement taxonomies to enable re-use of content types. 

For example, our university website from the previous example may want to publish a faculty directory within each department's website section. Instead of creating several identical content types named “Computer Science Department Directory,” “Physics Department Directory,” and so on, we can create a vocabulary where each term corresponds to the name of a department.

Now, instead of creating a new clone of the “directory” content type every time we add a new department to the website, we can structure a general “directory” content type to include a field for selecting a term from the “department” vocabulary. This allows content managers to create a directory and simply assign it to the appropriate department. This also has the advantage of drastically simplifying the "Create Content" administration page, which results in a much less intimidating user experience for content managers

<figure>
  <img src="/img/drupal-taxonomy-screenshot.png" alt="Screenshot showing a taxonomy selector implemented as part of a custom Directory content type.">
  <figcaption>Once a content type has been structured to include a taxonomy selector for a specific vocabulary, the content creation interface will update automatically as you update that vocabulary. For example, if we create a new term in the “department” vocabulary for “Computer Science”, and a content manager creates a new directory on the site, they will now be able to select “Computer Science” under the “department” field. </figcaption>
</figure>

This introduction was originally written for training sessions conducted at the Ministry of Higher Education in Kabul, Afghanistan, for IT teams from eleven local universities, as part of FHI360's [USWDP initiative](https://www.fhi360.org/projects/university-support-and-workforce-development-program). Original training materials and accompanying screencasts from my training sessions there are available in English, Dari, and Pashto from the Ministry of Higher Education. 


