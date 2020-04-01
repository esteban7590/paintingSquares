window.onload = () => {
  let mouseClick = false;

  let contenedor = document.getElementById("cuadro");
  for (let i = 0; i < 200; i++) {
    let div = document.createElement("div");
    div.className = "color";
    // A cada div le estoy poniendo un evento para saber cuando pasan por encima de el
    div.onmouseover = () => {
      console.log(mouseClick);
      if (mouseClick) {
        div.style.backgroundColor = "green";
      }
    };

    contenedor.appendChild(div);
  }

  // Sabemos cuando de click
  contenedor.onmousedown = () => {
    mouseClick = true;
  };
  // Sabemos cuando dejee de darle click
  contenedor.onmouseup = () => {
    mouseClick = false;
  };
};
