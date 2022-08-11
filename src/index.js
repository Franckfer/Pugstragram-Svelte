import App from './containers/App.svelte';

const app = new App({
    target: document.querySelector('main')
    //empujamos nuestro archivo main de App al index.html que renderiza toda la app
})

export default app;