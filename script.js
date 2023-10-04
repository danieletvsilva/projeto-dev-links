function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
    img.set(
      "alt",
      "Foto do Maik de oculos de sol sorrindo e jaqueta de frio preta"
    )
  } else {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt", "Foto do Maik sorrindo e com camisa preta")
  }

  /*  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
}
