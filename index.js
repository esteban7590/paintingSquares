window.onload = () => {
  let mouseClick = false;

  let contenedor = document.getElementById("cuadro");
  for (let i = 0; i < 200; i++) {
    let div = document.createElement("div");
    div.className = "color";
    // A cada div le estoy poniendo un evento para saber cuando pasan por encima de el
    div.onmouseover = () => {
      //console.log(mouseClick);
      if (mouseClick === 1) {
        div.style.backgroundColor = "green";
      } else if (mouseClick === 2) {
        div.style.backgroundColor = "transparent";
      }
    };
    contenedor.appendChild(div);
  }
  // Sabemos cuando de click
  contenedor.onmousedown = event => {
    if (event.which == 1) {
      mouseClick = 1;
    } else {
      mouseClick = 2;
    }
  };
  // Sabemos cuando deje de darle click
  contenedor.onmouseup = () => {
    mouseClick = 0;
  };
};
