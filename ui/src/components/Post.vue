<template>
    <article class="post flex column gap-1">

        <header class="flex justify-c-between align-i-center width-full">
            <div class="flex align-i-center gap-1">
                <div class="post__header__user__photo"></div>
                <span class="post__header__user__name">roberto</span>
            </div>
            <span class="minor aside">às 14:00 em 25/05/2023</span>
        </header>

        <div class="post__content flex column align-i-start justify-c-center"></div>

        <footer class="flex row align-i-center justify-c-between width-full">
            <p class="post__caption__content">Legenda</p>
            <div class="flex gap-1">
                <div class="post__interaction"></div>
                <div class="post__interaction"></div>
            </div>
        </footer>


    </article>
</template>

<style scoped>

.post {
    width: 450px;
}

.post__content {
    background: url("@/assets/img/wallpaper.jpg") center no-repeat;
    background-size: cover;
    border-radius: var(--rounded-2);
}

.post__content {
    height: 450px;
    background-color: var(--color-grey-1);
}

.post__header__user__photo {
    background: url("@/assets/img/joao.jpg") center no-repeat;
    background-size: cover;
    height: 35px;
    width: 35px;
    border-radius: 100%;
}

.post__header__user__name {
    font-weight: 600;
}

.post__content__image {
}

.post__caption__content {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 160px;
}

.post__interaction {
    height: 35px;
    width: 35px;
    background-color: var(--color-grey-1);
    border-radius: 100%;
}

</style>

<script>
export default {
    name: "Post",
}
</script>

