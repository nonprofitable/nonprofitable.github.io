---
layout:     post
title:      "Installing Android Studio on OSX Yosemite"
description:   "Java versions. Oh joy."
date:       2015-01-05 12:00:00
tag: 		Tutorials
image:
  feature: android-phone-desk.jpg
  credit: Craig Dennis
---

I've been toying with the idea of working through a couple of Android developer tutorials since I grabbed the Moto 360 and started having a lot of "Wouldn't it be cool if..." wearable moments. Google's new Android studio is just out of beta, and is intended as a replacement for the aging Eclipse + Android plugin combo everyone's been using so far. We'll be seeing an increasing number of tutorials switching to Android Studio in the coming months since support for the Eclipse plugin was just dropped, so this is definitely the best way to start with Android. 

Unfortunately, getting Android Studio up and running on OSX Yosemite (10.10.1) required a signicant amount of pain + weird Java version troubleshooting. This is what worked for me. 

<h2 class="section-heading">Get Android Studio</h2>

Start with Studio itself, which you can download from the <a href="http://developer.android.com/sdk/index.html">Android developer site</a>.

This installs, but fails to launch with an error because it can't find Java. This is not surprising. 

<figure>
  <img src="/img/java-yosemite-meme.jpg" alt="Meme: One does not simply install the right version of Java."
  <figcaption>Seal Team 6 couldn't find the right version of Java on the first try.</figcaption>
</figure>

<h2 class="section-heading">Get Java, Round 1</h2>

Predictably, I tried several different versions of Java. Android Studio docs claim you need 7, and links you to <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Oracle's download site</a>, which helpfully tells you that 7's dying as of March '15, and suggests you download 8. Short version after a ton of trial-and-error: download 8. I got 8u25.

This gives me an oddly broken studio install. If I click on the app icon or try to launch it in Quicksilver, it gives me the same error about not finding Java. <em>But opening the app from the command line works fine.</em> 

{% highlight bash linenos %}

Daves-Mac-mini:vm dave$ open /Applications/Android\ Studio.app

{% endhighlight %}

<h2 class="section-heading">Get Java, Round 2</h2>

I spent a lot of time trying to figure this out. Changing perms didn't work, building an Automator script to run the working command didn't work, attempting to grab the executable inside the app package didn't work. I suspect this is a permissions / ownership problem. 

The fix: go get <a href="http://support.apple.com/kb/DL1572?viewlocale=en_US&locale=en_US">this OSX Java update from Apple</a>. 

This got me a working Android Studio installation that launches as expected from terminal, dock, Apps folder, or Quicksilver. 