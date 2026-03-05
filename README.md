# About ProbeJS Dumps
> [!IMPORTANT]
> **If you are not a developer/contributor, please disregard this section.**

I am not known to have the fastest computer.
When in-game, using `/probejs dump`--at time of writing--can take [upwards of five minutes](https://github.com/Prunoideae/ProbeJS/issues/158).
The config options for ProbeJS are vague at best.
So, the only way to reduce the dump time is to reduce the number of things that get dumped.

Items, entities, tags, and other things should be dumped if I am going to use them in development.
By that logic, items, entities, tags, and other things that I will NOT use in development have no reason to be dumped.
There are a few mods here that add a LOT of items that Kat has no plans to modify.
The sheer number of items costs much more time to dump.
These are great mods, and I encourage people to use them; 
I simply don't have the resources to dump them in my dev environment.

The following mods should not be dumped:

- [Andre's Livery - A SWEM Addon](https://www.curseforge.com/minecraft/mc-mods/andres-livery-a-swem-addon)
- [BlossomEQ - Swem Tack Addon](https://www.curseforge.com/minecraft/mc-mods/blossomeq-swem-tack-addon)
- [The Luminara Collection - SWEM Addon](https://www.curseforge.com/minecraft/mc-mods/the-luminara-collection)

To avoid dumping these mods:

1. Disable these mods through your launcher of choice
2. Launch the game instance
3. Open a world, preferably...  
   i. a world that isn't important (disabling these mods and loading into a world that uses them can bork things)  
   ii. a superflat world with all mob spawns turned off for performance reasons  
   iii. a world with cheats enabled
4. Run `/probejs dump`
5. When you see "ProbeJS typing generation finished. [TIMEs]", quit the game
6. Re-enable the mods
7. Relaunch the instance
8. Prosper

These steps brought my dump time of 300s down to a dump time of 64s.

> [!NOTE]  
> **You can still use these items and things in development.**  
> You simply will not be able to autofill them in VSCode.
