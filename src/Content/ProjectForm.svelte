<script>
    import ZoomSelector from './ZoomSelector.svelte';
    import {inquinanti, frequenze, luoghiInseriti} from "./stores.js";
    import SearchSources from './SearchSources.svelte';
    import {get} from 'svelte/store';
    import InquinantiCheckboxes from "./InquinantiCheckboxes.svelte";
    import FrequenzeCheckboxes from "./FrequenzeCheckboxes.svelte";
    import {creaProgetto} from './requests';
    import {TextField, Button} from "svelte-materialify";
    let projectName = "";
    let inquinantiSelezionati = [];
    let frequenzeSelezionate = [0,0,0];
    let inquinantiNames = [
        "pm10",
        "pm2_5",
        "pm1",
        "co",
        "o3",
        "no2",
        "so2",
        "h2s",
        "temperatura",
        "pressione",
        "umidita",
        "intensita_vento",
        "direzione_vento",

    ]
    let currentZoom = 0;

    function onZoomChanged(e) {
        currentZoom = e.detail.zoom;
    }

    async function  checkForm(){
        let isValid = false;
        let sources = get(luoghiInseriti);
        if(projectName.trim().length > 0){
            if(
                (sources["ssq"].length > 0
                ||
                sources["arpa_eea"].length > 0
                ||
                sources["copernicus"].length > 0)
            ){
                if(inquinantiSelezionati.length > 0){
                    if(
                        frequenzeSelezionate[0] == 1
                        ||
                        frequenzeSelezionate[1] == 1
                        ||
                        frequenzeSelezionate[2] == 1
                    ){
                       creaProgetto(projectName, inquinantiSelezionati, frequenzeSelezionate, sources, currentZoom).then(r => {
                           alert(r.message);
                       });
                    } else {
                        alert("Nessuna frequenza scelta");
                        return;
                    }
                } else {
                    alert("Nessun inquinante scelto");
                    return;
                }
            } else {
                alert("Nessuna fonte scelta");
                return;
            }
        } else {
            alert("Nome progetto necessario");
            return;
        }

    }

    inquinanti.subscribe(updated => {
        inquinantiSelezionati = updated;
    });
    frequenze.subscribe(updated => {
        frequenzeSelezionate =updated;
    });
    let currentStep = 0;
</script>

<p class="title-text">Creazione progetto</p>
{#if currentStep == 0}
        <div id="form">
                <TextField type="text" name="progetto" bind:value={projectName}>Nome progetto</TextField>
                <ZoomSelector on:zoomChanged={onZoomChanged}/>
                <InquinantiCheckboxes inquinantiNames={inquinantiNames}></InquinantiCheckboxes>
                <FrequenzeCheckboxes></FrequenzeCheckboxes>
                <div class="button-container">
                        <div>
                                <Button class="primary"  on:click={() =>  currentStep ++}>Avanti</Button>
                        </div>
                </div>
        </div>
{/if}
{#if currentStep == 1}

        <SearchSources zoom={currentZoom}/>
        <div class="spaced">
                        <Button class="secondary"  on:click={()=>currentStep--}>Indietro</Button>
                        <Button class="primary" style="align-self: flex-end" on:click={checkForm}>Crea progetto</Button>
        </div>

{/if}
<style>
    #form{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
    }

    .button-container{
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-end;
            width: 100%;
    }
    .spaced{
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
    }
</style>
