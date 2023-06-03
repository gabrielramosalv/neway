<template>
    <nav class="left-bar flex column gap-1">
        <h2 class="left-bar__logo">Neway</h2>
        <div class="flex column">
            <button class="left-bar__button flex  align-i-center gap-1 width-full">
                <span class="left-bar__button__image"></span>
                <span>Início</span>
            </button>
            <button class="left-bar__button flex  align-i-center gap-1 width-full">
                <span class="left-bar__button__image"></span>
                <span>Interações</span>
            </button>
            <button class="left-bar__button flex  align-i-center gap-1 width-full">
                <span class="left-bar__button__image"></span>
                <span>Publicar</span>
                <CreatingPostPopup/>
            </button>
        </div>
        <span class="left-bar__copyright">Copyright Neway @2023</span>
    </nav>
</template>

<style scoped>

.left-bar {
    left: 0;
    position: fixed;
    height: 100vh;
    width: 300px;
    padding: var(--ratio-1);
    border-right: 2px solid var(--color-grey-2);
}

.left-bar__copyright {
    color: var(--color-text-aside-1);
    margin-top: auto;
}

.left-bar__logo {
    font-size: 2.5em;
    color: var(--color-main-1);
    padding: var(--ratio-1);
    user-select: none;
}

.left-bar__button {
    border-radius: var(--rounded-2);
    font-weight: 700;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: var(--ratio-1);
}

.left-bar__button:hover {
    background-color: var(--color-grey-1);
}

.left-bar__button__image {
    background: url("@/assets/img/Vector.svg") center no-repeat;
    background-size: 100%;
    height: 25px;
    aspect-ratio: 1/1;
    //border: 2px solid var(--color-main-1);
}

</style>

<script>

import CreatingPostPopup from "@/components/CreatingPostPopup.vue";

export default {
    name: "LeftBar",
    components: {CreatingPostPopup}
}
</script>