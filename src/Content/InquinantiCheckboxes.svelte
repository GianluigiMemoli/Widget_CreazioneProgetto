<script>
    import {inquinanti} from "./stores.js";
    import {get} from "svelte/store";

    export let inquinantiNames;
    let inquinantiChecked = get(inquinanti);

    function updateInquinanti(inquinante){
        let indexInquinante =inquinantiChecked.indexOf(inquinante);
        if(indexInquinante >= 0){
            inquinantiChecked.splice(indexInquinante, 1);
        } else {
            inquinantiChecked.push(inquinante);
        }
        inquinanti.update( self => self = inquinantiChecked);
    }

    function removeUnderscore(string){
        let words = string.split("_");
        let stringCleaned = "";
        words
            .forEach(w => stringCleaned += w + " ");
        return stringCleaned;
    }
</script>
<div class="container">
<p class="description-text">Inquinanti</p>
<div id="inquinanti">
    {#each inquinantiNames as inquinante, idx}
        <div id="inquinante">
            <label>
                <input name = "inquinanti" value={inquinante} type="checkbox" on:change={() => updateInquinanti(inquinante)} checked={inquinantiChecked.includes(inquinante)}/>
                {removeUnderscore(inquinante)}
            </label>
        </div>
    {/each}
</div>
</div>
<style>

    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #inquinanti{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
    }

    #inquinante{
        flex:  0 30%;
        align-self: center;
    }
    p{
        text-align: center;
    }
</style>
