function mostrarAgendamentos() {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const historyDiv = document.getElementById('services-history');

    // Limpa o conteúdo inicial
    historyDiv.innerHTML = '';

    // Verifica se há agendamentos salvos
    if (agendamentos.length > 0) {
        // Cria a lista de agendamentos
        const lista = document.createElement('ul');
        lista.className = 'agendamentos-lista';

        agendamentos.forEach(appointment => {
            const item = document.createElement('li');
            item.className = 'agendamento-item';
            item.innerHTML = `
                <h3>${appointment.servico}</h3>
                <p><strong>Data:</strong> ${appointment.data}</p>
                <p><strong>Hora:</strong> ${appointment.hora}</p>
            `;
            lista.appendChild(item);
        });

        historyDiv.appendChild(lista);
    } else {
        // Mensagem para quando não há agendamentos
        historyDiv.innerHTML = "<p>Nenhum serviço agendado foi encontrado.</p>";
    }
}

// Executa a função quando a página estiver carregada
document.addEventListener('DOMContentLoaded', mostrarAgendamentos);
