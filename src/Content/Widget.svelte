
<script>
    /* NON MODIFICARE -> INIZIO */ 
    export let showResult, showError, showLoading, showMaintenance, showProgressBar, updateProgressBar, getFormData;
    export let WIDGET_VISIBLE = false;
    /* NON MODIFICARE -> FINE */ 

    /* ESEMPIO FUNZIONAMENTO ->  INIZIO */
    import { Button } from 'svelte-materialify/src';
    setTimeout(() => {
        showResult();
    });
    /* ESEMPIO FUNZIONAMENTO ->  FINE */

</script>

<main style={WIDGET_VISIBLE ? "" : "display: none"}>


    <!-- ESEMPIO FUNZIONAMENTO ->  INIZIO -->
    <Button on:click={() => showError("Esempio di errore")}>
        Mostra errore
    </Button>

    <Button class="primary title-text" on:click={() => showMaintenance("Esempio di manutenzione")}>
        Mostra manutenzione
    </Button>

    <Button class="secondary secondary-title-text" on:click={() => showLoading("Esempio di caricamento")}>
        Mostra caricamento generale
    </Button>

    <Button class="accent description-text" on:click={() => showProgressBar("Esempio di caricamento con barra", 75)}>
        Mostra caricamento con barra
    </Button>
    <!-- ESEMPIO FUNZIONAMENTO ->  FINE -->
    
</main>

<style>

    main {
        width: 100%;
        height: 100%;
    }

</style>