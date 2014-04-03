---
title: Week-o-Games 1
author: snd
date: 2014-04-02 23:21
template: article.jade
---

I have been devoting a lot of time and attention to various projects over the past few weeks. Subsequently, programming has taken a bit of a back seat.

<span class="more"></span>

I have a ton of existing projects to pick up agian, ranging from intersting to useful, but with PAX East on the horizon I thought I would do some game stuff. I have one week until I'll be departing for BECE (leaving a little earlier than the rest of the crowd!) so I figure I would do a week of games to countdown to the show.

Week of Games Game #1

Rainbows!

I have not touched jam in a long while (and to make matters messier, I left it behind in the middle of some restructuring and clean up, oops), so this was a warm up. I spent a good deal of time discovering and fixing bugs in my branch of jam, which will probably help later in the week (though there are a few bugs I am just going to sweep under the rug for now...). I also added back in the main camera which was dropped during some rewrite or another, as well as data urls support.

Going into this, I wanted to build up a suite of prototyping tools, so part of the day was spend on that. Jam is already an engine meant just for prototypes, but since I don't have art skills (yet!) I need a little more help in certain areas than others. Right now proto just contains some conveninece fucntions for dummy sprites, but I also have some ideas for debugging tools to add. I will be adding a number of these things to jam itself eventually, but for the mean time it is it's own toolkit.

As for the game I didn't get a chance to finish! I might pick at this a little more in the future, but as is, it's a pretty lame game. Really I just wanted to do something with color generation and Super Meat Boy style 'ghosts'. After spending a lot of time on silly engine bugs, I decided I didn't really have time to implment my full 'ghost' idea, which would involve changing the time step in the engine, recording input and animations, and researching JavaScript float inaccuracies, so I made a dumb implementation with plain dummy sprites that just plots the position over time. The colors of the ghost roughly map to that of a rainbow, though the colors are a tad murky, but there is a bit in the utils that maps HSV to RGB which will make tweaking the rainbow easier if I ever care to revisit.

<div id="game-1" style="padding-top: 200px"></div>

<script data-main="js/main" src="lib/require.js"></script>