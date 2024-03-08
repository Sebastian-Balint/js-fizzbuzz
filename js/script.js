// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

const n = 100;
const paste = document.getElementById("paste");

// creare ciclo che stampa da 1 a 100
for (let i = 0; i < 100; i++) {
  //variabile che rende possibile stampare a partire da 1 e arrivare a 100 mantenendo i = 0 e i < 100 (e non i <=100) e senza ripete i + 1 ad ogni punto
  let z = i + 1;

  if (z % 3 === 0 && z % 5 === 0) {
    // quando i + 1 diviso 3 e i + 1 diviso 5 sono === 0 allora stampa z + ' FizzBuzz'
    console.log(z + " FizzBuzz");
    paste.innerHTML += `
    <div>${z + " FizzBuzz"}</div>
    `;
  } else if (z % 5 === 0) {
    // quando ii + 1 diviso 5 è === 0 allora stampa z + ' Buzz'
    console.log(z + " Buzz");
    paste.innerHTML += `
    <div>${z + " Buzz"}</div>
    `;
  } else if (z % 3 === 0) {
    // quando ii + 1 diviso 3 è === 0 allora stampa z + ' Fizz'
    console.log(z + " Fizz");
    paste.innerHTML += `
    <div>${z + " Fizz"}</div>
    `;
  } else {
    console.log(z);
    paste.innerHTML += `
    <div>${z}</div>
    `;
  }
}
