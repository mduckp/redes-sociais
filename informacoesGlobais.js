const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function VisualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = res.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
    console.log(paragrafo)
}
const container = document.getElementById('graficos-container__texto')
container.appendChild(paragrafo)
VisualizarInformacoesGlobais()