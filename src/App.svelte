

<style>
    :global(body){
        background-color: #1a237e;
    }

    .demo-widget {
        background: #f1f1f1;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .demo-container {
        max-width: 1000px;
        width: 100%;
    }
</style>

<div class=demo-container>
  <Grid bind:items={items} rowHeight={100} let:item let:dataItem {cols}>
    <div class=demo-widget>
        <Wrapper />  
    </div>
  </Grid>
</div>

<script>
import { WIDGET_DEFAULT_DIMENSION, WIDGET_MAX_DIMENSION, WIDGET_MIN_DIMENSION, isResizable } from "./Content/Constants";
import Wrapper from "./Content/Wrapper.svelte";
import Grid from "svelte-grid";
import gridHelp from "svelte-grid/build/helper/index.mjs";

const id = () => "_" + Math.random().toString(36).substr(2, 9);

let items = [
  {
    6: gridHelp.item({ 
      x: 0,
      y: 0,
      w: WIDGET_DEFAULT_DIMENSION.w,
      h: WIDGET_DEFAULT_DIMENSION.h,
      max: WIDGET_MAX_DIMENSION,
      min: WIDGET_MIN_DIMENSION,
      fixed: !isResizable
    }),
    id: id(),
  }
];

const cols = [
  [ 1200, 6 ],
];
</script>