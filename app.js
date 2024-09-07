// botão de pesquisar
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    campoPesquisa = campoPesquisa.toLowerCase()

    if(!campoPesquisa){
        section.innerHTML = "<h2> Digite algo para pesquisar!</h2>"
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
                <button><a href=${dado.link}>ver mais</a></button>
            </div>
        ` 
        }
        section.innerHTML =  "<h2>Resultado(s) da sua pesquisa!</h2>" + resultados
        if(!resultados){
            section.innerHTML = "<h2>Nada foi encontrado :( </h2>"
        }
    }

}



