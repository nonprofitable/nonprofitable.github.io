---
layout:     post
title:      "Split Screen On The Nexus 9 With Android N"
subtitle:   "This one's a gamechanger."
date:       2016-08-31
tag: 		[Tutorials, Android N, Nexus 9]
permalink: "/android-n-split-screen-nexus-9/"
description: "Android N has one feature that completely changes authoring (code or text) on Android devices lucky enough to have gotten the update: split screen multi-tasking. A quick walkthrough on how to enable Android N's split screen feature on the Nexus 9, and a few of the ways I've been using this since the official Android N release landed last week."
image:
  feature: split-screen.jpg
---

## Enable The System UI Tuner

This is the easiest way to split screen for me, though enabling it is hidden like an easter egg. First, drop down the notification shade, then drop it down again so it's fully visible, and then press and hold the settings gear icon. You won't be able to see it, but it'll start spinning after a while under your finger; you'll feel the feedback and probably see it spinning oddly as you take your finger off it. (I did not just make that up, seriously, that's how you enable it.)

That gets you a notification message that System UI Tuner has been added to your settings.

## Enable The Gesture For Splitting Screens

Now you've got a settings icon with an extra wrench on it. Go to Settings > System UI Tuner, and click OK when it give you the "Fun for some but not for all" warning. (I didn't make that up either.)

Once it's enabled, click on Other > Enable split-screen swipe-up gesture. 

(Unrelated: There are some cool advanced notification control levels in there that you'll want to play with as well.)

## Putting It To Use

That's pretty much it. Open your first app, then swipe up from the bottom right icon (the one that tiles your open apps), and you're in split screen view. In landscape mode, I sometimes had to swipe the screen over to the left after that to see the app switcher to select the second app. Launching split screen with a long press on the icon (instead of the swipe gesture you just enabled) sometimes had this problem, too. 

<figure>
  <img src="/images/screenshot-split-screen-androidn-nexus9.jpg" alt="Screenshot: split screens in Android N on the Nexus 9.">
  <figcaption>Note the split-screeny icon instead of the usual rectangle. Yay. Can we finally write some code on this thing now?</figcaption>
</figure>

Other than the couple of glitches I mentioned earlier when launching split screen mode, this implementation's pretty slick. You can move the divider bar between your two screens if a 50/50 split isn't optimal. It'll also keep you from crowding an app too much (try it out; apps bounce back to a minimum size if you try to make them too narrow), and the app you're squeezing seems to display perfectly in the smaller space using it's next-smaller responsive settings; think of it like having one tablet app running next to the cell phone version of another app. I'm almost always in landscape mode when I'm using split screens.

Of course, this assumes your apps and website(s) are responsive; horizontal scroll on a website would be a(n even bigger) nightmare if you're keeping a Chrome tab open on only a third of your screen. This might have been a wake-up call for app developers to take mobile-first responsive web development seriously ...but hey, that wake up call was so many years ago that I'm going to assume even your management folks already get it.

While this is probably a nice-to-have feature for most casual users, the niche where this is really a game-changer is the I-want-to-code-in-the-cloud, thin-client crowd. You know, folks like me who're using Cloud9 on a $200 Chromebook instead of taking the Macbook Air on trips? 

As you've no doubt realized if you've tried this on a tablet, switching between apps is a pain in the butt. Going from a dual monitor setup to a laptop screen already sucks because suddenly I have to keep my OSX apps organized on different screens, and I have to scroll left or right through them depending on the context I need. Going from that laptop experience to a tablet has been one order of magnitude harder, since no matter how much screen real estate I have, I was forced to let one app take all of it. I assume writers feel similar pain; having to switch out of their authoring experience to find Chrome every time they need to look something up will never be as conducive to maintaining flow as Googling in a sidebar. 

Being able to (finally) run a browser next to a code editor or a code editor next to a terminal session means that the Pixel C might actually replace my Chromebook in the near future, and that Android devices just learned a very useful trick in general. For a student considering a cheap laptop or Chromebook, or office folks who frequently use the Google-and-write-stuff algorithm, Android may finally be a contender. 

## Android vs. Chrome OS?

All in all, disproving the long-held truism that tablets are for media consumption instead of creation also pits Android tablets against another Google product: the Chromebook. I've written earlier that <a href="/chromebook-for-developers/">thin-client, coding-in-the-cloud is not only possible now, but actually fairly compelling</a>, and I've also recommended the Toshiba Chromebook 2 as <em>very</em> good hardware for this. It'll run Android apps by the end of 2016, and meanwhile, my Nexus 9 is starting to look like it could be useful for a lot of the same things (while being more portable, even with a bluetooth keyboard). 

With this deliberate blurring between the two Google platforms, will Android cannibalize Chromebook sales in the near future? I suspect what we'll see instead is the convergence of both platforms as the lines between them get increasingly blurry; our ideas on the kinds of hardware necessary for productivity are about to change. 