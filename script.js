// Botão de logout
document.getElementById("logout-button").addEventListener("click", function() {
    const logoutScreen = document.getElementById("logout-screen");
    const disconnectedScreen = document.getElementById("disconnected-screen");

    // Adiciona a transição
    logoutScreen.classList.add("hidden");

    setTimeout(() => {
        logoutScreen.style.display = "none";
        disconnectedScreen.classList.remove("hidden");
    }, 500); // Tempo para a animação de saída
});

// Botão de recarregar a página
document.getElementById("reload-button").addEventListener("click", function() {
    location.reload(); // Recarrega a página para voltar ao início
});
