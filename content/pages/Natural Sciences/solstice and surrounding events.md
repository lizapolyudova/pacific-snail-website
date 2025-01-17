---
title: solstice and surrounding events
tags:
  - astronomy
description: earliest and latest sunsets, sunrises and solstice
---

<script src="https://unpkg.com/function-plot/dist/function-plot.js"></script>
<script src="/js/sin-graph.js"></script>

[solstice and surrounding events - working notes]({{< ref "solstice and surrounding events - working notes" >}})
## preface
Emily texted me a few days ago: it's the earliest sunset of the year today! 
Funny I thought - solstice is not for another few weeks - which I promptly pointed out to her. Turns out those are distinct phenomena.

The day after we meet at a cafe. Both intending to be there at 530 and both arriving an hour early to get some quiet time. Have I had the chance to figure out why it is that the sunset happens before the solstice? Not yet. 
We attempt and earth model with a yarn - it is entirely insufficient. I place my hypotheses:

## questions
* earliest sunrise then must happen before the summer solstice
* is it the case that latest sunrise would happen on the day of the solstice and starting from that, the day would start to increase?
* is the difference due to the elliptic orbit of the earth which has its longer radius that does not exactly match the "peak" position at the solstices?

almost none are correct as it turns out
We start plotting.

Here's a sin wave for the sunrise. Starting at the fall equinox. going up (hours on the day) towards winter solstice and falling back down through "zero" towards summer solstice for its earliest (or so I think at the time) - point. Let's call this one point of reference


{{% aside %}}
parameter naming guide: 


* $A$ corresponds to amplitude - sunrise and sunset get individual values
* $B$ corresponds to baseline (sunset and sunset get different ones)
* $\theta$ is the possible offset between periods of the two.

In this model, we are assuming that sunrise and sunset are both always sinusoid curves. The first graph displays sunset in red and sunrise in blue; the second graph displays difference between the two.

For example, if earliest sunset occurs at 5pm and latest at 10pm,
you could set the baseline to 7.5 and amplitude to 2.5.

{{% /aside %}}

<div id="graph-input">  </div>  


$A_{rise} \cdot -sin(t)$
$A_{set} \cdot sin(t+ \theta)$  
  
<div class="graphs"  style="background-color:white; margin:auto; display:block; width: auto"    >  
<div id="rise"> </div>  
<div id="diff"> </div>  
<script>addParams(); setPlot()</script>  
</div>

with theta representing the radial offset with 2pi representing the full year.
$A_s$ and $A_r$ represent the amplitude of the waves.. in the case that they are not identical... 

>  For all we know, this is not quite correct, either. in my mind I am thinking - I should be thinking of the elliptic orbit as a parametric equation and using that, since that's my hypothesis.

Alright then. // include plots as well...
so the function of our day length would be 
$$Base_s + A_s \cdot sin(t + \theta) - (Base_r - A_r \cdot sin(t))$$$${Base_s-Base_r} + A_s \cdot sin(t) \cdot cos(\theta) + A_{s*cos(t)}\cdot sin(\theta)+A_{r}\cdot sin(t)$$

ok I want to find min and max values of this function (or rather, the t values at which they occur). I am pretty sure to do that I'd want the derivative to be 0.
Keep in mind that cos(\theta) is a constant


$$cos(x+\theta)\cdot A_{set}+cos(x)\cdot A_{rise}$$

 needless to say, I don't get very far with my math. And, as it turns out - a lot of my initial assumption are wrong. However! We did find answers to our initial hypothesis even with the limited data and slightly generalized premises.
 
* The converse of the statement "earliest sunset happens before the winter solstice" is in fact "latest sunset happens before the summer solstice" - rather than anything about sunrises, as their period is identical.
* Latest sunrise does **not** in fact happen on the day of the solstice. Rather, it happens about the same time **after** the solstice as the sunset extrema happens before. This got me thinking about matching rates of changes on the curves of the sunset/sunrise curves and whether their amplitudes might be different.


## follow-up
I got home and after some existential struggles I am currently going through (unfulfilling job etc) I decided to return to my question.
I stumbled upon [this reddit thread](https://www.reddit.com/r/askscience/comments/18ggkyq/why_is_the_earliest_sunset_in_the_northern/) in which the first commented **also** hypothesized about the elliptic nature of the orbit. However, could not justify their reasoning. The second one however links to something interesting called [annalema](https://en.wikipedia.org/wiki/Analemma) which refers to the north-south rather than east-west tilt of the earth's rotational axis. This seems much more in line with why sunset and sunrise times would be different.

> The exact dates are those [earliest/latest sunrise/sunset] on which the Sun is at the points where the horizon is [tangential](https://en.wikipedia.org/wiki/Tangent "Tangent") to the analemma, which in turn depend on how much the analemma, or the north–south meridian passing through it, is tilted from the vertical.

## fact checking

[sunset and sunrise plots]({{< ref "sunset and sunrise plots" >}}) is a related idea I had about expressing intuition in a graphic. Which apparently is non-trivial given that there's [a whole wikipedia page]( https://en.wikipedia.org/wiki/Sunrise_equation) on the "sunrise equation"

In addition to that - next thing I am learning that even my hypothesis about sunset/sunrise being sin waves is almost entirely wrong. Taking a look at the solartopo[3] link at something closer to the equator, the sunrise/sunset times more closely resemble a sum of multiple curves? I'd love to try and deconstruct it...
## links
* https://en.wikipedia.org/wiki/Analemma
* https://en.wikipedia.org/wiki/Sunrise_equation
* http://www.solartopo.com/daylength-course-of-the-year.htm
