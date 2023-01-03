const container = document.getElementById("container");

    function makeSlots(rows, cols) {
        container.style.setProperty('--slot-rows', rows);
        container.style.setProperty('--slot-cols', cols);
        for (s = 0; s < (rows * cols); s++) {
          let slot = document.createElement("div");
          // cell.innerText = (c + 1);
          slot.id = "slot-" + s;
          container.appendChild(slot).className = "slot-char";
        };
      }

      makeSlots(4, 7)

      function sprite(name, slot) {
        var img = document.createElement("img");
        img.src = `../imgs/sprites/${name}.png`;
        img.className = 'char-sprite';
        var src1 = document.getElementById(`slot-${slot}`);
        src1.appendChild(img);
      }

      sprite('Luigi', 0)
      sprite('Ganon', 1)
      sprite('Dr_Mario', 2)
      sprite('Link', 3)
      sprite('Falco', 4)
      sprite('Young_Link', 5)
      sprite('Samus', 6)
      sprite('DK', 7)
      sprite('ICs', 8)
      sprite('Peach', 9)
      sprite('Falcon', 10)
      sprite('Bowser', 11)
      sprite('Mario', 12)
      sprite('Fox', 13)
      sprite('Pikachu', 14)
      sprite('G&W', 15)
      sprite('Mewtwo', 16)
      sprite('Ness', 17)
      sprite('Puff', 18)
      sprite('Yoshi', 19)
      sprite('Zelda', 20)
      sprite('Roy', 21)
      sprite('Marth', 22)
      sprite('Kirby', 23)
      sprite('Pichu', 24)
      sprite('Diddy', 25)
      sprite('Charizard', 26)
      sprite('Wolf', 27)