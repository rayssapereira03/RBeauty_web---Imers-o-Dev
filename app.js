// botão de pesquisar
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let makeup = document.getElementById("makeup-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)
    campoPesquisa = campoPesquisa.toLowerCase()

    if(!campoPesquisa){
        section.innerHTML = "<p> Digite algo para pesquisar</p>"
        return
    }

    let resultados = ""
    let titulo = ""
    let descricao = ""
    let tags = ""
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <img src= ${dado.img} alt="Base Líquida com Cobertura Natural">
                <h2>${dado.titulo}</h2>
                <p class="descrição-meta"> ${dado.descricao}</p>
                <section class="resultados-pesquisados">
                <button>ver mais</button>
            </div>
        `
        }
        if (!resultados){
            resultados = "<p> nada foi encontrado :( </p>"
        }
        section.innerHTML = resultados 
    }
    
}



