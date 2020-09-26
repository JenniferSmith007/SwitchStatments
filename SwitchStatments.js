
//repl link  to test it out https://repl.it/repls/FrighteningRareNetbsd \\

let favoriteMovie = 'Forrest Gump';
let moviePhrase = ` `;

switch (favoriteMovie) {
  case 'jaws':
    moviePhrase += `Youre gonna need a bigger boat`;
    break
  case 'the shining':
    moviePhrase += `All work no play makes jack a dull boy`;
    break
  case 'starwars':
    moviePhrase += `Do. Or do not. There is no try`;
    break
  case `Forrest Gump`:
    moviePhrase += `Life was like a box of chocolates`;
    break
  case 'Back To The Future':
    moviePhrase += `Where we are going we do not need roads`;
    break;
  default:
    moviePhrase = `Great movie choice`;



}


