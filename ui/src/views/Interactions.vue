<template>
    <div class="interactions flex column align-i-center">

        <div class="interactions__leftbar">
            <LeftBar/>
        </div>

        <h1 class="interactions__title">Suas interações</h1>
        
        <div class="interactions__button flex justify-c-center">
            <button class="interactions__button__like bold aside">Curtidas</button>
            <button class="interactions__button__save bold aside">Salvos</button>
        </div>

        <div class="interactions__posts flex justify-c-center gap-1">
            <interactions-post/>
            <interactions-post/>
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
    text-align: center;
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

.interactions__button__like:active,
.interactions__button__save:active {
    color: var(--color-main-1);
    border-bottom: 2px solid var(--color-main-1);
}

.interactions__posts{
    flex-wrap: wrap;
    justify-content: left;
    width: 1095px;
}

</style>

<script>
    import LeftBar from "@/layout/LeftBar.vue";
    import InteractionsPost from "@/components/InteractionsPost.vue";

    export default {
        name:"Interactions",
        components: {LeftBar, InteractionsPost},
    }
</script>