
<script>
    /* NON MODIFICARE -> INIZIO */
    import ProjectForm from "./ProjectForm.svelte";

    export let showResult, showError, showLoading, showMaintenance, showProgressBar, updateProgressBar, getFormData;
    export let WIDGET_VISIBLE = false;
    /* NON MODIFICARE -> FINE */

    /* ESEMPIO FUNZIONAMENTO ->  INIZIO */
    import {Button} from 'svelte-materialify/src';

    setTimeout(() => {
        showResult();
    });
    /* ESEMPIO FUNZIONAMENTO ->  FINE */

</script>

<main style={WIDGET_VISIBLE ? "" : "display: none"}>


<ProjectForm></ProjectForm>

</main>

<style>

    main {
        width: 100%;
        height: 100%;
    }

</style>
