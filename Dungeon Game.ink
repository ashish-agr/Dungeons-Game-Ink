INCLUDE Rooms.ink
<h1>Castle Dungeon</h1>

<h2>An interactive fiction text adventure game written in Ink</h2>

// A comment not shown in the final output

/*
Add a multiline comment not shown in the final output with some information about the game.
*/

TODO: Develop this story part better.

// Here we add an image
#IMAGE: cover.jpg
/*
This will add an image, provided that we will keep the file in the same folder as the export output.
*/

Your fellow adventurers have been trapped in the castle dungeons by <b>an evil sorcerer</b>.
Will you dare enter the dungeons to save them, or peril trying?

    * [Enter the Dungeons]
      You enter the Dungeons and attempt to save your friends
      -> Dungeon_Room_1
    * [You are too afraid to enter the dungeons, and run away.]
      You have abandoned your adventure, leaving your friends to their fate.
      -> abandon_game
  
=== Dungeon_Room_1 ===
The walls are damp and the smell of rats and orcs is strong.
Thankfully, your lit torch allows you to see up to 20 feet ahead of you.
You notice a stone wall, but the corridor continues to the left and right.
What would you like to do?

    * [Turn left] You turn left and keep walking for a little while. 
        -> Dungeon_Room_2
    * [Turn right] You turn right and keep walking for a little while. 
        -> Dungeon_Room_3

=== abandon_game ===
You have abandoned your adventure, leaving your friends to their fate.
->END