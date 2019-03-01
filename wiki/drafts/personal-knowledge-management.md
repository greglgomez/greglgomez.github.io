---
title: PKM - Personal Knowledge Management
---

People often ask me: _"Greg, how do you know so much random shit and how do you always have that perfect gif at the tip of your fingers?"._ The answer is my PKM system my friend. _"Urgh, OK, I'll bite, what the heck is a PKM?"_

In a series of reassessments of my personal workflows, one of the things I decided to delve deeper and write about is Personal Knowledge Management. It's the methodology behind storing intricately tagged layers of bookmarks - and memes - and being able to easily recollect them when needed.
The desire to look closer at creating a PKM came from stumbling across a concept from 1945 called the Memex, a pretty revolutionary concept at the time on how to extend one's memory.
The Memex in all it's glory - Life magazine, September, 1945.A memex is a device in which an individual stores all his books, records, and communications, and which is mechanized so that it may be consulted with exceeding speed and flexibility. It is an enlarged intimate supplement to his memory.

It consists of a desk, and while it can presumably be operated from a distance, it is primarily the piece of furniture at which he works. On the top are slanting translucent screens, on which material can be projected for convenient reading. There is a keyboard, and sets of buttons and levers. Otherwise it looks like an ordinary desk (see the lower illustration from the ).
My mission then, was to recreate the functions of Memex: the ability to archive, sort and recollect bits of knowledge when needed through modern tools. Let's do this!

## It all starts with Alfred

Pretty much any process or tool in my workflows must be able to somehow integrate with Alfred, this is non-negotiable. ;)
If you don't know Alfred, prepare to have your life changed. Alfred is what you call a launcher, think of it as a little box you can invoke at any time, in any app, which allows you to do wonderfully time-saving, clever things. It's a great tool for speedily getting around ones computer: Every folder, app and action you may want to take on your computer is only a few keystrokes away.
Alfred searching through my Google Drive filesIn my case, I'm already using Alfred instead of Spotlight to search for files on my computer and on Google Drive, so it makes sense that it would also be able to search through my bookmarks where ever they are stored, so to narrow down the bookmarking tools I can use, I started by looking at ones that integrate with Alfred, here are the contenders that have Alfred Workflows (files you can download that extend the functionality of your handy keyboard butler):
Pocket with Pocket for Alfred
Pinboard with Alfred Workflow for Pinboard (Rust)
Chrome Bookmarks with Alfred Chrome Bookmarks

With some nifty workflows for different bookmarking services in hand, I got to testing the services + Alfred workflows to see what they were like and if they have what I need.
Bookmarking
So going beyond the Alfred integrations, there's a few things I need from a bookmarking service to fulfil the role of a Memex:
Capture: A Chrome extension to capture links, preferably with an easy way to add tags when they are captured.
Reading View: A nice interface to read articles from, preferably with a dark mode so it's easy on the eyes and one that strips away all the clutter from the source website.
Tagging & Archiving: In order to easily retrieve links I save, the tool should have decent support for tags as well as a way to archive links that I've read/processed.
Integrations: Preferably, it should be a supported app in IFTTT or Zapier, so that automating workflows is possible.

With those things in mind, let's see how the contenders stack up.
Pocket
Capture: Pockets Chrome extension is simple and effective, it lives in your address bar and with a tap whatever page you're on is saved and a pop up prompts you to add tags and even shows you related links to the one you saved.
Reading View: Very nice reading view that strips away website clutter and has the all important dark mode. It gets bonus points for having a Mac app as well as decent mobile apps.
Tagging & Archiving: This is where Pocket is a bit wanting, the archive interface is pretty basic, there's a bulk edit which is nice, but 
Clicking on a tag in your archive will only show you results for that tag for items that are still in your reading list, not the archive.
Integrations: Very well supported in other apps and is present on both Zapier and IFTTT. Top marks.
Alfred Workflow:
Pocket for Alfred in actionDecent Workflow, supports searching straight from Alfred, but doesn't seem to work on tags, just titles, reinforcing Pockets use case as a reading list rather than a bookmark archive.
Pinboard
Maciej Ceglowski, the Pinboard founder, once made a statement in an interview:
If Instapaper/Pocket is the beautiful reading room, I'm the dusty attic.
Pinboard's interface is nothing to right home about, but don't let that deceive you, under the hood it's got all the tricks, it's a developer favorite so there's lot of extensions & apps built for it.
Capture: Pinboard errs on the side of minimalism, relying simply on a bookmark button to save links, however there are several more feature rich 3rd party browser extensions.
Reading View: No reading view here, just straight up bookmark lists that take you straight to the source.
Tagging & Archiving: This is where Pinboard shines, tag clouds, a tailor made 'organise view' that allows quick processing of bookmarks.
Integrations: Very well supported in other apps and is present on both Zapier and IFTTT. Top marks.
Alfred Workflow:


Bringing it all together
OK, so the idea is that 
If I find something interesting, I'll save it to Pocket to review later, from there I'll read it and decide it I want to store that to reference later or not. If I do, I'll archive it in Pocket, IFTTT then picks it up and adds it to pinboard for archiving and searching through Alfred.
Honourable Mentions
I thought I'd mention a few apps that don't integrate with Alfred like I need but are still worth checking out, if Alfred workflows did exist, I'd perhaps use them instead.
Chrome bookmarks
I found an Alfred workflow that indexes bookmarks saved to Chrome, initially I thought about going down this route, especially since with Chrome Sync those bookmarks would still be on the cloud and accessible anywhere that has a Chrome browser I can log in to. Ultimately, I opted for the convenience of a 3rd party service rather than having to sign into Chrome to access bookmarks.
Refind
A great service that combines reading list + archiving + social. Shame there's isn't much that integrates with it and there aren't any Alfred Workflows available as otherwise it comes close to combining everything you'd need. If you're not fussed about Alfred, this might be one for you.
Raindrop
Lush interfaces on all platforms: web, desktop & mobile, has decent usability, unfortunately, lack of Alfred Workflow & wider integrations really kills this app from being a serious contender.
Instapaper
Instapaper is designed to store links you'd like to read once and then discard. It has a beautiful interface and a clear monetisation strategy with great native apps for Android, Kindle and iOS. I'm currently torn between Instapaper and Pocket, but I think ultimately I won't be choosing Instapaper because Pocket has a Mac OS X native client which is just gorgeous to use. In terms of integrations, both work well with IFTTT which I will cover further down but I found that Instapaper for iOS doesn't seem to support the new notification features of iOS8 meaning that it's not as easy to send articles from any app to Instapaper as it is with Pocket.
Revue


Housekeeping
One of the tags I like to use is review, every week or so I will look at all the tags in Pocket with the review tag and action them as necessary.