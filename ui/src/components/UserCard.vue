<template>
    <article class="user-card flex align-i-center gap-1">
        <div class="user-card__photo"></div>
        <div class="flex column align-i-start">
            <h3 class="user-card__name">Roberto Carlos</h3>
            <span class="user-card__nickname">@roberto</span>
        </div>
    </article>
</template>

<style scoped>

.user-card {
    border-radius: var(--rounded-2);
    padding: var(--ratio-1);
    width: 100%;
    cursor: pointer;
    user-select: none;
    transition: transform 0.3s;
}

.user-card:active {
    transform: scale(0.97);
}

.user-card__name  {
    font-size: 1em;
    font-weight: 600;
}

.user-card__nickname {
    color: var(--color-text-aside-1);
}

.user-card:hover {
    background-color: var(--color-grey-1);
}

.user-card__photo {
    height: 50px;
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background: url("@/assets/img/joao.jpg") center no-repeat;
    background-size: 100%;
}

</style>

<script>
export default {

}
</script>