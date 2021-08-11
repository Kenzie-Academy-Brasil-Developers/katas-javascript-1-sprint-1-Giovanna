function oneThroughTwenty() {
  let contando = [];

  for (let i = 1; i <= 20; i++) {
  console.log(i)
} 
  return contando;
}
console.log(oneThroughTwenty())

//call function oneThroughTwenty

function evensToTwenty() {
  let par = [];

  for (let i = 0; i <= 20; i++) {
  console.log(i)
  i++
} 
  return par;
}
console.log(evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
  let impar = [];

  for (let i = 1; i <= 20; i++) {
  console.log(i)
  i++
} 
  return impar;
}
console.log(oddsToTwenty())

//call function oddsToTwenty

function multiplesOfFive() {
  let cinco = [];
  
    for (let i = 5; i <= 100; i += 5) {
    console.log(i)
  } 
    return cinco;
  }
  console.log(multiplesOfFive())


//call function multiplesOfFive

function squareNumbers() {
  let quadrado = [ 1 , 4 , 9 , 16 , 25 , 36 , 49 , 64 , 81 , 100 ];
  
  for (let i = 0; i <= quadrado.length; i++) {
    console.log(quadrado[i])
} 
   return quadrado;
}
console.log(squareNumbers())

//call function squareNumbers

function countingBackwards() {
  let dandore = [];
  
  for (let i = 20; i >= 1; i--) {
  console.log(i)
} 
  return dandore;
}
console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {
  let voltandoempar = [];
  
  for (let i = 20; i >= 0; i-=2) {
  console.log(i)
} 
  return voltandoempar;
}
console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let voltandoemimpar = [];
  
  for (let i = 20; i >= 1; i-=1) {
  console.log(i-1)
  i-=1
} 
  return voltandoemimpar;
}
console.log(oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let voltandocinco = [];
  
  for (let i = 100; i >= 5; i -= 5) {
  console.log(i)
} 
  return voltandocinco;
}
console.log(multiplesOfFiveBackwards())


//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let quadrado = [ 1 , 4 , 9 , 16 , 25 , 36 , 49 , 64 , 81 , 100 ];
  
    for (let i = quadrado.length; i >= 0; i--) {
      console.log(quadrado[i])
  } 
     return quadrado;
  }
  console.log(squareNumbersBackwards())

//call function squareNumbersBackwards
