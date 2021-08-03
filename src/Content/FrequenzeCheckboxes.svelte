<script>
    import {frequenze} from "./stores.js";
    import {get} from "svelte/store";

    let frequenzeMap = {"giornalieri": false, "settimanali": false, "mensili": false};

    function updateFrequenze(frequenza){
        frequenzeMap[frequenza] = !frequenzeMap[frequenza];
        frequenze.update(self => self = Object.values(frequenzeMap).map(f => Number(f)));
    }

    let frequenzeStored = get(frequenze);

</script>
<p class="description-text">Frequenze</p>

<div id="frequenze">
    {#each Object.keys(frequenzeMap) as frequenza, idx}
        <label>{frequenza}
            <input name = "frequenze"  type="checkbox" on:change={() => updateFrequenze(frequenza)} checked={frequenzeStored[idx] == 1}/>
        </label>
    {/each}
</div>

<style>
    #frequenze > label{
        display: inline;
        margin-right: 1em;
    }
    #frequenze{
        display: flex;
        flex-direction: row;
    }
</style>
