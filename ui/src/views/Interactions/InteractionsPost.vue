<template>
    <article class="interactionsPost flex column gap-1">

        <header class="width-full"></header>

        <div class="interactionsPost__content flex column align-i-start justify-c-center"></div>

    </article>
</template>

<style scoped>

.interactionsPost {
    width: 250px;
}

.interactionsPost__content {
    background: url("@/assets/img/wallpaper.jpg") center no-repeat;
    background-size: cover;
    border-radius: var(--rounded-2);
    height: 300px;
    transition: transform 0.2s;
    cursor: pointer;
}

.interactionsPost__content:hover {
    transform: scale(1.05);
}

</style>
<script>
export default {
    name: "InteractionsPost"
}
</script>