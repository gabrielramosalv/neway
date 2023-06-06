<template>
    <article class="interactions-post flex column width-full height-full">
        <div v-if="!hasImage" class="interactions-post__text width-full height-full flex align-i-center">
            <p class="bold title">
                {{ post.text }}
            </p>
        </div>
        <img v-else class="interactions-post__image width-full height-full" v-bind:src="post.image" alt="post-image"/>
        <ProfilePopup/>
    </article>
</template>

<style scoped>

.interactions-post {
    cursor: pointer;
    transition: transform 0.2s;
}

.interactions-post:hover {
    transform: scale(1.02);
}

.interactions-post__text {
    border: var(--trace);
    border-radius: var(--rounded-2);
    padding: var(--ratio-1);
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
}

.interactions-post__image {
    border-radius: var(--rounded-2);
    object-fit: cover;
}

</style>
<script>
import ProfilePopup from "@/views/Profile/ProfilePopup.vue";
import {Post} from "@/services/post/Post";

export default {
    name: "InteractionsPost",
    components: {ProfilePopup},
    props: {
        post: Post
    },
    computed: {
        hasImage() {
            return this.post.image != null;
        }
    }
}
</script>