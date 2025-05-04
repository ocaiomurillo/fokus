const tempoTela = document.querySelector("#timer");

export function defineTempo(contexto){
    let tempo = 0;
    switch (contexto) {
        case 'foco':
            tempo = 60 * 25;
            return tempo;
        case 'descanso-curto':
            tempo = 60 * 5;
            return tempo;
        case 'descanso-longo':
            tempo = 60 * 15;
            return tempo;
        default:
            break;
    }   
}

export function mostrarTempo(tempo){
    const tempoConv = new Date(tempo * 1000);
    const tempoFormat = tempoConv.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoTela.innerHTML = `${tempoFormat}`
}

