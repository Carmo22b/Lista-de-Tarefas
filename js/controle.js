let contador = 0;

let input = document.getElementById("input_tarefa");

let btn_add = document.getElementById("btn_add");

let main = document.getElementById("area_lista")

function add_tarefa() {
    let valor_input = input.value;

    if ((valor_input !== "") && (valor_input !== null) && (valor_input !== undefined)) {

        ++contador;

        let novo_item = `<div id ="${contador}" class="item">
            <div onclick ="marcar_tarefa(${contador})" class="item_icone">
                <i id ="icone_${contador}" class="material-icons">panorama_fish_eye</i>
            </div>
            <div onclick ="marcar_tarefa(${contador})" class="item_nome">
                ${valor_input}
            </div>
            <div class="item_botao">
                <button onclick ="deletar(${contador})" class="delete"><span class="material-symbols-outlined">
                    delete
                    </span> <br> Delete</button>
            </div>
        </div>`;

        main.innerHTML += novo_item;

        input.value = "";
        input.focus();


    };


};


function deletar(contador) {
    var tarefa = document.getElementById(contador);
    tarefa.remove();

};


let item_clicado = `<div id ="${contador}" class="item_clicado">
    <div onclick ="marcar_tarefa(${contador})" class="item_icone">
        <i id ="icone_${contador}" class="large material-icons">check_circle</i>
    </div>
    <div onclick ="marcar_tarefa(${contador})" class="item_nome">
        
    </div>
    <div class="item_botao">
        <button onclick ="deletar(${contador})" class="delete"><span class="material-symbols-outlined">
            delete
        </span> <br> Delete</button>
    </div>
</div>`

function marcar_tarefa(contador) {
    var item = document.getElementById(contador);
    var classe = item.getAttribute("class");
    console.log(classe);

    item.parentNode.appendChild(item)
    
    if (classe == "item") {
        item.classList.remove("item");
        item.classList.add("item_clicado");

        var icone = document.getElementById("icone_" + contador);
        icone.textContent = "check_circle";

    }else{
        item.classList.remove("item_clicado");
        item.classList.add("item");

        var icone = document.getElementById("icone_" + contador);
        icone.textContent = "panorama_fish_eye";

    }

}


input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn_add.click();
    };
});


