<script>
	import Widget from "./Widget.svelte";
	import { MaterialApp, ProgressCircular, ProgressLinear, Icon } from 'svelte-materialify';
	import { mdiAlertBox, mdiAccountHardHat } from '@mdi/js';

	// Status options
	const LOADING = 0, DONE = 1, ERROR = -1, MAINTENANCE = 2;

	// Loading options
	const GENERIC_LOADING = 0, PROGRESSBAR_LOADING = 1;

	// Status widget
	let STATUS_WIDGET = LOADING;
	let TEXT_DESCRIPTION = "";
	let LOADING_TYPE = GENERIC_LOADING;
	let LOADING_VALUE = 0;

</script>

<main>

	<MaterialApp>
	
		<Widget 

			visible={STATUS_WIDGET === DONE}

			on:showResult={() => {				
				STATUS_WIDGET = DONE;
				LOADING_VALUE = 0;
				TEXT_DESCRIPTION = "";
			}}

			on:showError={e => {
				STATUS_WIDGET = ERROR;
				LOADING_VALUE = 0;
				TEXT_DESCRIPTION = e.detail.text;
			}}

			on:showMaintenance={e => {
				STATUS_WIDGET = MAINTENANCE;
				LOADING_VALUE = 0;
				TEXT_DESCRIPTION = e.detail.text;
			}}

			on:showLoading={e => {
				console.log(e);
				
				STATUS_WIDGET = LOADING;
				LOADING_TYPE = GENERIC_LOADING;
				LOADING_VALUE = 0;
				TEXT_DESCRIPTION = e.detail.text;
			}}

			on:showProgressBar={e => {
				STATUS_WIDGET = LOADING;
				LOADING_TYPE = PROGRESSBAR_LOADING;
				TEXT_DESCRIPTION = e.detail.text;
				LOADING_VALUE = e.detail.value;
			}}

			on:updateProgressBar={e => {
				if(STATUS_WIDGET === LOADING && LOADING_TYPE === PROGRESSBAR_LOADING){
					TEXT_DESCRIPTION = e.detail.text;
					LOADING_VALUE = e.detail.value;
				}
			}}

		/>

		{#if STATUS_WIDGET === LOADING}
		
			{#if LOADING_TYPE === GENERIC_LOADING}

				<div class="GENERIC_CONTAINER">

					<div>
						
						<div class="loading-element">
							<ProgressCircular 
								size={70} 
								indeterminate 
								color="success" 
							/>
						</div>

						<span>
							{TEXT_DESCRIPTION}
						</span>
					</div>

				</div>

			{:else}

				<div class="GENERIC_CONTAINER">

					<div>
						<ProgressLinear 
							height="16px" 
							value={LOADING_VALUE} 
						/>

						<span>
							{TEXT_DESCRIPTION}
						</span>
					</div>

				</div>

			{/if}

		{:else if STATUS_WIDGET === ERROR}
		
			<div class="GENERIC_CONTAINER">

				<div>
					<Icon 
						size="64"
						path={mdiAlertBox} 
					/>

					<span>
						{TEXT_DESCRIPTION}
					</span>
				</div>

			</div>
		
		{:else if STATUS_WIDGET === MAINTENANCE}

			<div class="GENERIC_CONTAINER">

				<div>
					<Icon 
						size="64"
						path={mdiAccountHardHat} 
					/>

					<span>
						{TEXT_DESCRIPTION}
					</span>
				</div>

			</div>
		
		{/if}

	</MaterialApp>

</main>

<style>

	:global(.s-app){
		width: 100%;
		height: 100%;
	}

	main {
		width: 100%;
        height: 100%;
	}

	.GENERIC_CONTAINER {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}

	.GENERIC_CONTAINER > div {
		width: 100%;
		max-width: 600px;
		display: flex;
		flex-direction: column;
	}

	.GENERIC_CONTAINER > div > span {
		text-align: center;
		margin-top: 32px;
	}

	.GENERIC_CONTAINER > div > .loading-element {
		display: grid;
		place-items: center;
	}

</style>