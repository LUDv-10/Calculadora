function soma() {
  var valor1 = parseInt(document.getElementById("valor1").value, 10);
  var valor2 = parseInt(document.getElementById("valor2").value, 10);

  var resultado = valor1 + valor2;

  document.getElementById("resultado").innerHTML = resultado;
}

function subtracao() {
  var valor1 = parseInt(document.getElementById("valor1").value, 10);
  var valor2 = parseInt(document.getElementById("valor2").value, 10);

  var resultado = valor1 - valor2;

  document.getElementById("resultado").innerHTML = resultado;
}
