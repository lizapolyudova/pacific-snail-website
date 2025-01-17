---
draft: true
---

As part of this, I also wanted to include graphs for my [solstice and surrounding events]({{< ref "solstice and surrounding events" >}}) page. I found [this answer on stack overflow](https://stackoverflow.com/questions/29917446/drawing-sine-wave-in-canvas) which creates a beautiful 

The plan would be to create a canvas for each formula and either create a shortcode or just directly call a javascript function which is defined in the library file attached at the top

Another alternative would be to use something slightly more extensible like [funciton plot](https://mauriciopoppe.github.io/function-plot/) javascript library; however, that would require figuring out how to import it into my scripts, since I cannot seem to get it to work "out of the box".

I got it to work! And been hacking away. The library is very pretty and I've been making graphs.

For now: parameterizing the equations by letting the user input their own values (maybe sliders is better?) It's a bit clunky, since ideally the parameters section would travel along with the user starting from the initial definition and live somewhere on the side... hmm...