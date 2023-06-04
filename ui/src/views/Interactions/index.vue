<template>
    <div class="interactions flex column align-i-center">

        <div class="interactions__leftbar">
            <LeftBar/>
        </div>

        <h1 class="interactions__title">Suas interações</h1>
        
        <div class="interactions__button flex justify-c-center">
            <button @click="interactionsTab($event, 'posts__liked')"
            class="interactions__button__like t-w-bold t-c-aside active">Curtidas</button>
            <button @click="interactionsTab($event, 'posts__saved')" 
            class="interactions__button__save t-w-bold t-c-aside" >Salvos</button>
        </div>

        <div id="posts__liked" class="interactions__posts flex justify-c-center gap-1">
            <interactions-post/>
            <interactions-post/>
            <interactions-post/>
            <interactions-post/>
            <interactions-post/>
        </div>

        <div id="posts__saved" class="interactions__posts flex justify-c-center gap-1">
            <interactions-post/>
            <interactions-post/>
            <interactions-post/>
        </div>

    </div>
</template>

<style>

.interactions {
    margin-left: 300px;
    height: 100vh;
    width:calc(100vw - 300px);
}

.interactions__title {
    font-size: 2.5em;
    margin-top: var(--ratio-2);
    color: var(--color-main-1);
    user-select: none;
}

.interactions__button {
    margin-top: var(--ratio-2);
}

.interactions__button__like,
.interactions__button__save {
    border: none;
    background: none;
    padding: var(--ratio-1);
    cursor: pointer;
    transition: color 0.2s;
}

.interactions__button__like.active,
.interactions__button__save.active {
    color: var(--color-main-1);
    border-bottom: 2px solid var(--color-main-1);
}

.interactions__posts{
    flex-wrap: wrap;
    justify-content: left;
    padding: 0 0 var(--ratio-2) 0;
    width: calc(1030px + var(--ratio-1));
}

</style>

<script>
    import LeftBar from "@/components/layout/LeftBar.vue";
    import InteractionsPost from "@/views/Interactions/InteractionsPost.vue";

    export default {
        name:"Interactions",
        components: {LeftBar, InteractionsPost},
        methods: {
            interactionsTab(evt, tabName) {
                var i, tabContent, tabLinks;
                tabContent = document.getElementsByClassName("interactions__posts");
                for (i = 0; i < tabContent.length; i++) {
                    tabContent[i].style.display = "none";
                }
                tabLinks = document.getElementsByTagName("button");
                for (i = 0; i < tabLinks.length; i++) {
                    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
                }
                document.getElementById(tabName).style.display = "flex";
                evt.currentTarget.className += " active";
            }
        }
    }
</script>