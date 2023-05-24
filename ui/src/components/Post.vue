<template>
    <article class="post flex column gap-1">

        <header class="width-full">
            <div class="flex align-i-center gap-1">
                <div class="post__header__user__photo"></div>
                <span class="post__header__user__name">roberto</span>
            </div>
        </header>

        <div class="post__content flex column align-i-start justify-c-center">

        </div>

        <footer class="width-full">
            <div class="flex gap-1">
                <div class="post__footer__button"></div>
                <div class="post__footer__button"></div>
                <div class="post__footer__button"></div>
            </div>
        </footer>

        <div class="post__caption flex">
            <span class="post__caption__username">roberto</span>
            <span class="post__caption__content">Legenda</span>
        </div>

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

.post__caption {
    gap: calc(var(--ratio-1)*0.7);
}

.post__caption__username {
    font-weight: 600;
}

.post__footer__button {
    height: 35px;
    width: 35px;
    background-color: var(--color-grey-1);
    border-radius: 100%;
}


</style>

<script>
export default {
    name: "Post"
}
</script>

