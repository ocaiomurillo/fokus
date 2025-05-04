import { alterarContexto, guardaContexto } from "./contexto.js";
import insereActiveClass from "./active.js";
import { defineTempo } from "./tempo.js";
import { mostrarTempo } from "./tempo.js";


const botao = document.querySelectorAll('button');
const musicaInput = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3');
const startPause = document.querySelector('#start-pause');
const play = new Audio('sons/play.wav');
const pause = new Audio('sons/pause.mp3');
const beep = new Audio('sons/beep.mp3');
const btOnOff = document.querySelector("#start-pause span");
const iconOnOff = document.querySelector("#start-pause img");

let tempo = 1500;
mostrarTempo(tempo);

botao.forEach(btn => (btn.addEventListener("click", evento => {
    const contexto = btn.dataset.contexto;

    if (contexto === 'foco'){
       alterarContexto('foco');
       insereActiveClass(btn);
       tempo = defineTempo('foco');
    } else if (contexto === 'short'){
        alterarContexto('descanso-curto');
        insereActiveClass(btn);
        tempo = defineTempo('descanso-curto');
    } else if (contexto === 'long'){
        alterarContexto('descanso-longo');
        insereActiveClass(btn);
        tempo = defineTempo('descanso-longo');
    }
})))

musicaInput.addEventListener("change", evento => {
    musica.loop = true;
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

const contagem = () => {
    if(tempo <= 0){
        beep.play();
        alert('Tempo Finalizado');
        const focoAtivo = document.querySelector('html').getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento)
        };
        zerar();
        return;
    }
    tempo -= 1;
    mostrarTempo(tempo);
}

startPause.addEventListener("click",iniciarOuPausar)

let intervalo = null;

function iniciarOuPausar(){
    if(intervalo){
        pause.play();
        zerar();
        return;
    }
   play.play();
   intervalo = setInterval(contagem,1000);
   btOnOff.textContent = "Pausar";
   iconOnOff.setAttribute('src',`/imagens/pause.png`);
}

function zerar(){
    clearInterval(intervalo);
    btOnOff.textContent = "Começar";
    iconOnOff.setAttribute('src',`/imagens/play_arrow.png`);
    intervalo = null;
}
