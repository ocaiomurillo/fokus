import listaTarefas from "./listaTarefas.js";
import { completarTarefas, criarTarefas, removerTarefa } from "./crudTarefa.js";
import { limparFormulario } from "./form.js";

const btn = document.querySelector('.app__button--add-task');
const form = document.querySelector('.app__form-add-task');
const cancel = document.querySelector('.app__form-footer__button--cancel')
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const remove = document.querySelectorAll('.app__section-task-header__li__button');

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

btn.addEventListener("click", evento => {
    form.classList.toggle('hidden')
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const tarefa = textArea.value;
    criarTarefas(tarefas, tarefa);
    listaTarefas(ulTarefas, tarefas, tarefa);
    limparFormulario(textArea,form);
});

tarefas.forEach(tarefa => {
    listaTarefas(ulTarefas, tarefas, tarefa.descricao);
});

cancel.addEventListener("click", () => limparFormulario(textArea,form));

document.addEventListener('FocoFinalizado', () => {
    const tarefaSelecionada = document.querySelector('.app__section-task-list-item-active');
    completarTarefas(tarefas,tarefaSelecionada);
})

remove.forEach(btn => (btn.addEventListener("click", (evento) => {
    const tipo = btn.id;
    
    if(tipo === "btn-remover-concluidas"){
        removerTarefa(tarefas,"completas");
    } else if ( tipo === "btn-remover-todas"){
        removerTarefa(tarefas,"todas");
    }

})))