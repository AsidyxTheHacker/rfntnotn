const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    cell.id = "h2h-" + c;
    container.appendChild(cell).className = "grid-item";
  };
}

makeRows(29, 29);

function stock(name, cell) {
  var img = document.createElement("img");
  img.src = `../imgs/stocks/${name}.png`;
  img.className = 'stock-icon';
  var src1 = document.getElementById(`h2h-${cell}`);
  src1.appendChild(img);
}

var div = document.getElementById('h2h-31');
div.innerHTML += '1-2';
var div2 = document.getElementById('h2h-32');
div2.innerHTML += '2-1';

stock('luigi', '1'), stock('luigi', '29'),
stock('doc', '2'), stock('doc', '58'),
stock('falco', '3'), stock('falco', '87'),
stock('ganon', '4'), stock('ganon', '116'),
stock('link', '5'), stock('link', '145'),
stock('ylink', '6'), stock('ylink', '174'),
stock('samus', '7'), stock('samus', '203'),
stock('dk', '8'), stock('dk', '232'),
stock('ics', '9'), stock('ics', '261'),
stock('falcon', '10'), stock('falcon', '290'),
stock('peach', '11'), stock('peach', '319'),
stock('yoshi', '12'), stock('yoshi', '348'),
stock('bowser', '13'), stock('bowser', '377'),
stock('mario', '14'), stock('mario', '406'),
stock('gnw', '15'), stock('gnw', '435'),
stock('pikachu', '16'), stock('pikachu', '464'),
stock('puff', '17'), stock('puff', '493'),
stock('zelda', '18'), stock('zelda', '522'),
stock('ness', '19'), stock('ness', '551'),
stock('fox', '20'), stock('fox', '580'),
stock('mewtwo', '21'), stock('mewtwo', '609'),
stock('marth', '22'), stock('marth', '638'),
stock('roy', '23'), stock('roy', '667'),
stock('kirby', '24'), stock('kirby', '696'),
stock('pichu', '25'), stock('pichu', '725'),
stock('diddy', '26'), stock('diddy', '754'),
stock('charizard', '27'), stock('charizard', '783'),
stock('wolf', '28', '78'), stock('wolf', '812')
