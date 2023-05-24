<template>
    <nav class="left-bar flex column gap-1">
        <h2 class="left-bar__logo">
            Neway
        </h2>
        <div class="flex column">
            <button class="left-bar__button flex  align-i-center gap-1 width-full">
                <span class="left-bar__button__image"></span>
                <span>Início</span>
            </button>
            <button class="left-bar__button flex  align-i-center gap-1 width-full">
                <span class="left-bar__button__image"></span>
                <span>Comunidade</span>
            </button>
            <button class="left-bar__button flex  align-i-center gap-1 width-full">
                <span class="left-bar__button__image"></span>
                <span>Configurações</span>
            </button>
            <button class="left-bar__button flex  align-i-center gap-1 width-full">
                <span class="left-bar__button__image"></span>
                <span>Criar</span>
            </button>
        </div>
        <span class="left-bar__copyright">Copyright Neway @2023</span>
    </nav>
</template>

<style scoped>

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

.left-bar {
    left: var(--ratio-1);
    position: fixed;
    height: calc(100vh - calc(2 * var(--ratio-1)));
    width: 250px;
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
    height: 25px;
    aspect-ratio: 1/1;
    border-radius: var(--rounded-2);
    border: 2px solid var(--color-main-1);
}

</style>

<script>

export default {
    name: "LeftBar"
}
</script>