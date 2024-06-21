/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let pets1 = 0; pets1 < pets.length; pets1++){
  console.log(pets[pets1])
}



/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let pets0= pets[0]
pets.shift()

pets.push(pets0)
console.log(pets)



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
cars[0].licensePlate= 'AB145FG'
cars[1].licensePlate= 'TS130SN'
cars[2].licensePlate= 'RE689PT'
console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
    brand: 'Ferrari',
    licensePlate:'FR009BT',
    model:'SF90',
    color:'purle',
    trims:['life', 'sport',]
    
  })
console.log(cars)



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims =[]


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
function colori(cars){
  if(cars[0].color.charAt(0)==='b'){
    return 'Fizz'
  }
  else{ 
    return 'Buzz'
  }
}
console.log(colori(cars));


function colori1(cars){
  if(cars[1].color.charAt(0)==='b'){
    return 'Fizz'
  }
  else{ 
    return 'Buzz'
  }
}
console.log(colori1(cars));

function colori2(cars){
  if(cars[2].color.charAt(0)==='b'){
    return 'Fizz'
  }
  else{ 
    return 'Buzz'
  }
}
console.log(colori2(cars));

function colori3(cars){
  if(cars[3].color.charAt(0)==='b'){
    return 'Fizz'
  }
  else{ 
    return 'Buzz'
  }
}
console.log(colori3(cars));
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd','a', 'f']
const charactersArray2=[]
charactersArray.forEach(char => {
  let numeroCharacter;
  switch (char) {
    case 'a':
      numeroCharacter = 1;
      break;
    case 'b':
      numeroCharacter = 2;
      break;
    case 'c':
      numeroCharacter = 3;
      break;
    case 'd':
      numeroCharacter = 4;
      break;
    case 'e':
      numeroCharacter = 5;
      break;
    case 'f':
      numeroCharacter = 6;
      break;
    case 'g':
      numeroCharacter = 7;
      break;
    case 'h':
      numeroCharacter = 8;
      break;
    case 'i':
      numeroCharacter = 9;
      break;
       case 'l':
      numeroCharacter = 10;
      break;
    case 'm':
      numeroCharacter = 11;
      break;
    case 'n':
      numeroCharacter = 12;
      break;
    case 'o':
      numeroCharacter = 13;
      break;
    case 'p':
      numeroCharacter = 14;
      break;
    case 'q':
      numeroCharacter = 15;
      break;
    case 'r':
      numeroCharacter = 16;
      break;
    case 's':
      numeroCharacter = 17;
      break;
    case 't':
      numeroCharacter = 18;
      break;
    case 'u':
      numeroCharacter = 19;
      break;
    case 'v':
      numeroCharacter = 20;
      break;
    case 'z':
      numeroCharacter = 21;
      break;
  }
  charactersArray2.push(numeroCharacter);
});

console.log(charactersArray2);