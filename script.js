function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.jpg");
    img.set(
      "alt",
      "Foto do Maik de oculos de sol sorrindo e jaqueta de frio preta"
    );
  } else {
    img.setAttribute("src", "assets/avatar.jpg");
    img.setAttribute(
      "alt",
      "Foto da Daniele sorrindo, com óculos, cachecol e cabelos mais claros"
    );
  }

  /*  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
}
