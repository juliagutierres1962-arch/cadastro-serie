function cadastrar() {

    var titulo = document.getElementById("titulo").value;
    var episodio = document.getElementById("episodio").value;
    var descricao = document.getElementById("descricao").value;
    var autor = document.getElementById("autor").value;

    if (
        titulo == "" ||
        episodio == "" ||
        descricao == "" ||
        autor == ""
    ) {

        alert("Preencha todos os campos!");

    } else {

        alert(
            "Cadastrado com sucesso!" +
            "\nTítulo: " + titulo +
            "\nEp.: " + episodio +
            "\nDescrição: " + descricao +
            "\nAutor: " + autor );

    }}