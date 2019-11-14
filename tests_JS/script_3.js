answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function createHalfPyramid (answer) {
  
  for (var i = 1; i <= answer; i++) {
    var row = '';
    
    for (var j = 1; j <= (answer - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '#';
    }
    
    console.log(row);
  }
}

createHalfPyramid(answer);