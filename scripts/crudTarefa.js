export function criarTarefas (tarefas, tarefa) {
    const tarefaObj = {
        descricao : tarefa,
        completa : false
    };

    tarefas.push(tarefaObj);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));

}

export function atualizarTarefas (tarefas,tarefa,novaDesc) {
    let antTarefa = tarefa;
    const tarefaObj = tarefas.find((tarefa) => tarefa.descricao === antTarefa);
    tarefaObj.descricao = novaDesc;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));

}

export function completarTarefas (tarefas,tarefa){

    tarefa.classList.remove('app__section-task-list-item-active');
    tarefa.classList.add('app__section-task-list-item-complete');
    tarefa.querySelector('button').setAttribute('disabled', 'disabled')

    let compTarefa = tarefa.querySelector('p').textContent;

    const tarefaObj = tarefas.find((tarefa) => tarefa.descricao === compTarefa);
    tarefaObj.completa = true;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

export function verificaTarefa(tarefas, tarefa){

    const tarefaVerificar = tarefa;
    const tarefaObj = tarefas.find((tarefa) => tarefa.descricao === tarefaVerificar);
    return tarefaObj.completa;

}

export function removerTarefa(tarefas, tipo){
    if(tipo === "completas" ){
        const seletor = ".app__section-task-list-item-complete";
        document.querySelectorAll(seletor).forEach(elemento => {
            elemento.remove();
        });
        tarefas = tarefas.filter(tarefa => !tarefa.completa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));

    } else if(tipo === "todas" ){
        const seletor = ".app__section-task-list-item";
        document.querySelectorAll(seletor).forEach(elemento => {
            elemento.remove();
        });
        tarefas = [];
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
}