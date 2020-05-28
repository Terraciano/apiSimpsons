const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors());

server.listen(3001, () => {
  console.log("server running");
});

let characters = [
  {
    name: "Homero",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    phrase: "Do'h",
  },
  {
    name: "Bart",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    phrase: "Ay Caramba",
  },
  {
    name: "Diamante",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799",
    phrase: "Voten por mi",
  },
  {
    name: "Marge",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    phrase: "MMMMMHHH",
  },
  {
    name: "Apu",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    phrase: "Gracias, vuelvas prontos!",
  },
];

const queryCharacters = (request, response) => {
  let character = characters.find(
    (element) => element.name === request.query.name
  );
  console.log(character);
  if (character) {
    response.json(character);
  } else {
    response.status(404);
    response.json({ message: "El item buscado no se ha encontrado" });
  }
};

server.get("/personajes", (request, response) => {
  if (request.query && request.query.name) {
    queryCharacters(request, response);
  } else {
    response.json(characters);
  }
});

server.get("/personajes/:name", (request, response) => {
  let character = characters.find(
    (element) => element.name === request.params.name
  );
  console.log(character);
  if (character) {
    response.json(character);
  } else {
    response.status(404);
    response.json({ message: "El item buscado no se ha encontrado" });
  }
});
