const url = "https://discord.com/oauth2/authorize?client_id=875744115772514345&permissions=8&scope=applications.commands%20bot";

function installBot() {
    alert("Grazie per aver scelto bot Italia!");
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {

    fetch('http://45.43.163.146:25505/servercount')
        .then(response => response.json())
        .then(data => {
            document.getElementById('server-count').textContent = data.serverCount;
        })
        .catch(error => {
            console.error('Errore nel recuperare il conteggio dei server:', error);
            document.getElementById('server-count').textContent = 'Errore nel caricamento';
        });

    // Ottieni il conteggio dei membri
    fetch('http://45.43.163.146:25505/membercount')
        .then(response => response.json())
        .then(data => {
            document.getElementById('member-count').textContent = data.memberCount;
        })
        .catch(error => {
            console.error('Errore nel recuperare il conteggio dei membri:', error);
            document.getElementById('member-count').textContent = 'Errore nel caricamento';
        });
});

function installBot() {
    alert("Grazie per aver scelto bot Italia!");
    window.open(url, '_blank');
}
