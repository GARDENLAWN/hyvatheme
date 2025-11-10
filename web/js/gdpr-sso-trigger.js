document.addEventListener('DOMContentLoaded', () => {
    const ssoEventName = 'gl:gdpr-consent-given';
    let ssoEventFired = false;

    const fireSsoTrigger = () => {
        if (ssoEventFired) {
            return;
        }
        ssoEventFired = true;
        console.log('[GL-SSO] GDPR consent is given. Firing SSO sync event.');
        document.dispatchEvent(new CustomEvent(ssoEventName));
        transferSession();
    };

    if (document.cookie.includes('amcookie_allowed=')) {
        console.log('[GL-SSO] Found existing Amasty GDPR consent cookie. Triggering SSO.');
        fireSsoTrigger();
    } else {
        console.log('[GL-SSO] No existing Amasty GDPR consent cookie found. Listening for consent events.');
    }

    document.body.addEventListener('amcookie_save', fireSsoTrigger);
    document.body.addEventListener('amcookie_allow', fireSsoTrigger);
});

function transferSession() {
    if (!window.ssoConfig || !window.ssoConfig.allowedDomains) {
        console.error('[GL-SSO] SSO configuration not found.');
        return;
    }

    const allowedDomains = window.ssoConfig.allowedDomains;
    const currentDomain = window.location.hostname;

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
