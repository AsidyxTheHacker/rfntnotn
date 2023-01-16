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
stock('ganon', '2'), stock('ganon', '58'),
stock('doc', '3'), stock('doc', '87'),
stock('link', '4'), stock('link', '116'),
stock('falco', '5'), stock('falco', '145'),
stock('ylink', '6'), stock('ylink', '174'),
stock('samus', '7'), stock('samus', '203'),
stock('dk', '8'), stock('dk', '232'),
stock('ics', '9'), stock('ics', '261'),
stock('peach', '10'), stock('peach', '290'),
stock('falcon', '11'), stock('falcon', '319'),
stock('bowser', '12'), stock('bowser', '348'),
stock('mario', '13'), stock('mario', '377'),
stock('fox', '14'), stock('fox', '406'),
stock('pikachu', '15'), stock('pikachu', '435'),
stock('gnw', '16'), stock('gnw', '464'),
stock('mewtwo', '17'), stock('mewtwo', '493'),
stock('ness', '18'), stock('ness', '522'),
stock('puff', '19'), stock('puff', '551'),
stock('yoshi', '20'), stock('yoshi', '580'),
stock('zelda', '21'), stock('zelda', '609'),
stock('roy', '22'), stock('roy', '638'),
stock('marth', '23'), stock('marth', '667'),
stock('kirby', '24'), stock('kirby', '696'),
stock('pichu', '25'), stock('pichu', '725'),
stock('diddy', '26'), stock('diddy', '754'),
stock('charizard', '27'), stock('charizard', '783'),
stock('wolf', '28', '78'), stock('wolf', '812')
