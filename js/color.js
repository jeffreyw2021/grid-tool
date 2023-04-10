// an array of colors
var colors = [
    '#dc1849', // Crimson Blaze - red
    '#f9c600', // Solar Flare - yellow
    '#00a4ca', // Deep Sea - blue
    '#73d234', // Forest Canopy - green

    '#f07800', // Ember Glow - orange
    '#7c3ca8', // Royal Plum - purple
    '#a03f56', // Redwood Bark - maroon brown
    '#3fc7a0', // Mermaid Tail - teal
    
    '#f0a3a3', // Cotton Candy - pink
    '#fff8cc', // Vanilla Cream - cream white
    '#b8e8ff', // Horizon Blue - sky blue
    '#b4e8d8', // Caribbean Waters - turquoise

    '#c2f0b5', // Meadow Mist - light green
    '#f9bda3', // Peach Sorbet - light orange
    '#c5b5d5', // Lavender Haze - light purple
    '#e3ecb5' // Lime Zest - light lime
];

var blackWhite = [
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  '#e6e6e6', //dark white
  
  '#1b1c1e', //light gray
  '#1b1c1e', //light gray
  '#1b1c1e', //light gray
  '#1b1c1e'  //light gray
]

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Shuffling colors array
  shuffle(blackWhite);
  
  // Assigning colors to grids
  for (let column = 1; column <= 4; column++) {
    for (let grid = 1; grid <= 4; grid++) {
      const index = (column - 1) * 4 + grid - 1;
      const gridElement = document.getElementById(`column-${column}`).querySelector(`.grid-${grid}`);
      gridElement.style.backgroundColor = blackWhite[index];
    }
  }
  



