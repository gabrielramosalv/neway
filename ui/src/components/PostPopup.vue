<template>
    <popup :header="!hasImage">
        <template v-slot:content>
            <div class="post-popup flex height-full gap-1">
                <img v-if="hasImage" class="post-popup__image" :src="post.image" alt="post-image">
                <div class="flex column gap-1 justify-c-between">
                    <div class="flex column gap-1">
                        <div class="flex align-i-center justify-c-between">
                            <div class="flex gap-1_2 align-i-center">
                                <div class="post-popup__content__photo"></div>
                                <span class="bold">{{ user.nickname }}</span>
                            </div>

                        </div>
                        <p class="post-popup__content__text bold headline">{{ post.text }}</p>
                    </div>
                    <div class="post-popup__content__interactions flex align-i-center justify-c-between width-full">
                        <span class="aside minor">{{ post.getDateString() }}</span>
                        <PostInteractions :post="post"/>
                    </div>
                </div>
            </div>
        </template>
    </popup>
</template>


<style scoped>

.post-popup {
    height: 600px;
}

.post-popup__image {
    object-fit: contain;
    max-width: 700px;
    background-color: var(--color-grey-1);
    border-radius: var(--rounded-1);
}

.post-popup__content__interactions {
    border-top: var(--trace);
    padding-top: 5px;
}

.post-popup__content__interactions > div {
    margin: 0;
}

.post-popup__content__photo {
    border-radius: var(--rounded-2);
    padding: var(--ratio-1);
    width: 40px;
    user-select: none;
    transition: transform 0.3s;
}

.post-popup__content__photo {
    height: v-bind(ratio);
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background: url("@/assets/img/user-default-photo.svg") center no-repeat var(--color-grey-1);
    background-size: 50%;
}

.post-popup__content__text {
    white-space: break-spaces;
    width: 400px;
}

</style>
<script>
import Popup from "@/components/base/Popup.vue";
import {Post} from "@/services/post/Post";
import {User} from "@/services/user/User";
import PostInteractions from "@/components/PostInteractions.vue";

export default {
    name: "PostPopup",
    components: {PostInteractions, Popup},
    props: {
        post: Post,
        user: User
    },
    data() {
        return {
            currentUser: null
        }
    },
    computed: {
        hasImage() {
            return this.post.image != null;
        }
    }
}
</script>