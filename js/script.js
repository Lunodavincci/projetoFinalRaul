document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    const outputDiv = document.getElementById('output');
    const dadosEnviadosSection = document.getElementById('dados-enviados');

    if (contactForm && outputDiv && dadosEnviadosSection) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;

            const email = document.getElementById('email').value;

            const telefone = document.getElementById('telefone').value;

            const tipoContatoSelect = document.getElementById('tipo-contato');
            const tipoContato = tipoContatoSelect.options[tipoContatoSelect.selectedIndex].text; // Pega o texto da opção selecionada

            let periodo = '';
            const radioButtons = document.querySelectorAll('input[name="periodo"]');
            for (const radio of radioButtons) {
                if (radio.checked) {
                    periodo = radio.value;
                    break; 
                }
            }
            if (periodo === '') {
                periodo = 'Não informado';
            }

            const mensagem = document.getElementById('mensagem').value;
            const outputHTML = `
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${telefone ? telefone : 'Não informado'}</p>
                <p><strong>Motivo do Contato:</strong> ${tipoContato}</p>
                <p><strong>Disponibilidade:</strong> ${periodo}</p>
                <p><strong>Mensagem:</strong></p>
                <p class="mensagem-exibida">${mensagem}</p>
            `;
            outputDiv.innerHTML = outputHTML;
            dadosEnviadosSection.style.display = 'block';
        });

        const resetButton = contactForm.querySelector('button[type="reset"]');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                dadosEnviadosSection.style.display = 'none'; 
                outputDiv.innerHTML = ''; 
            });
        }
    }

});