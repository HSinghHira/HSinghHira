---
title: I wrote a PowerShell Script to Unlock Windows 11 EU Privacy Controls
description: How a random YouTube video led me down a Windows 11 privacy rabbit hole, and why I ended up building a PowerShell script to fix it properly.
tags:
  - PowerShell
  - Windows
category: ""
draft: false
pubDatetime: 2026-02-10T08:03:01.000Z

author: Harman Singh Hira
---

I wasn’t planning anything last night.

I’d just finished dinner, brain half-occupied with memes and the other half wondering why my Windows 11 privacy settings felt like they’d been designed by someone who hates humans. I had that itch you get when something feels _off_ but you can’t quite put your finger on it.

So anyway, I was meant to be watching cricket highlights on YouTube, but the algorithm decided nah, let's show you this sketchy-looking Windows 11 privacy video instead “Microsoft Fixed Windows... But Only For Europe”.

::youtube{id="MfBNxGw_5J8"}

At first I clicked it like you click most random videos at 10pm, fully planning to lose 2 minutes and move on. But then I watched. And watched. The guy in the video (some American tech dude with too much energy) basically says: Windows hides a bunch of GDPR-level privacy toggles unless your region is set to somewhere in Europe. And apparently there's this one registry key called DeviceRegion that decides everything. And, ngl, I started taking notes. The dude in the video was tinkering with privacy toggles that I didn’t even know existed, making this little region registry hack look chill and (seemingly) harmless.

Next thing I know I’m in Registry Editor, heart doing a little jitter, deleting the DeviceRegion key like I’m performing digital acupuncture. I reboot. And suddenly, there it is. All those elusive toggles. Diagnostic data options. Permissions I didn’t even know I wanted to tweak.

I let out this weird half-laugh, half-groan. It felt like I’d been handed the cheat codes to Windows privacy and no one told me.

But of course, it wasn’t all sunshine.

I was like okay cool, let me make this easy for other people too. So I started banging out a PowerShell script. At first it worked smooth and sleek. I’m thinking yeah I’m basically a Windows wizard now.

Then Defender went ballistic. Quarantined the script faster than I could say “false positive”. Red warnings everywhere. I’m staring at my screen like mate, I wrote this for good intentions. Chill.

That’s when I realized something: there’s two types of folks. People who want hand-holding, who want to see what’s happening step by step without their antivirus screaming. And then folks like me who just want the automated route.

So I rewrote it. Not just a script. Two versions.

One that’s fully automatic for the brave hearts who don’t mind telling Defender to take a breather. And one that literally just guides you through the steps with prompts, no anti-virus freakouts, no hidden commands, just transparency.

Pretty much what the video guy did in a 10 minute clip, except I turned it into something a bit more usable for real life setups. From fresh installs to random privacy nags, now I just run my routine and boom, Windows behaves a bit nicer.

::github{repo="HSinghHira/WindowsEUunlock"}

What really got me was how random this all was. If that YouTube video hadn’t popped up in my watchlist, I’d probably still be annoyed at missing toggles forever. It’s funny how you end up learning the most tech things by accident, like a digital version of tripping over a Lego piece in the middle of the night.

I also realized how much we glaze over tools and settings that feel “too technical”. People assume they need to be some kind of nerd wizard to mess with registry keys or region hacks. But once you break it down, it’s just a series of small, understandable steps.

So yeah, I stumbled on a random video, poked around in Windows settings like a curious cat, got slightly scolded by Defender, rewrote my approach, and now I’ve got something that actually works. Nothing dramatic, nothing life-changing, just a weirdly satisfying tech detour that made my Windows feel a bit more under my control.

If you're reading this at 2 a.m. and you're annoyed at Microsoft too… you know what to do.

```powershell
irm https://wineu.hsinghhira.me | iex
```

That’s it. The origin story of a script that started from a YouTube video and somehow became part of my setup. Funny how the internet throws these little surprises at you when you’re not even looking.
