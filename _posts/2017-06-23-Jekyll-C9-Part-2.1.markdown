---
layout:     post
title:      "Jekyll and Cloud 9: Local Testing"
subtitle:   ""
tag: [Tutorials, Jekyll, Cloud9] 		
permalink: "/jekyll-c9-part-2/"
description: "A simple workflow for serving a local Jekyll instance on Cloud 9 for testing and review before pushing changes to your live server."
image:
  feature: jekyll-c9.jpg

---

One of the reasons I like Jekyll (especially coming from the Drupal world) is that it's trivial to run the Jekyll gem locally, generate the site, and view it in the browser. Web development involves an insane number of cycles best described as "build something, then look at in the browser", and anything we can do to make each cycle even slightly faster results in significantly faster development.

As a result, "locally" testing Jekyll was one of my concerns when I switched to a cloud-based dev environment for the Chromebook. Thankfully, there's a pretty straightforward solution. 

You need two things for our "build something, look at it" cycle: A way to get Jekyll to run (i.e. to generate a site for you, automatically, every time you update something), and a URL where Cloud 9 makes your app available for review. 

>Note: If this is your first time setting up Jekyll on C9, you may want to read this first: [Five-Minute Jekyll, Github, and C9 Setup Guide](/cloud9-jekyll-github).

## The Jekyll command needs a couple of parameters.

If you've tried the Jekyll serve command and had trouble with it on Cloud 9, this is usually because it needs a couple of things specified, which are easy to do with environment variables:

{% highlight shell %}
jekyll serve -H $IP -P $PORT --baseurl ""
{% endhighlight %}

Once that generates a site for you, you should see a Cloud 9 help bubble pop up telling you where your code is running. As with a local dev environment, C9 will keep that process running as long as you're working so that Jekyll can watch your directories for changes and regenerate your site. 

If that's all you needed, you're done. If you're like me and have to keep looking up the Jekyll serve parameters every time you start work, read on. 

## Creating a shortcut to run Jekyll. 

If you'd like to be able to run that Jekyll process from the C9 menu in your workspace, it's easy to set up. Assuming your Jekyll serve command now runs without errors and you can review the results in the browser:

1. Click on Run > Run Configurations > New Run Configuration. 
2. In the fields that open in the new terminal tab, call your new configuration something like "Jekyll". 
3. Click on "CWD" and change the working directory to the one where your Jekyll project is housed. This should be the directory your Jekyll command runs from successfully.
4. Enter the command with the parameters into the "Command" field:

{% highlight shell %}
jekyll serve -H $IP -P $PORT --baseurl ""
{% endhighlight %}

You should now be able to test your shortcut by clicking on Run > Run Configurations > Jekyll.
