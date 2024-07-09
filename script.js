// Chave da API
const apiKey = 'be3137da76b19966b89d924dd79fba7a';

// URL da API para versículo diário (exemplo com KJV)
const apiUrl = `https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/verses/daily?apiKey=${apiKey}`;

// Função para buscar o versículo diário
async function fetchDailyVerse() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao carregar versículo');
        }
        const data = await response.json();
        const dailyVerse = data.data[0].content;
        const verseReference = data.data[0].reference;
        return { verse: dailyVerse, reference: verseReference };
    } catch (error) {
        console.error('Erro:', error.message);
        return null;
    }
}

// Exemplo de uso
fetchDailyVerse().then(result => {
    if (result) {
        console.log('Versículo do dia:', result.verse);
        console.log('Referência:', result.reference);
        // Aqui você pode inserir o código para exibir o versículo no seu site
    } else {
        console.log('Não foi possível carregar o versículo do dia.');
    }
});
