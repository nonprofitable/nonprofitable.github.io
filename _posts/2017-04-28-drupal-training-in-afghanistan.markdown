---
layout:     post
title:      "Drupal Training in Afghanistan"
subtitle:   ""
date:       2017-04-28
tag: 		[Drupal, Training, Afghanistan]
permalink: "/drupal-training-in-Afghanistan/"
description: "I'm currently in Afghanistan, handling training and mentoring operations for 11 university websites and the Afghan Ministry of Higher Education."
image:
  feature: drupal-training-in-afghanistan.jpg
---

I'm now halfway through a training engagement teaching IT teams from several universities how to administer and manage their Drupal infrastructure. The projects were developed by the Techlab team at FHI360, an international development organization, as part of the five year USAID-funded [University Support and Workforce Development Program](https://www.fhi360.org/projects/university-support-and-workforce-development-program).

## Training Goals

My audience for this engagement ranged from experienced programmers and current computer science faculty in Afghanistan to IT officers who fill what in the US would be the "accidental techie" role at their organizations, handling a wide range of tech-related tasks (including website management). This posed a problem in managing outcomes; some of my attendees are overseeing content migrations to the new platform, and only need to learn a few things beyond basic content management workflows, while others are expecting code-level access and the ability to develop custom themes. Most speak some English, though almost all of my attendees are more comfortable in Dari or Pashto. 

My objective here is capacity development; the primary goal is to train local teams to the point where they can oversee their own content migration staff, build out new features using custom content types and views, and manage complex website roles / permissions. A secondary goal, as time permits, is to mentor some of my attendees individually to work on more advanced topics, such as theme file organization, installing and configuring local development environments, and building multilingual content with translation workflows for their own projects.

## Lesson Planning

As I've done with similar training engagements in India in the past, I've structured most of each class as hands-on time, with attendees building things on their testing sites. This allows me to spend as much time as possible walking around the room, looking over their shoulders, and offering one-on-one or one-on-three mentoring as needed, based on where they're getting stuck. I demo something on the projector (once I persuade the HDMI dongle to work for a while), answer initial questions, and then have them build something similar on their own, breaking into groups as needed.

>I've found the Samsung Chromebook Plus to be an unexpectedly appropriate teaching tool in classroom settings. Even under bright tubelights, the screen is painfully bright if the display brightness is set above 70% or so, the battery life is adequate (though not as good as my Macbook Air), and I frequently find myself holding it in one arm in tablet mode as I walk around the class, either using it to demo something or to accomplish quick tasks while walking / standing (like assigning Drupal permissions for a new content type a participant is working on). It is **extremely** difficult to switch back to the Macbook Air's display once you get used to the high density display on the Chromebook Plus. 

Update: Since I've gotten a couple of questions on this and on using Chromebooks for this kind of work in general (this is my second), I wrote a more detailed [Samsung Chromebook Plus field test](/afghanistan-samsung-chromebook-plus) based on my experiences in Afghanistan.

## Lessons From Afghanistan

Kabul is breathtakingly beautiful.

<figure>
  <img src="/img/afghanistan-ministry-higher-education.jpg" alt="Ministry of Higher Education, Kabul, Afghanistan.">
  <figcaption>Walking with my class through the park-like Ministry of Higher Education (MoHE) complex, it's easy to forget we're in the middle of Afghanistan's largest city. This was where the two sides used to meet to discuss a possible truce, so both sides agreed not to shell it.</figcaption>
</figure>

I'm currently at the end of the classroom training component for this project, and taking the weekend (which is Thursday and Friday here) off before beginning the second phase, where I'll be doing one-on-one mentoring for the Afghan consultant who'll be playing an ongoing support role for the attendees of my previous class. 

Overall, I'm happy with the progress they've made so far. I'd initially assumed that this training engagement was too brief for a complete Drupal administration overview, and I'd still like to have had more time with them, but on the whole, they've come a long way towards being able to manage and implement site functionality. 

Views is the topic most new Drupal administrators have the hardest time with; the difference between Views and a custom content type or merely creating a long custom "basic page" with manually created links to content isn't completely obvious to most beginners, especially ones coming from the WordPress world. I was able to spend a little over two days on hands-on Views creation, and most of my attendees seemed very confident about creating their own Views (even ones using their custom content types, specifying their own fields) by the time the class ended. 

I was particularly impressed with Zaman, the local support consultant (and, frequently, my classroom translator). He's had some experience with WordPress, and most folks with that background have a difficult time transitioning to more complex Drupal projects. He's a very quick study, and seems to grasp most of these concepts far faster than the other attendees. 

One thing I would *definitely* change if I were doing this again is the training environment: building siloed training sites for each participant, with *no* shared user accounts. 

>As one of my close protection officers put it: "Afghans all sit and smile in your class, but no two Afghans can agree on anything, and they're always one small step from an argument."

This is completely at odds with my initial impressions of Afghans; everyone I've met here is warm, welcoming, and friendly. Similar to my experiences in Kashmir (which is only 500 miles or so east of here); the way people treat me suggests a very different world from the constant security threats and daily attacks that have become a way of life here. 

For this class, I'd had participants using one common staging website with a common admin user. The result was, frequently, chaos. They deleted my user account, demoted me from admin roles, deleted each other's test users, and then moved on to deleting each other's staging site content. Three of my attendees will need their staging websites rebuilt now that the class is over, with new user accounts locking their fellow class attendees out of their projects. Some of this was accidental; some of it was not; I was forced to limit some of their permissions on their testing sites for the last couple of days of training. 

On the other hand, at least they've learned how to manage Drupal users, roles, and permissions fairly well.

## Mentorship And Capacity Building

My contract with the USWDP project was extended after I arrived in Afghanistan to include a further week of mentorship, capacity building, and infrastructure assistance, including the installation of Afghanistan's first hypervisor in the Ministry of Higher Education's new server room. I spent most of the week in one-on-one sessions with Zaman, the USWDP technical consultant and CMS trainer. We focused on identifying potential problem areas with ongoing support for these university projects, developed strategies to ensure long-term sustainability, and reviewed a couple of the more complex Drupal administration topics that trainees may have follow-up questions on.

<figure>
  <img src="/img/sunrise-kabul.jpg" alt="Sunrise in Kabul.">
  <figcaption>Kabul is such a beautiful city, filled with people working to rebuild their country, incredible food, and breathtaking mountain sunrises. I'd love to see more of it. </figcaption>
</figure>

