---
layout:     post
title:      "Drawing Triangles in CSS"
subtitle:   "Learning how the box model really works."
date:       2014-11-18 12:00:00
tag: 		Tutorials
description: "As we write more front-end code, we tend to learn several ways to solve any given problem. As a result, we grow increasingly confident about our ability to <em>solve</em> a problem, and less confident that we've architected the <em>correct</em> solution to that problem."
image:
  feature: css-triangle-tutorial.jpg
  credit: Jay Mantri
---

<p>One the tests I frequently give new front-end developers is drawing shapes in pure CSS, no images allowed. This forces a step away from simply providing the first available solution (using images) and suggests performance considerations (code is faster than images) and creativity (there is no HTML "triangle" tag). Most importantly, being able to draw complex shapes in CSS also demonstrates a much deeper understanding of the box model, positioning, and z-indexing, and watching a new developer think through the process of drawing a complex shape can reveal quite a bit about their analytical thinking ability.</p>

<p>We'll start our triangle with a regular CSS rectangle, and add a background color so it's easier to see.</p>

{% highlight css linenos %}

.triangle {
	width: 200px;
	height: 200px;
	background-color: #2F4F4F;	
}


{% endhighlight %}

<p>Now we'll add a thick border all the way around our rectangle:</p>

{% highlight css linenos %}

.triangle {
	width: 200px;
	height: 200px;
	background-color: #2F4F4F;
	border: 50px solid #444;	
}


{% endhighlight %}

<p>Pretty basic CSS so far, and it doesn't seem at all obvious how we're going to get from here to a triangle. In particular, I couldn't figure out how to get the <em>diagonal</em> parts of a triangle to work from CSS's box model, which deals in distinctly rectangular shapes. </p>

<p>That's because it's difficult to see how the border actually works. In CSS, when you define a border the way I did above, you're actually using shorthand; your browser interprets this as a 50px gray border on the top, right, bottom, and left sides of your rectangle. <em>The edges where the borders meet are diagonals, like a picture frame.</em> Let's alternate colors so this is easier to see.</p>

<p>Pay attention, this part is important:</p>

{% highlight css linenos %}

.triangle {
	width: 200px;
	height: 200px;
	background-color: #2F4F4F;
  	border-top: 50px solid #000;
  	border-right: 50px solid #ccc;
  	border-bottom: 50px solid #000;
  	border-left: 50px solid #ccc;
}


{% endhighlight %}

<p data-height="361" data-theme-id="10130" data-slug-hash="PwwwJM" data-default-tab="result" data-user="nonprofitable" class='codepen'>See the Pen <a href='http://codepen.io/nonprofitable/pen/PwwwJM/'>PwwwJM</a> by Dave Chakrabarti (<a href='http://codepen.io/nonprofitable'>@nonprofitable</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<span class="caption text-muted">When I was figuring this out for the first time, that was my ah-ha moment.</span>

<p>Now we just need to kill the width and height of the main box to bring everything to a point, and let the borders form our shapes for us:</p>

{% highlight css linenos %}

.triangle {
	width: 0px;
	height: 0px;
	background-color: #2F4F4F;
  	border-top: 50px solid #000;
  	border-right: 50px solid #ccc;
  	border-bottom: 50px solid #000;
  	border-left: 50px solid #ccc;
}

{% endhighlight %}

<p data-height="268" data-theme-id="10130" data-slug-hash="MYYYQm" data-default-tab="result" data-user="nonprofitable" class='codepen'>See the Pen <a href='http://codepen.io/nonprofitable/pen/MYYYQm/'>MYYYQm</a> by Dave Chakrabarti (<a href='http://codepen.io/nonprofitable'>@nonprofitable</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<span class="caption text-muted">Do you see the triangles?</span>

<p>Now we just need to subtract the extras. If I want a triangle pointed up, I just make the others transparent.</p>

{% highlight css linenos %}

.triangle {
	width: 0px;
	height: 0px;
	background: transparent;
  	border-top: 50px solid transparent;
  	border-right: 50px solid transparent;
  	border-bottom: 50px solid #000;
  	border-left: 50px solid transparent;  
}

{% endhighlight %}

<p>Note: You'll also need to change .triangle to a transparent background instead of the background-color we were using earlier. Otherwise, even though you've shrunk it to 0px x 0px, the borders you make transparent will just inherit that color instead of a true transparency.</p>

<p>Once you start experimenting with this, you'll realize tweaking the width of the transparent left and right borders can make for some interesting asymetrical shapes. Combine these with CSS rectangles and circular shapes, and you've got the building blocks for some fairly complex elements.</p>

<p>Here's a Codepen version of the final code, in case you want to play with this without firing up your local dev environment. </p>

<div data-height="268" data-theme-id="10130" data-slug-hash="yyLmwo" data-default-tab="css" data-user="nonprofitable" class='codepen'><pre><code>.triangle {
	width: 0px;
	height: 0px;
	background: transparent;
  border-top: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid #000;
  border-left: 50px solid transparent;  
}</code></pre>
<p>See the Pen <a href='http://codepen.io/nonprofitable/pen/yyLmwo/'>Very basic CSS triangles demo</a> by Dave Chakrabarti (<a href='http://codepen.io/nonprofitable'>@nonprofitable</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p>Edit: After digging around online, I found an excellent animation that explains this concept, by none other than <a href="http://chriscoyier.net/">Chris Coyier</a> of <a href="http://css-tricks.com/">CSS Tricks</a> and Codepen.</p>

<p data-height="304" data-theme-id="10130" data-slug-hash="lotjh" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen <a href='http://codepen.io/chriscoyier/pen/lotjh/'>Animation to Explain CSS Triangles</a> by Chris Coyier (<a href='http://codepen.io/chriscoyier'>@chriscoyier</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script> 
