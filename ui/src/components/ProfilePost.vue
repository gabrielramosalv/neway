<template>
    <article class="profilePost flex column gap-1">

        <header class="width-full"></header>

        <div class="profilePost__content flex column align-i-start justify-c-center"></div>

    </article>
</template>

<style scoped>

.profilePost {
    width: 350px;
}

.profilePost__content {
    background: url("@/assets/img/wallpaper.jpg") center no-repeat;
    background-size: cover;
    border-radius: var(--rounded-2);
}

.profilePost__content {
    height: 350px;
    background-color: var(--color-grey-1);
}

</style>
<script>
export default {
    name: "ProfilePost"
}
</script>