let indiceDepoimento = 0;

function mudaDepoimento(n) {
    const depoimentos = document.querySelectorAll('.depoimento');
    depoimentos[indiceDepoimento].classList.remove('ativo');
    indiceDepoimento = (indiceDepoimento + n + depoimentos.length) % depoimentos.length;
    depoimentos[indiceDepoimento].classList.add('ativo');
}

// Modal da Galeria
function abreModal(index) {
    const modal = document.getElementById('modalGaleria');
    const imagemModal = document.getElementById('imagemModal');
    const captionText = document.getElementById('caption');

    const imagens = document.querySelectorAll('.galeria-img');
    const imgSelecionada = imagens[index - 1]; // Ajustando o índice

    imagemModal.src = imgSelecionada.src;
    captionText.innerHTML = imgSelecionada.alt;

    modal.style.display = "block";
}

function fechaModal() {
    const modal = document.getElementById('modalGaleria');
    modal.style.display = "none";
}

// Função para enviar o formulário
function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    const resultado = document.getElementById('resultado');

    // Aqui você pode implementar a lógica para enviar os dados para o servidor via AJAX ou outro método
    // Por simplicidade, vamos simular o envio e mostrar uma mensagem de sucesso

    if (nome && email && telefone && assunto && mensagem) {
        resultado.innerHTML = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Ocorreu um erro ao enviar a mensagem. Tente novamente.";
        resultado.style.color = "red";
    }

    // Impede o envio real do formulário
    return false;
}

// Função para enviar a reserva
function enviarReserva() {
    const nomeReserva = document.getElementById('nomeReserva').value;
    const emailReserva = document.getElementById('emailReserva').value;
    const dataReserva = document.getElementById('dataReserva').value;
    const horaReserva = document.getElementById('horaReserva').value;
    const observacoesReserva = document.getElementById('observacoesReserva').value;
    const resultadoReserva = document.getElementById('resultadoReserva');

    // Simula o envio da reserva
    if (nomeReserva && emailReserva && dataReserva && horaReserva) {
        resultadoReserva.innerHTML = "Reserva realizada com sucesso! Em breve confirmaremos sua consulta.";
        resultadoReserva.style.color = "green";
    } else {
        resultadoReserva.innerHTML = "Ocorreu um erro ao realizar a reserva. Tente novamente.";
        resultadoReserva.style.color = "red";
    }

    // Impede o envio real do formulário
    return false;
}



