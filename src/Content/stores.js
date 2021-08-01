import {writable} from 'svelte/store';
export const luogoRicerca = writable({
    'nazione': '',
    'regione': '',
    'provincia': '',
    'comune': '',
});

export const luoghiInseriti = writable({
    "ssq": [],
    "copernicus": [],
    "arpa_eea": [],
});

export const inquinanti = writable([]);
export const frequenze = writable([]);
export const zoom = writable(0);
