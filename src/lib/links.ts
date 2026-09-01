/** Sign-in lives on the CRM, not in this app.
 *
 *  Previously https://app.chatkit.cc/web/login — that host now serves the
 *  WhatsApp bridge rather than Odoo, so the old link is dead. crm.chatkit.cc
 *  serves the dashboard from its own root, so no path is needed here. */
export const SIGN_IN_URL = "https://crm.chatkit.cc/";
