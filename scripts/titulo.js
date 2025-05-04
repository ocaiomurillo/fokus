export default function selecionaTitulo (contexto) {
    let tituloContexto = ''
    switch (contexto) {
        case 'foco':
            tituloContexto = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            tituloContexto = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>` 
            break;
        case 'descanso-longo':
            tituloContexto = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
            break;
        default:
            break;
    }
    return tituloContexto;
}