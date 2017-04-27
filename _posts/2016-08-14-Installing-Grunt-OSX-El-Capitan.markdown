---
layout:     post
title:      "Installing Grunt For OSX El Capitan"
description:   "Grunt, or any task runner for that matter, tends to be something we install once and forget about. Till an OSX upgrade breaks stuff, of course, and then we frantically look through our installation notes and wade through dependency / permission hell trying to figure out what went wrong. After discovering that my Homebrew installation was borked and reinstalling it from scratch, I figured a clean reinstall of Grunt was the way to go."
date:       2016-08-14
tag: 		[Dev, Tutorials, Node.js, Grunt]
permalink: "/installing-grunt-osx-el-capitan/"
image:
  feature: grunt-osx-el-capitan.jpg
  credit: Unplash.com
  creditlink: https://www.pexels.com/photo/construction-work-carpenter-tools-3327/

---

## Housekeeping

This is where most folks having problems following the docs seem to get stuck; wherever you start from, you're making some assumptions about the tools in the stack available to you (and their versions). 

<strong>It is a very good idea to take the time to install and learn the basic use of the tools everyone else is using.</strong> This (currently) means that most of the tutorials you learn from online will assume you have Homebrew installed, which assumes you have Ruby installed (possibly using RVM if you're also learning / authoring Ruby on this machine). Even if you're never going to write Ruby in your life, it's worth having and using Ruby and Homebrew, if for no other reason than that you won't have to keep asking questions on Stack Overflow when you're following documentation that starts with "Brew something". 

If you already have a working Node / NPM install, you can skip ahead. Otherwise, you'll need the latest version of Node and NPM. This is also a good time to run "brew update" if you haven't done that today, and wait for it to do its thing. 

First, check to see if Node's installed:

~~~ shell
$ node -v
v6.3.1
~~~

If this gives you a different version of node, you're probably fine. It's August '16 as I write this; if you're reading this from the future, it's very likely you'll have a later Node release than the one I've got here. 

On the other hand, if it tells you node's not installed, run:

~~~ shell
$ brew install node
~~~

Like all things Ruby, this'll take a while. If you ran this with Node already installed, it's not a problem; brew will complain that Node's already installed and provide instructions in case you want to remove it. 

Once you're done, you can check if Node's installed using the command above. You can also check...

~~~ shell
$ npm -v
3.10.3 
~~~

...to make sure NPM's installed and current; it installed automatically when you installed Node. 

## Install Grunt

Now you can use NPM to install Grunt. This will run a lot faster than Brew. 

~~~ shell
$ npm install -g grunt-cli
/usr/local/bin/grunt -> /usr/local/lib/node_modules/grunt-cli/bin/grunt
/usr/local/lib
└─┬ grunt-cli@1.2.0
  ├─┬ findup-sync@0.3.0
  │ └─┬ glob@5.0.15
  │   ├─┬ inflight@1.0.5
  │   │ └── wrappy@1.0.2
  │   ├── inherits@2.0.1
  │   ├─┬ minimatch@3.0.3
  │   │ └─┬ brace-expansion@1.1.6
  │   │   ├── balanced-match@0.4.2
  │   │   └── concat-map@0.0.1
  │   ├── once@1.3.3
  │   └── path-is-absolute@1.0.0
  ├── grunt-known-options@1.1.0
  ├─┬ nopt@3.0.6
  │ └── abbrev@1.0.9
  └── resolve@1.1.7
~~~

The Grunt command line interface (CLI) is now installed globally, but this just means that you can use the Grunt command from anywhere in your terminal. You can't actually do anything with it till Grunt's installed, and Grunt needs a local install for each project. This is a common point of confusion. 

If you try to use the Grunt CLI without doing anything else...

~~~ shell
$ grunt
grunt-cli: The grunt command line interface (v1.2.0)

Fatal error: Unable to find local grunt.

If you're seeing this message, grunt hasn't been installed locally to
your project. For more information about installing and configuring grunt,
please see the Getting Started guide:

http://gruntjs.com/getting-started
~~~

...it'll helpfully complain that you need a local installation. I'll add a sample local installation configured for a couple of common tasks in my workflow in a later article. 



