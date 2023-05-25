function palindromo() {
  let input = document.getElementById("texto").value;
  let reversedInput = input.split('').reverse().join('');

  if (input === reversedInput){
    document.getElementById("resultado").textContent = input + " es un palindromo.";
  } else {
    document.getElementById("resultado").textContent = input + " no es un palindromo.";
  }
}
