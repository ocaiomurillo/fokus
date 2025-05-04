import selecionaTitulo from "./titulo.js";
import { defineTempo } from "./tempo.js";
import { mostrarTempo } from "./tempo.js";

const html = document.querySelector('html');
const imagem = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title')

export function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src',`/imagens/${contexto}.png`);

    let tituloContexto = selecionaTitulo(contexto);
    titulo.innerHTML = tituloContexto
   
    let tempo = defineTempo(contexto);
    mostrarTempo(tempo);
};

export function guardaContexto(){
    let contexto = '';
    contexto = html.getAttribute('data-contexto');
    return contexto;
}

