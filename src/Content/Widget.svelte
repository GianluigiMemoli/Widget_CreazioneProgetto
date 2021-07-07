<script>

    /* NON MODIFICARE -> INIZIO */ 
    import { createEventDispatcher } from 'svelte';
    export let visible = false;
	const dispatch = createEventDispatcher();
    const showResult = () => dispatch("showResult"); 
    const showError = (text) => dispatch("showError", {text}); 
    const showMaintenance = (text) => dispatch("showMaintenance", {text}); 
    const showLoading = (text) => dispatch("showLoading", {text}); 
    const showProgressBar = (text, value=0) => dispatch("showProgressBar", {text, value});
    const updateProgressBar = (text, value=0) => dispatch("updateProgressBar", {text, value}); 
    /* NON MODIFICARE -> FINE */ 

    /* ESEMPIO FUNZIONAMENTO ->  INIZIO */
    import { Button } from 'svelte-materialify';
    setTimeout(() => {
        showResult();
    }, 1000);
    /* ESEMPIO FUNZIONAMENTO ->  FINE */

</script>

<main style={visible ? "" : "display: none"}>


    <!-- ESEMPIO FUNZIONAMENTO ->  INIZIO -->
    <Button class="primary-color" on:click={() => showError("Esempio di errore")}>
        Mostra errore
    </Button>

    <Button class="primary-color" on:click={() => showMaintenance("Esempio di manutenzione")}>
        Mostra manutenzione
    </Button>

    <Button class="primary-color" on:click={() => showLoading("Esempio di caricamento")}>
        Mostra caricamento generale
    </Button>

    <Button class="primary-color" on:click={() => showProgressBar("Esempio di caricamento con barra", 75)}>
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