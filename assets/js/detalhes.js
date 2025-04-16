let params = new URLSearchParams(location.search);

let id = params.get("id");
filme = dados.find(function (elem) {
  return elem.id == id;
});
const tela = document.getElementById("f_individual");
let ator = ''
 
function criarElenco() {
    for (let i = 0; i < filme.elenco.length-1; i++) {
        let elenco = filme.elenco[i]
        ator+= `<div class="card" style="min-width: 150px;">
                <img src="${elenco.foto}" class="card-img-top" alt="Nome do Ator 1">
                <div class="card-body text-center">
                  <h6 class="card-title mb-0">${elenco.nome}</h6>
                </div>
              </div>`
    }
    return ator
}

if (filme) {
    tela.innerHTML = `<div class="container py-5">
        <!-- Cabeçalho -->
        <div class="row mb-4">
          <div class="col-md-4">
            <img id="img" src="${filme.img}" alt="Pôster do Filme" class="img-fluid rounded shadow">
          </div>
          <div class="col-md-8">
            <h1 id="titulo" class="display-5">${filme.titulo}</h1>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <p><strong>Duração:</strong> ${filme.duracao}</p>
            <p><strong>Lançamento:</strong> ${filme.data}</p>
            <h4 class="mt-4">Sinopse</h4>
            <p>${filme.sinopse}</p>
          </div>
        </div>
    
        <div class="row mb-5">
          <div class="col-12">
            <h4>Trailer</h4>
            <div class="ratio ratio-16x9">
              <iframe src="${filme.trailer}" title="Trailer" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    
        <!-- Elenco -->
        <div class="mb-5">
            <h4>Elenco</h4>
            <div class="d-flex overflow-auto py-3" style="gap: 1rem;">  
            ${criarElenco()}
            </div>
          </div>
      </div> `;
  } else {
    tela.innerHTML = `<div style="height: 100vh;">
            <p class="text-center title bg-secondary">Filme não Encontrado</p>
        </div>`;
  }