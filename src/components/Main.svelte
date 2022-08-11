<style>
    .Main {
      display: grid;
      grid-template-columns: minmax(auto, 936px);
      justify-content: center;
      background-color: #fafafa;
    }
    .Main-container {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-gap: 2em;
      padding: 2em 0;
    }
</style>

<div class="Main">
    <!-- para que main pueda recibir elementos hijos como TimeLine y Sidebar es necesario hacer una configuracion con slot que nos provee svelte para poder pasar otras etiquetas o componentes hijos-->
    <div class="Main-container">
        <slot />
    </div>
</div>