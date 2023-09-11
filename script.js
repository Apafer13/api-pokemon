document.addEventListener("DOMContentLoaded", function(){
    let boton = document.getElementById('btn')
    boton.addEventListener('click', function(){
        let info = document.getElementById('info')
        const url = `https://pokeapi.co/api/v2/pokemon/${info.value}`
        fetch(url)
        .then(resp => resp.json())
        .then(data => showData(data))
        .catch(error =>{alert("El Pokemon que introdujo no existe o esta equivocado")})
        info.value = '';
        
    })


})

function showData(data){
    let htmlContentToAppend = "";
    let cont = document.getElementById('contenedor')
        htmlContentToAppend += `
        
        <div class="card" style="width: 18rem;" id="cont">
            <div> 
            <small class="text-muted">Pokedex: ${data.id}</small>
            <img src="${data.sprites.front_default}" class="card-img-top">
            <hr class="separador">
            </div>
            <div class="card-body">
                    <div class="card-title">
                        <h1 class="mb-1">${data.name}</h1>
                    </div>  
                    <hr class="separador">
                    <div "card-text" id="card"> 
                    <div id="habs"> 
                        <h4 class="mb-1">Habilidades</h4>
                        <ul id="listHabs">
                            <li>${data.moves[0].move.name}</li>
                            <li>${data.moves[1].move.name}</li>
                            <li>${data.moves[2].move.name} </li>
                        </ul>
                        <br>
                        <hr class="separador">
                        </div>
            `
        htmlContentToAppend += '<h4>Estadisticas Base</h4>';
     

        htmlContentToAppend += `
        <div id="est">
        <p class="mb-1" id="stats">${data.stats[0].stat.name}: ${data.stats[0].base_stat}<img src="img/211755_heart_icon.png"></p>
        <p class="mb-1" id="stats">${data.stats[1].stat.name}: ${data.stats[1].base_stat}<img src="img/9024972_sword_light_icon.png"></p>
        <p class="mb-1" id="stats">${data.stats[2].stat.name}: ${data.stats[2].base_stat}<img src="img/8666697_shield_icon.png"></p>
        <p class="mb-1" id="stats">${data.stats[3].stat.name}: ${data.stats[3].base_stat}<img src="img/8679756_sword_fill_icon.png"></p>
        <p class="mb-1" id="stats">${data.stats[4].stat.name}: ${data.stats[4].base_stat}<img src="img/5898867_ancient_defense_game_helm_helmet_icon.png"></p>
        <p class="mb-1" id="stats">${data.stats[5].stat.name}: ${data.stats[5].base_stat}<img src="img/icons8-trainers-16.png" id="speed"></p>
        <br>
        </div>
        `

        htmlContentToAppend += '</div> </div>'
        cont.innerHTML = htmlContentToAppend;

}
function addData(){
    return `<div class="tarjeta">    
    <div id="video">
        <iframe width="930" height="523" src="https://www.youtube.com/embed/9h4E3TuL6ug" title="Primal Groudon vs Primal Kyogre vs Mega Rayquaza vs Deoxys - Pokemon AMV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <hr class="separadorVideo">
        <h3>¡Bienvenidos al mundo maravilloso de Pokémon!</h3>
        <hr class="separadorVideo">
        <p class="parrafo">Esta es tu plataforma definitiva para explorar el emocionante universo Pokémon y unirte a la comunidad global de entrenadores Pokémon. En nuestro sitio, encontrarás todo lo que necesitas para alimentar tu pasión por estos adorables monstruos de bolsillo. </p>
    </div>
</div>
<div class="tarjeta">
    <div id="video2">
        <iframe width="930" height="523" src="https://www.youtube.com/embed/Rsv2VkoIpk0" title="Pokémon - ¡Atrápalos Ya! (Latino) Oscar Roa [Full]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <hr class="separadorVideo">
        <h3>Aqui esta todo lo que buscas</h3>
        <hr class="separadorVideo">
        <p class="parrafo">Desde las últimas noticias sobre juegos, películas y series de Pokémon, hasta estrategias competitivas para el Campeonato Mundial de Pokémon.</p>
    </div>
</div>    
<div class="tarjeta">
    <div id="video3">
        <iframe width="930" height="523" src="https://www.youtube.com/embed/NEhjLb1Lv-0" title="MÁS DATAMINES, DETALLES DEL POKÉMON PRESENTS, FILTRACIONES RUMORES Y MÁS NOTICIAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <hr class="separadorVideo">
        <h3>Aqui esta todo lo que buscas</h3>
        <hr class="separadorVideo">
        <p class="parrafo">Sumérgete en nuestra enciclopedia Pokédex, donde puedes aprender sobre las habilidades, tipos y evoluciones de tus Pokémon favoritos.</p>
    </div>
</div>
<div class="tarjeta">
    <div id="video4">
        <iframe width="930" height="523" src="https://www.youtube.com/embed/NEhjLb1Lv-0" title="MÁS DATAMINES, DETALLES DEL POKÉMON PRESENTS, FILTRACIONES RUMORES Y MÁS NOTICIAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <hr class="separadorVideo">
        <h3>Aqui esta todo lo que buscas</h3>
        <hr class="separadorVideo">
        <p class="parrafo">  Además, conecta con otros entrenadores, comparte tus experiencias y participa en desafíos y eventos exclusivos. ¡Prepárate para embarcarte en una aventura Pokémon como nunca antes! ¡Atrapa 'em todos y únete a la diversión en nuestra comunidad Pokémon!</p>
    </div>
</div>  `
}
let btn2 = document.getElementById('back')
btn2.addEventListener('click', function(){
    let cont = document.getElementById('contenedor')
    cont.innerHTML = addData()
})