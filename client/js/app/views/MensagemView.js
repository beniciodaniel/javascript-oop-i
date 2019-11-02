class MensagemView extends View {

    constructor(elementoDom) {
        super(elementoDom);
    }

    template(model) {
        // se tiver texto ? faça isto : senão faça isso
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }


}