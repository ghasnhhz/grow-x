export function requireEnv(name: string) { const value = process.env[name]; if (!value) throw new Error(`${name} is required.`); return value; }
export function appUrl() { return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"; }
export function xRedirectUri() { return process.env.X_REDIRECT_URI || `${appUrl()}/api/auth/x/callback`; }
