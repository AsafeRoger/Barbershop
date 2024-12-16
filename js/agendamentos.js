// Captura o formulário e adiciona um evento de submit
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Captura os valores do formulário
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Recupera os agendamentos já existentes no LocalStorage ou inicializa um array vazio
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    
    // Adiciona o novo agendamento
    agendamentos.push({
        servico: servico,
        data: data,
        hora: hora
    });

    // Salva os agendamentos no LocalStorage
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    // Mostra uma mensagem de confirmação
    alert("Seu serviço foi agendado!");

    // Redireciona o usuário para a página de histórico
    window.location.href = 'historico.html';
});
