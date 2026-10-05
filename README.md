# Side Scroller Game

A browser side-scrolling game built with p5.js. Walk through the mountains, jump across canyons and onto platforms, collect gems, avoid enemies, and reach your camp.

## Play

Open `index.html` in a browser. Click the game or press a key once so the music can start.

| Action     | Keys                  |
| ------     | ----                  |
| Move left  | A or Left arrow       |
| Move right | D or Right arrow      |
| Jump       | W, Up arrow, or Space |

You start with 3 lives, shown as hearts. Each gem is worth 10 points. Falling into a canyon or touching an enemy costs a life. Reach the campfire at the end of the level to win. Lose all lives and the game ends.

## Project layout

| Path | What it does |
| --- | --- |
| `index.html` | Loads p5.js and the game scripts |
| `sketch.js` | Game loop, input, and sound |
| `working-files/character.js` | Player drawing |
| `working-files/scene.js` | Sky, ground, trees, mountains, and canyons |
| `working-files/platforms.js` | Platforms |
| `working-files/collectables.js` | Gems |
| `working-files/enemies.js` | Enemies |
| `working-files/game.js` | Score, lives, and win/lose screens |
| `audio-assets/` | Music and sound effects |
| `p5.min.js` | p5.js library |

Sound files are from [freesound.org](https://freesound.org/).
