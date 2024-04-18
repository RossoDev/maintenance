document.addEventListener('DOMContentLoaded', function() {
    fetch('https://45.43.163.146:25505/servercount')
        .then(response => response.json())
        .then(data => {
            document.getElementById('server-count').textContent = data.serverCount + ' server';
        })
        .catch(error => {
            document.getElementById('server-count').textContent = 'Non disponibile';
        });

    fetch('https://45.43.163.146:25505/membercount')
        .then(response => response.json())
        .then(data => {
            document.getElementById('member-count').textContent = data.memberCount + ' utenti';
        })
        .catch(error => {
            document.getElementById('member-count').textContent = 'Non disponibile';
        });

    document.getElementById('install-button').addEventListener('click', () => {
        alert("Grazie per aver scelto Italia!");
        window.open('https://discord.com/oauth2/authorize?client_id=875744115772514345&permissions=8&scope=applications.commands%20bot', '_blank');
    });
});
