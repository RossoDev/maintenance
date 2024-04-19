document.addEventListener('DOMContentLoaded', function() {
    fetch('https://discordsrv.mysrv.us/servercount')
        .then(response => response.json())
        .then(data => {
            document.getElementById('server-count').textContent = data.serverCount;
        })
        .catch(error => {
            document.getElementById('server-count').textContent = 'N/A';
        });

    fetch('https://discordsrv.mysrv.us/membercount')
        .then(response => response.json())
        .then(data => {
            document.getElementById('member-count').textContent = data.memberCount;
        })
        .catch(error => {
            document.getElementById('member-count').textContent = 'N/A';
        });

    document.getElementById('install-button').addEventListener('click', () => {
        alert("Grazie per aver scelto Italia!");
        window.open('https://discord.com/oauth2/authorize?client_id=875744115772514345&permissions=8&scope=applications.commands%20bot', '_blank');
    });
});
