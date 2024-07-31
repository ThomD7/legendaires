import lang from './lang.json';

export const routes = [
    {
        title: lang.header.clan,
        href: '/',
    },
    {
        title: lang.header.members,
        href: '/#' + normalizeURL(lang.header.members),  // Use the normalized URL
    },
    {
        title: lang.header.about,
        href: '/' + normalizeURL(lang.header.about),
    },
];

export const routesParams = [
    {
        title: lang.header.member,
        href: normalizeURL(lang.header.member) + '/',
    },
];

function normalizeURL(str) {
    return str
        .normalize('NFD')                  // Normalize to NFD form
        .replace(/[\u0300-\u036f]/g, '')   // Remove diacritical marks
        .replace(/\s+/g, '')               // Remove all whitespace characters
        .toLowerCase();                    // Convert to lowercase
}