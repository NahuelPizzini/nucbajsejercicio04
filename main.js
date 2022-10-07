
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokeContainer = document.getElementById("pokeContainer");


const llamadorDePokes = document.getElementById("numeroDePoke");
const renderizarCard = document.getElementById("btnRenderizarCard");
const contenedorDePokes = document.getElementById("pokeContainer");




const capturaInput = async () => {
  var value = document.getElementById("numeroDePoke").value;
 
  
   if (value > 905 && value < 10001) {
     alert("ehh maestro, banca que no hay un pokemon con ese número")
   } else if (value <= 0) {
      alert("Che, maestro, pone un número mayor a 0");
   }
    else {
     var pokemonData = `${baseUrl}${value}` 
     console.log(pokemonData); //link de la api
     
       const pokemonInfo = async () => {
        
        try {
          const resultado = await fetch (`${pokemonData}`)
          const resultadoData = await resultado.json();
           console.log(resultadoData); 
  
           resultadoData.innerText = JSON.stringify(resultadoData);

           const {id, name, sprites, height, weight, types, base_experience} = resultadoData;
 
        
           return contenedorDePokes.innerHTML = 
           `<div class="containerCards"> 
             <img src= "${sprites.other.home.front_default}"> 
             <h2>${name.toUpperCase()}</h2>
             <div class="tipo-poke"><p>Tipo: ${types.map((tipo) => {return `<span class="${tipo.type.name}  poke__type"> ${tipo.type.name}</span> `}).join("&")} </p></div>
             <p class="id-poke">Pokemon número: #${id}</p>
             <p class="weight">Peso: ${weight / 10}Kg</p>
             <p class="heigth">Altura: ${height / 10}M</p>
             <p class="base_experience">EXP: ${base_experience}</p>
           </div>`;
        }
       
         catch (err) {
          console.log(err);
         
         }
      
     llamadorDePokes.value = "";
  }
  pokemonInfo();
}

  llamadorDePokes.value = "";
  return contenedorDePokes.innerHTML =  `<div> </div>`
 }
 
 
 renderizarCard.addEventListener("click", capturaInput)
 
 

/* 
Para esta entrega vamos a trabajar con asincronismo, utilizando la API de Pokemon.

Deberán:

👉 Crear un input de tipo number ,un botón y un contenedor vacío tal como hicimos en las entregas anteriores.
👉 Con el número que se ponga, hacer una llamada a la pokeapi y renderizar una card con los datos del Pokémon encontrado. 
Lo mínimo que deberá tener la card es el nombre, su tipo principal (pueden intentar poner todos) , su altura y peso (expresada en metros y kilogramos, tendrán que dividir el alto y peso que les llegue por 10), y una de sus imágenes.

👉 En caso de que no se encuentre ningún pokemon, renderizar un mensaje de error. En caso de que no se ingrese un número, renderizar otro mensaje de error acorde.



Les dejamos un ejemplo de como puede ser la llamada a la API:
👉 https://pokeapi.co/api/v2/pokemon/890

Revisen la API (https://pokeapi.co/) , investiguen el objeto y vean como conseguir los datos que necesitan.

🆙 Entregar el link de Github , en el cual debe estar linkeado el deploy del Vercel de su aplicación (mediante Github nosotros deberíamos poder ver el Vercel vinculado a su repositorio). 

*/
