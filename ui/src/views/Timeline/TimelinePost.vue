<template>
    <article class="post flex column gap-1">
        <header class="post__header flex justify-c-between align-i-center width-full">
            <div class="flex align-i-center gap-1">
                <router-link :to="getProfileByNickname()">
                    <div class="post__header__user__photo pointer"></div>
                </router-link>
                <span class="post__header__user__name no-select">{{ user.nickname }}</span>
            </div>
            <span class="minor aside no-select">{{ post.getDateString() }}</span>
        </header>

        <Post v-if="post.image != null" :post="post" :user="user" height="calc(425px + 2vw)"/>

        <div :class="['post__bottom flex align-i-center justify-c-between width-full', !hasImage ? 'column'
         : 'gap-1']">
            <p :class="['post__bottom__text align-s-start no-select', hasImage ? 'caption' : 'content']">
                {{ post.text }}
            </p>
            <hr v-if="!hasImage" class="post__separator">
            <PostInteractions :post="post"/>
        </div>
    </article>
</template>

<style scoped>

.post {
    --post-content-ratio: calc(425px + 2vw);
    width: var(--post-content-ratio);
}

.post__bottom {
    border-radius: var(--rounded-2);
    border: var(--trace);
}

.post__header__user__photo {
    background: url("@/assets/img/user-default-photo.svg") center no-repeat var(--color-grey-1);
    background-size: 50%;
    height: 35px;
    width: 35px;
    border-radius: var(--rounded-total);
}

.post__header__user__name {
    font-weight: 600;
}

.post__bottom__text {
    display: block;
}

.post__bottom__text.content {
    margin: var(--ratio-1);
    line-height: 1.5;
    line-break: anywhere;
}

.post__bottom__text.caption {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: auto 0 auto 20px;
}

.post__separator {
    height: 1px;
    width: 100%;
    background-color: var(--color-grey-2);
    border: none;
}


</style>

<script>
import {User} from "@/services/user/User";
import {Paths} from "@/router/routes";
import {$system} from "@/global/system";
import Post from "@/components/Post.vue";
import PostInteractions from "@/components/PostInteractions.vue";
import {getDateString} from "@/global/util/text";

export default {
    name: "TimelinePost",
    components: {PostInteractions, Post},
    props: {
        user: User,
        post: Post
    },
    mounted() {
        const currentUser = $system.getUser();
        if (currentUser == null) {
            return;
        }
        if (currentUser.likedPostIds.includes(this.post.id)) {
            this.alreadyLiked = true;
        }
        if (currentUser.savedPostIds.includes(this.post.id)) {
            this.alreadySaved = true;
        }
    },
    methods: {
        getDateString,
        getProfileByNickname() {
            return Paths.PROFILE.replace(":username", this.user.nickname);
        }
    },
    computed: {
        hasImage() {
            return this.post.image != null;
        }
    }
}
</script>

