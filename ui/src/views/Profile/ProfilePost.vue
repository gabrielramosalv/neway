<template>
    <article class="profilePost">
        <ProfilePopup>

        </ProfilePopup>
    </article>
</template>

<style scoped>

.profilePost {
    background: url("@/assets/img/wallpaper.jpg") center no-repeat;
    background-size: cover;
    border-radius: var(--rounded-2);
    width: 350px;
    aspect-ratio: 1/1;
}
</style>
<script>


import ProfilePopup from "@/views/Profile/ProfilePopup.vue";

export default {
    name: "ProfilePost",
    components: {ProfilePopup}
}
</script>