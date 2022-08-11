<script>
    import Card from './Card.svelte'

    export let posts = [];
// exportamos este elemento para poder utilizarlo en la renderizacion

</script>

<style>
    .TimeLine {
      padding: 4em 0 0 0;
    }
</style>

<div class="TimeLine">
    <div class="TimeLine-container">
        {#each posts as post}
            <Card {...post}/>
        {:else}
            <h3>Loading...</h3>
        {/each}
    </div>
</div>