const GOOGLE_CLIENT_ID = "1008478967576-95t25kldt6hi7ck41bv6lopcrfig832n.apps.googleusercontent.com";
/* globals */

export function InitGoogle(){
    const googleScriptTag = document.createElement('script')
    googleScriptTag.setAttribute('src', 'https://apis.google.com/js/api:client.js')
    document.head.appendChild(googleScriptTag)
    googleScriptTag.onload = () => {
        // the global gapi variable is created by loading that script
        gapi.load('auth2', () => {
            window.auth2 = gapi.auth2.init({
                client_id: GOOGLE_CLIENT_ID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            })
        })
    }
}