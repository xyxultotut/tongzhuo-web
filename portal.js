// Only this configured HTTPS service can receive the navigation.
const destination = new URL('https://node.tail2589b0.ts.net:8443/join');
const fragment = new URLSearchParams(location.hash.slice(1));
const invite = fragment.get('invite');
if (invite && /^[A-Za-z0-9_-]{43}$/.test(invite)) {
  destination.hash = new URLSearchParams({ invite, ...(fragment.get('role') === 'owner' ? { role: 'owner' } : {}) }).toString();
}
document.getElementById('open-chat').href = destination.href;
location.replace(destination.href);
