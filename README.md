# Template widget

La seguente repository serve per la creazione di widget compatibili per il nuovo sistema dashboard sviluppato da Sense Square.

## Get started

Installa le dipendenze...

```bash
cd svelte-app
npm install
```

...dopo esegui [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Vai all'indirizzo [localhost:5000](http://localhost:5000). Dovresti poter vedere il contenuto di default del template.

Per procedere modifica il contenuto del file Widget.svelte e osserva i cambiamenti nel browser (esso è presente al path /src/Content).

Per modificare le configurazioni del widget (dimensioni, nome, id, ...), modifica il file Constants.js

## Funzionalità del widget

*Attenzione! Cancella esclusivamente le parti che fanno parte dell'esempio*

All'interno del widget saranno presenti delle funzionalità di base, esse sono relative ai caricamenti e a svariati messaggi informativi.

### showResult()
Questo comando consentirà di mostrare il contenuto del file widget.svelte, esso servirà alla fine di ogni caricamento

### showError(text)
Questo comando consentirà in caso di errore di spiegare all'utente cosa è successo (usare solo se l'errore verificatosi non consente il funzionamento del widget)

### showMaintenance(text)
Questo comando consentirà in caso di manutenzione di spiegare all'utente cosa sta succedendo

### showLoading(text)
Questo comando mostrerà all'utente una barra di caricamento generica (non mostra il progresso del caricamento)

### showProgressBar(text, value)
Questo comando mostrerà la barra di caricamento (mostra il progresso del caricamento), il parametro "value" indica il valore iniziale del caricamento

### updateProgressBar(text, value)
Questo comando consentirà di eseguire un update della barra di caricamento (in modo tale da aggiornare il progresso)