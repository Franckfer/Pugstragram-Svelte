<script>
    import { onMount } from "svelte";
    import Header from "../components/Header.svelte";
    import Main from "../components/Main.svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import TimeLine from "../components/TimeLine.svelte";

    let data = {};
    const API = "https://api-pugstagram.herokuapp.com/?nickname=Frankfer&name=Franco%20Fernandez"
    //const API2 = import.meta.env.VITE_API_KEY
    // const API2 = proccess.env.VITE_API_KEY
    //console.log(API2);

    onMount(async () => {
        const response = await fetch(API);
        data = await response.json();
    })
</script>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    :global(body) {
        background-color: #fafafa;
        color: rgba(38,38,38,0.7);
        font-family: "Lato", sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3) {
        margin: 0;
        padding: 0;
    }
</style>

<!-- <div class="main">
    <h1>Hello Pugstagram</h1>
</div> -->

<Header />
<Main>
    <!-- pasamos los datos al componente -->
    <TimeLine posts={data.posts} />
    <Sidebar {...data.user} /> 
    <!-- destructring -->
</Main>
