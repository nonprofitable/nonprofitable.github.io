---
layout:     post
title:      " Gutter Colors For Sublime Text"
description:   "The premise is so simple you'll wonder why every IDE doesn't do this by default: for any line of CSS that includes a reference to a color, this will place a small dot <em>of that color</em> in the gutter next to the line numbers. If you work on Other People's Code, especially, this can save you a lot of pain tracking down nested overrides in Chrome's dev inspector."
date:       2016-08-08 11:29:00
permalink: "/sublime-text-colors-front-end-dev/"
tag: 		Tutorials
image:
  feature: sublime-text-gutter-colors.jpg
  credit: Miguel Á. Padriñán
---

<p>You're really going to wish you'd done this sooner if you write a lot of front-end code. (Give it a shot even if you're new to terminal stuff). Quick OSX installation below; if you're on Windows or need a longer walkthrough, Wes Bos has a much more authoritative article on this <a href="http://wesbos.com/css-gutter-color-sublime-text/">here</a> along with some troubleshooting advice in the comments.</p>

<figure>
  <img src="/img/sublime-text-gutter-colors.png" alt="Screenshot displaying gutter colors for a Drupal theme CSS file opened in Sublime Text.">
  <figcaption>Ooooooh. Shiny.</figcaption>
</figure>

## Step 1: Install The ImageMagick Library

This is simple with <a href="http://brew.sh/">Homebrew</a>. If you don't have Homebrew installed, <em>stop reading this and install it now</em>. Seriously. It's just one copy-paste you're done. All the docs you're going to read for stuff like this will assume you have Homebrew installed, which would be reason enough to grab it, but you should grab it anyway because it's really, really useful. 

If / once you have Homebrew installed, do:

{% highlight shell %}

$ brew install imagemagick

{% endhighlight %}

This got me imagemagick-6.9.5-4, though your version will differ based on what's in the repos when you're reading this. That's it; just wait for it to finish running and you're done. (If you're new to using ruby package managers, don't worry if it seems to do nothing for a long time; it takes a while to get moving.)

## Step 2: Figure out where one particular file went.

<p>You now need the path to one particular conversion script (which is part of the ImageMagick library you just installed): </p>

{% highlight shell %}

$ which convert

{% endhighlight %}

For me (currently running OSX El Capitan), this was "/usr/local/bin/convert" but use the "which" command to confirm yours before you set this up. For the configuration below, use your path if it's different from mine. Terminal noobs: learning to use "which" is going to save you a lot of pain someday.

## 3: Sublime Text Configuration

Now you're ready to add this to Sublime. For the installation, open Sublime Text, then:

<ol>
  <li>Command + Shift + P to get you to the command palette.</li>
  <li>Start typing "install" and select "Package Control: Install Package".</li>
  <li>Start typing "GutterColor" and select it for installation.</li>
</ol>

For the configuration:

<ol>
  <li>Find the settings override menu. It's in Sublime Text > Preferences > Package Settings > GutterColor > Preferences - User.</li>
  <li>That opens a config file. Add this to it and save the file: 
      <pre>
        {
        “convert_path” : “/usr/local/bin/convert”
        }
      </pre>
  </li>
</ol>

This seemed to work perfectly for me after one restart when testing on large Drupal theme CSS files, but occasionally failed on smaller test code that I just threw into a file and saved as CSS. Other commenters have suggested that it sometimes takes several restarts before this works.

