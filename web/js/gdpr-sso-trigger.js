document.addEventListener('DOMContentLoaded', () => {
    const ssoEventName = 'gl:gdpr-consent-given';
    let ssoEventFired = false;

    const fireSsoTrigger = () => {
        // Ensure the event is fired only once per page load.
        if (ssoEventFired) {
            return;
        }
        ssoEventFired = true;
        console.log('[GL-SSO] GDPR consent is given. Firing SSO sync event.');
        document.dispatchEvent(new CustomEvent(ssoEventName));
    };

    // 1. Check for existing consent on page load.
    // The Amasty GDPR module sets a cookie 'amcookie_allowed' when consent is given.
    // We check for its existence to handle subsequent page loads.
    if (document.cookie.includes('amcookie_allowed=')) {
        console.log('[GL-SSO] Found existing Amasty GDPR consent cookie. Triggering SSO.');
        fireSsoTrigger();
    } else {
        console.log('[GL-SSO] No existing Amasty GDPR consent cookie found. Listening for consent events.');
    }

    // 2. Listen for consent events for users who grant consent on the current page.
    // This handles the first-time consent action.
    document.body.addEventListener('amcookie_save', fireSsoTrigger);
    document.body.addEventListener('amcookie_allow', fireSsoTrigger);
});
