<template>
    <div class="flex">
        <LeftBar/>
        <div class="interactions flex column align-i-center gap-2">

            <h1 class="interactions__title no-select title">Suas interações</h1>
            <div class="flex justify-c-center">
                <button @click="activeTab = 1"
                        :class="{'active': activeTab === 1}"
                        class="interactions__button bold aside">
                    Curtidas
                </button>
                <button @click="activeTab = 2"
                        :class="{'active': activeTab === 2}"
                        class="interactions__button bold aside">
                    Salvos
                </button>
            </div>

            <PostsContainer :posts="likedPosts" v-if="activeTab === 1"/>
            <PostsContainer :posts="savedPosts" v-if="activeTab === 2"/>
        </div>
    </div>
</template>

<style>

.interactions {
    margin-left: auto;
    height: 100vh;
    width: calc(100vw - 300px);
    padding: var(--ratio-2);
}

.interactions__title {
    color: var(--color-main-1);
}

.interactions__button {
    border: none;
    background: none;
    padding: var(--ratio-1);
    cursor: pointer;
    transition: color 0.2s;
}

.interactions__button.active {
    color: var(--color-main-1);
    border-bottom: 2px solid var(--color-main-1);
}

.interactions__posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 350px;
    grid-gap: var(--ratio-1);
    padding: 0 var(--ratio-2);
    padding-bottom: var(--ratio-2);
}

</style>

<script>
import LeftBar from "@/components/layout/LeftBar.vue";
import {$system} from "@/global/system";
import router from "@/router";
import {Paths} from "@/router/routes";
import {User} from "@/services/user/User";
import PostsContainer from "@/components/PostsContainer.vue";

export default {
    name: "Interactions",
    components: {PostsContainer, LeftBar},
    data() {
        return {
            activeTab: 1,
            likedPosts: [],
            savedPosts: [],
            user: new User()
        }
    },
    mounted() {
        const user = $system.getUser();
        if (user == null) {
            router.push(Paths.LOGIN);
            return;
        }
        this.user = user;
        this.likedPosts = $system.services.post.getAllLikedByUser(user);
        this.savedPosts = $system.services.post.getAllSavedByUser(user);
    }
}
</script>