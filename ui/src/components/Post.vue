<template>
    <article class="post flex column">
        <div v-if="!hasImage" class="post__text width-full height-full flex align-i-center">
            <p class="bold title">
                {{ post.text }}
            </p>
        </div>
        <img v-else class="post__image width-full height-full" :src="post.image" alt="post-image"/>
        <PostPopup :post="post" :user="postUser" @post-action="$emit('post-action')"/>
    </article>
</template>

<style scoped>

.post {
    cursor: pointer;
    transition: transform 0.2s;
    height: v-bind(height);
    width: v-bind(width);
    aspect-ratio: 1/1;
}

.post:hover {
    transform: scale(1.01);
}

.post__text {
    border: var(--trace);
    border-radius: var(--rounded-2);
    padding: var(--ratio-1);
    overflow: hidden;
    background-color: var(--color-main-1);
}

.post__text > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: break-spaces;
    color: white;
}

.post__image {
    border-radius: var(--rounded-2);
    object-fit: cover;
}

</style>
<script>
import PostPopup from "@/components/PostPopup.vue";
import {Post} from "@/services/post/Post";
import {$system} from "@/global/system";
import {User} from "@/services/user/User";

export default {
    name: "Post",
    components: {PostPopup},
    props: {
        post: Post,
        height: {
            default: "inherit",
            type: String
        },
        width: {
            default: "inherit",
            type: String
        },
        user: {
            default: null,
            type: User
        }
    },
    data() {
        return {
            postUser: new User()
        }
    },
    mounted() {
        if (this.user == null) {
            this.postUser = $system.services.user.getOne(this.post.userId);
        } else {
            this.postUser = this.user;
        }
    },
    computed: {
        hasImage() {
            return this.post.image != null;
        }
    }
}
</script>