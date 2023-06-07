<template>
    <div class="posts-container width-full" :class=" {'flex justify-c-center': posts.length === 0}"
         :style="templateColumns">
        <post v-for="post in posts" :key="post.id" :post="post" width="100%" height="100%"/>
        <h4 v-if="posts.length === 0" class="aside title">Não temos nada por aqui :/</h4>
    </div>
</template>

<style scoped>

.posts-container {
    display: grid;
    grid-gap: var(--ratio-1);
}

</style>

<script>

import Post from "@/components/Post.vue";

export default {
    name: "PostsContainer",
    components: {Post},
    props: {
        posts: [],
        columns: {
            default: 3,
            type: Number
        }
    },
    computed: {
        templateColumns() {
            return `grid-template-columns: repeat(${this.columns}, 1fr)`
        }
    }
}
</script>
