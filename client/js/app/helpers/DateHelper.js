class DateHelper {
    constructor() {
        throw new Error("Esta classe não pode ser instanciada");
    }

    //métodos estáticos > nao precisa instanciar a classe pra poder usar o método
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    // "..." spread operator, vai desmembrar o ARRAY gerado pelo split e colocar cada item em cada parâmetro do Date
    // mas tem que corrigir o número do mês
    static textoParaData(texto) {
        //expressão regular
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error("Deve estar no formato aaaa-mm-dd");

        return new Date(
            //splitando pra virar um array e fazendo o mapping pra percorrer cada item do array
            ...texto.split("-").map((item, indice) => item - (indice % 2))
        ); //pra nao usar IF quando -> //arrow function //indices = 0, 1 e 2 dia mes ano);
    }
}
