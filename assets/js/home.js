const destaques = document.getElementById("destaques");

const card_filmes = document.getElementById("card_filmes");

destaques.innerHTML = "";
card_filmes.innerHTML = "";




function cardDestaques() {
    for (let i = 0; i < carroceu.length; i++) {
      let filme = carroceu[i];
      if(i==0){
        let strTexto = `
      <div class="carousel-item active">
                    <a href="detalhes.html?id=${filme.id}">
                    <img src="${filme.destaque}" class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${filme.titulo}</h5>
                        <p>${filme.sinopse}</p>
                    </div>
                </a>
                </div>
      `;
      destaques.innerHTML += strTexto;
      }
      else{
        let strTexto = `
      <div class="carousel-item">
                    <a href="detalhes.html?id=${filme.id}">
                    <img src="${filme.destaque}" class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${filme.titulo}</h5>
                        <p>${filme.sinopse}</p>
                    </div>
                </a>
                </div>
      `;
      destaques.innerHTML += strTexto;
      }
      
    }
  }
 



function cardMelhorFilme() {
    for (let i = 0; i < dados.length; i++) {
      let filme = dados[i];
      let strTexto = `
      <div class="card" style="width: 18rem;">
            <a href="detalhes.html?id=${filme.id}">
                <img src="${filme.img}" class="card-img-top" alt="..." style="height: 300px; width: 100; object-fit: cover;">

                <div class="card-body">
                    <h5 class="text-center">${filme.titulo}</h5>
                    <div class="d-flex justify-content-around">
                        <p class="card-text card_data">${filme.data}</p>
                        <p class="card-text card_duracao">${filme.duracao}</p>
                    </div>
                    <p class="card-text card_sinopse">${filme.sinopse}</p>
                </div>
            </a>
        </div>
      `;
  
      card_filmes.innerHTML += strTexto;
    }
  }
  

  

  cardDestaques();


  cardMelhorFilme();