document.addEventListener('amcookie_save', function () {
    transferSession();
});

document.addEventListener('amcookie_allow', function () {
    transferSession();
});

function transferSession() {
    const allowedDomains = ['gardenlawn.local', 'amrobots.local', 'finnpolska.local'];
    const currentDomain = window.location.hostname;

    // Pobierz zaszyfrowany token sesji z backendu
    fetch('/sso/transfer/token')
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                allowedDomains.forEach(domain => {
                    if (domain !== currentDomain) {
                        const iframe = document.createElement('iframe');
                        iframe.src = `https://${domain}/sso/transfer/index?token=${data.token}`;
                        iframe.style.display = 'none';
                        document.body.appendChild(iframe);
                    }
                });
            }
        });
}
