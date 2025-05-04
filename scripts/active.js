const botoes = document.querySelectorAll('button');

export default function insereActiveClass(btn){

    botoes.forEach(botao => {
        botao.classList.remove('active');
    });
        btn.classList.add('active');
}