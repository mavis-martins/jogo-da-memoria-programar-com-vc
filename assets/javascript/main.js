const iniciarJogo = document.querySelector('#btnJogar');

if (iniciarJogo) {
    iniciarJogo.onclick = function() {
        window.location.href = 'paginaJogo.html';
    }
}

