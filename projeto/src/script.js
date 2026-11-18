const API_KEY = "7226e3c98daa4012b68230846261611"; 

const botaoDeBusca = document.getElementById('buscar-btn');
const campoDeTexto = document.getElementById('cidade-input');
const caixaDeResultado = document.getElementById('resultado');

botaoDeBusca.addEventListener('click', async () => {
    // Pega o valor que o usuário digitou no campo de texto
    const cidade = campoDeTexto.value;
    
    if (cidade.trim() === '') {
        alert("Por favor, digite o nome de uma cidade.");
        return;
    }

    caixaDeResultado.innerHTML = "Buscando...";

    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&lang=pt`;
        const resposta = await fetch(url);
        
        const dados = await resposta.json();

        if (dados.error) {
            caixaDeResultado.innerHTML = `Erro: ${dados.error.message}`;
            return;
        }

        console.log("Dados da API:", dados);

        caixaDeResultado.innerHTML = `
            <h2>${dados.location.name}, ${dados.location.region}</h2>
            <p><strong>Temperatura:</strong> ${dados.current.temp_c}°C</p>
            <p><strong>Clima:</strong> ${dados.current.condition.text}</p>
            <img src="${dados.current.condition.icon}" alt="Ícone do clima">
        `;

    } catch (erro) {
        console.error(erro);
        caixaDeResultado.innerHTML = "Erro ao conectar com a API.";
    }
});