const d = document;

var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

const valorMonedasPesoCol = {
  dolar: 3865.01,
  pesoMx: 191.10,
  euro: 4520.90,
  libra: 5265.10
}

const valorMonedasPesoMex = {
  dolar: 20.36,
  pesoCol: 0.0053,
  euro: 23.81,
  libra: 27.73
}

const valorMonedasDolar = {
  pesoCol: 0.00026,
  pesoMex: 0.049,
  euro: 1.17,
  libra: 1.36
}

const valorMonedasEuro= {
  pesoCol: 0.00022,
  pesoMex: 0.042,
  dolar: 0.85,
  libra: 1.16
}

const valorMonedasLibra= {
  pesoCol: 0.00019,
  pesoMex: 0.036,
  dolar: 0.73,
  euro: 0.86
}

const $figure = d.querySelector("figure"),
  $img = d.createElement("img");

$img.setAttribute("src","./Imagenes/convertirDinero.svg");
$img.setAttribute("width","80");
$img.setAttribute("height","80");
$img.setAttribute("alt","Convertir Dinero");

$figure.appendChild($img);

const $boton_1 = d.createElement("button"),
  $boton_2 = d.createElement("button"),
  $btn_moneda = d.getElementById("btn_moneda");

$boton_1.setAttribute("id","elegir_moneda");
$boton_1.setAttribute("data-bs-toggle","modal");
$boton_1.setAttribute("data-bs-target","#exampleModal");
$boton_1.setAttribute("type","button");
$boton_2.setAttribute("id","convertir_moneda");
$boton_2.setAttribute("data-bs-toggle","modal");
$boton_2.setAttribute("data-bs-target","#exampleModalToggle");
$boton_2.setAttribute("type","button");

const $fragmento = d.createDocumentFragment();

let $label = "";

for(let i=0; i < 10; i++){
  $label = d.createElement("label");
  $fragmento.appendChild($label);
}

moneda.forEach((elemento,index) =>{
  
  if(index === 0){    
    $boton_1.textContent = elemento;
    $boton_2.textContent = elemento;
    $btn_moneda.appendChild($boton_1);
    $btn_moneda.appendChild($boton_2);
  }

  if(index === 1){
    $fragmento.children[0].setAttribute("for","dolar");
    $fragmento.children[0].textContent = elemento;
    d.getElementById("dolar").appendChild($fragmento.children[0]);    
    $fragmento.children[1].setAttribute("for","dolar");
    $fragmento.children[1].textContent = elemento;
    d.getElementById("dolar-2").appendChild($fragmento.children[1]);    
  }

  if(index === 2){    
    $fragmento.children[0].setAttribute("for","peso-mx");
    $fragmento.children[0].textContent = elemento;
    d.getElementById("peso-mx").appendChild($fragmento.children[0]);    
    $fragmento.children[1].setAttribute("for","peso-mx");
    $fragmento.children[1].textContent = elemento;
    d.getElementById("peso-mx-2").appendChild($fragmento.children[1]);   
  }

  if(index === 3){    
    $fragmento.children[0].setAttribute("for","peso-col");
    $fragmento.children[0].textContent = elemento;
    d.getElementById("peso-col").appendChild($fragmento.children[0]);
    $fragmento.children[1].setAttribute("for","peso-col");
    $fragmento.children[1].textContent = elemento;
    d.getElementById("peso-col-2").appendChild($fragmento.children[1]);
  }
  
  if(index === 4){    
    $fragmento.children[0].setAttribute("for","euro");
    $fragmento.children[0].textContent = elemento;
    d.getElementById("euro").appendChild($fragmento.children[0]);
    $fragmento.children[1].setAttribute("for","euro");
    $fragmento.children[1].textContent = elemento;
    d.getElementById("euro-2").appendChild($fragmento.children[1]);     
  }

  if(index === 5){    
    $fragmento.children[0].setAttribute("for","libra");
    $fragmento.children[0].textContent = elemento;
    d.getElementById("libra").appendChild($fragmento.children[0]);
    $fragmento.children[0].setAttribute("for","libra");
    $fragmento.children[0].textContent = elemento;
    d.getElementById("libra-2").appendChild($fragmento.children[0]);    
  }
  
});

const $form = d.forms["formulario"],
  $validacion = d.getElementById("validaciones");

function estilosError(){

  $validacion.style.top = "220px";
  $validacion.style.backgroundColor = "#e74c3ce6"; 
  $validacion.style.color = "white";
  $validacion.style.zIndex = "1";
  $validacion.style.border = "1px solid #5dade2";

}

function estilosCorrecto(){

  $validacion.style.top = "220px";
  $validacion.style.backgroundColor = "#009900b3"; 
  $validacion.style.color = "white";
  $validacion.style.zIndex = "1";
  $validacion.style.border = "1px solid #5dade2";

}
  
function convertirMoneda() {
  
  const valorIngresado = $form.cantidad.value,
    monedaElegida = $form.moneda.value,
    monedaConvertir = $form.monedaConvertir.value;

  let valorConvertido = 0;    

  if(isNaN(valorIngresado)){

    $validacion.textContent = "El valor ingresado no es correcto";
    estilosError();

  }else if(valorIngresado === ""){

    $validacion.textContent = "No ingresaste el valor";
    estilosError();

  }else if(monedaElegida === "" || monedaConvertir === ""){

    $validacion.textContent = "No elegiste la moneda";
    estilosError();

  }else if(monedaElegida === monedaConvertir){

    $validacion.textContent = `No se puede convertir de ${monedaElegida} a ${monedaConvertir}`;
    estilosError();

  }else if(monedaElegida === "Dolar" && monedaConvertir === "Peso Colombiano" ){

    valorConvertido = Math.floor(valorIngresado * valorMonedasPesoCol.dolar);
    $validacion.textContent = `${valorIngresado} Dolar(es) Es igual a ${valorConvertido} Pesos Colombianos`;
    estilosCorrecto();

  }else if(monedaElegida === "Peso Mexicano" && monedaConvertir === "Peso Colombiano" ){

    valorConvertido = Math.floor(valorIngresado * valorMonedasPesoCol.pesoMx);
    $validacion.textContent = `${valorIngresado} Peso(s) Mexicano(s) Es igual a ${valorConvertido} Pesos Colombianos`;
    estilosCorrecto();

  }else if(monedaElegida === "Euro" && monedaConvertir === "Peso Colombiano" ){

    valorConvertido = Math.floor(valorIngresado * valorMonedasPesoCol.euro);
    $validacion.textContent = `${valorIngresado} Euro(s) Es igual a ${valorConvertido} Pesos Colombianos`;
    estilosCorrecto();

  }else if(monedaElegida === "Libra Esterlina" && monedaConvertir === "Peso Colombiano" ){

    valorConvertido = Math.floor(valorIngresado * valorMonedasPesoCol.libra);
    $validacion.textContent = `${valorIngresado} Libra(s) Esterlina(s) Es igual a ${valorConvertido} Pesos Colombianos`;
    estilosCorrecto();

  }else if(monedaElegida === "Dolar" && monedaConvertir === "Peso Mexicano" ){

    valorConvertido = (valorIngresado * valorMonedasPesoMex.dolar).toFixed(2);
    $validacion.textContent = `${valorIngresado} Dolar(es) Es igual a ${valorConvertido} Pesos Mexicanos`;
    estilosCorrecto();

  }else if(monedaElegida === "Peso Colombiano" && monedaConvertir === "Peso Mexicano" ){

    valorConvertido = (valorIngresado * valorMonedasPesoMex.pesoCol).toFixed(2);
    $validacion.textContent = `${valorIngresado} Pesos Colombianos Es igual a ${valorConvertido} Pesos Mexicanos`;
    estilosCorrecto();

  }else if(monedaElegida === "Euro" && monedaConvertir === "Peso Mexicano" ){

    valorConvertido = (valorIngresado * valorMonedasPesoMex.euro).toFixed(2);
    $validacion.textContent = `${valorIngresado} Euro(s) Es igual a ${valorConvertido} Pesos Mexicanos`;
    estilosCorrecto();

  }else if(monedaElegida === "Libra Esterlina" && monedaConvertir === "Peso Mexicano" ){

    valorConvertido = (valorIngresado * valorMonedasPesoMex.libra).toFixed(2);
    $validacion.textContent = `${valorIngresado} Libra(s) Esterlina(s) Es igual a ${valorConvertido} Pesos Mexicanos`;
    estilosCorrecto();

  }else if(monedaElegida === "Peso Colombiano" && monedaConvertir === "Dolar" ){

    valorConvertido = (valorIngresado * valorMonedasDolar.pesoCol).toFixed(2);
    $validacion.textContent = `${valorIngresado} Pesos Colombianos Es igual a ${valorConvertido} Dolar(es)`;
    estilosCorrecto();

  }else if(monedaElegida === "Peso Mexicano" && monedaConvertir === "Dolar" ){

    valorConvertido = (valorIngresado * valorMonedasDolar.pesoMex).toFixed(2);
    $validacion.textContent = `${valorIngresado} Peso(s) Mexicano(s) Es igual a ${valorConvertido} Dolar(es)`;
    estilosCorrecto();

  }else if(monedaElegida === "Euro" && monedaConvertir === "Dolar" ){

    valorConvertido = (valorIngresado * valorMonedasDolar.euro).toFixed(2);
    $validacion.textContent = `${valorIngresado} Euro(s) Es igual a ${valorConvertido} Dolar(es)`;
    estilosCorrecto();

  }else if(monedaElegida === "Libra Esterlina" && monedaConvertir === "Dolar" ){

    valorConvertido = (valorIngresado * valorMonedasDolar.libra).toFixed(2);
    $validacion.textContent = `${valorIngresado} Libra(s) Esterlina(s) Es igual a ${valorConvertido} Dolar(es)`;
    estilosCorrecto();

  }else if(monedaElegida === "Peso Colombiano" && monedaConvertir === "Euro" ){

    valorConvertido = (valorIngresado * valorMonedasEuro.pesoCol).toFixed(2);
    $validacion.textContent = `${valorIngresado} Pesos Colombianos Es igual a ${valorConvertido} Euro(s)`;
    estilosCorrecto();

  }else if(monedaElegida === "Peso Mexicano" && monedaConvertir === "Euro" ){

    valorConvertido = (valorIngresado * valorMonedasEuro.pesoMex).toFixed(2);
    $validacion.textContent = `${valorIngresado} Peso(s) Mexicano(s) Es igual a ${valorConvertido} Euro(s)`;
    estilosCorrecto();

  }else if(monedaElegida === "Dolar" && monedaConvertir === "Euro" ){

    valorConvertido = (valorIngresado * valorMonedasEuro.dolar).toFixed(2);
    $validacion.textContent = `${valorIngresado} Dolar(es) Es igual a ${valorConvertido} Euro(s)`;
    estilosCorrecto();

  }else if(monedaElegida === "Libra Esterlina" && monedaConvertir === "Euro" ){

    valorConvertido = (valorIngresado * valorMonedasEuro.libra).toFixed(2);
    $validacion.textContent = `${valorIngresado} Libra(s) Esterlina(s) Es igual a ${valorConvertido} Euro(s)`;
    estilosCorrecto();

  }else if(monedaElegida === "Peso Colombiano" && monedaConvertir === "Libra Esterlina" ){

    valorConvertido = (valorIngresado * valorMonedasLibra.pesoCol).toFixed(2);
    $validacion.textContent = `${valorIngresado} Pesos Colombianos Es igual a ${valorConvertido} Libra(s) Esterlina(s)`;
    estilosCorrecto();

  }else if(monedaElegida === "Peso Mexicano" && monedaConvertir === "Libra Esterlina" ){

    valorConvertido = (valorIngresado * valorMonedasLibra.pesoMex).toFixed(2);
    $validacion.textContent = `${valorIngresado} Peso(s) Mexicano(s) Es igual a ${valorConvertido} Libra(s) Esterlina(s)`;
    estilosCorrecto();

  }else if(monedaElegida === "Dolar" && monedaConvertir === "Libra Esterlina" ){

    valorConvertido = (valorIngresado * valorMonedasLibra.dolar).toFixed(2);
    $validacion.textContent = `${valorIngresado} Dolar(es) Es igual a ${valorConvertido} Libra(s) Esterlina(s)`;
    estilosCorrecto();

  }else if(monedaElegida === "Euro" && monedaConvertir === "Libra Esterlina" ){

    valorConvertido = (valorIngresado * valorMonedasLibra.euro).toFixed(2);
    $validacion.textContent = `${valorIngresado} Euro(s) Es igual a ${valorConvertido} Libra(s) Esterlina(s)`;
    estilosCorrecto();

  }
   
}

d.getElementById("convertir").addEventListener("click",convertirMoneda);


