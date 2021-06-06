// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

// CREATE Contato
function insertContato(contato) {
    let novoContato = {
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
    };

    // Enviando para o Backend
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location.href + "api/clientes",
        data: JSON.stringify(novoContato),
        dataType: 'json'
    });

    // Recarrega a página e mostra mensagem de sucesso
    displayMessage("Contato inserido com sucesso");
}

// UPDATE Contato
function updateContato(contato) {

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location.href + "api/clientes/update",
        data: JSON.stringify(contato),
        dataType: 'json'
    });

    displayMessage("Contato alterado com sucesso");
}

// DELETE Contato
function deleteContato(campoId) {    

    let deletaId = { "id": campoId };

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location.href + "api/clientes/delete",
        data: JSON.stringify(deletaId),
        dataType: 'json'
    });

    displayMessage("Contato removido com sucesso");
}
