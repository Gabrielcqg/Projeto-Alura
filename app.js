
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(campoPesquisa == ""){
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let nivelDificuldade = "";
    
    for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    nivelDificuldade = dado.nivelDificuldade.toLowerCase()
    //se titulo includes campoPesquisa
        if (titulo.startsWith(campoPesquisa) || nivelDificuldade.startsWith(campoPesquisa)){
            resultados += `
    <div class="item-resultado">
                    <div class="container">
                        <h2>${dado.titulo}</h2>
                        <img src="${dado.imagem}" alt="Logo" width="80" height="50">
                      </div>
                <p class="descricao-meta">${dado.descricao}</p>
                <p><strong>Para que serve:</strong>${dado.paraQueServe} Desenvolvimento de aplicações empresariais, Android, big data e muito mais.</p>
                <p><strong>Características:</strong>${dado.caracteristicas} Orientada a objetos, fortemente tipada, compilada.</p>
                <p><strong>Nível de dificuldade:</strong>${dado.nivelDificuldade}Médio</p>
                <p><strong>Mercado de trabalho:</strong>${dado.mercadoTrabalho} Alta demanda, especialmente em grandes empresas.</p>
                <p><strong>Frameworks:</strong>${dado.frameworks} Spring, Hibernate, JavaFX</p>
                <p><strong>Exemplos:</strong>${dado.exemplos} Android apps, servidores de banco de dados</p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>    
    `
}
    if (!resultados) {
        resultados = "Nada foi encontrado"
    }
    section.innerHTML = resultados;
        }            
}