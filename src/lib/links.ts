/** Sign-in lives on the Odoo instance, not in this app. Point at /web/login
 *  directly — bare https://app.chatkit.cc serves the Odoo landing/router, so a
 *  signed-out visitor lands a click short of the form. */
export const SIGN_IN_URL = "https://app.chatkit.cc/web/login";
