let palavraCorreta = '';

async function sortearPalavra(tipo = 'diario') {
    try {
        const resposta = await fetch('./words.json');
        
        if (!resposta.ok) {
            throw new Error('Não foi possível carregar o arquivo words.json');
        }

        const dados = await resposta.json();

        if (!dados[tipo] || dados[tipo].length === 0) {
            console.error(`Nenhuma palavra encontrada para o tipo: ${tipo}`);
            return;
        }

        const lista = dados[tipo];
        const indiceAleatorio = Math.floor(Math.random() * lista.length);
        palavraCorreta = lista[indiceAleatorio].toUpperCase();
    } catch (erro) {
        console.error("Erro ao carregar ou processar words.json: ", erro);
    }
}