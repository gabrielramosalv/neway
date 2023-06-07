<template>
    <popup :header="true" ref="profilePopup">
        <template v-slot:content>
            <div class="post-popup">
                <div class="flex column">
                    <img v-if="hasImage" class="post-popup__image" :src="post.image" alt="post-image">
                    <div class="post-popup__interactions">
                        <div class="post-popup__interactions__user flex align-i-center gap-1_2">
                            <div class="post-popup__card__photo"></div>
                            <h3 class="post-popup-card__name t-w-bold">{{ user.nickname }}</h3>
                            <span>{{ post.text }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </popup>
</template>


<style scoped>

.post-popup__image {
    height: 500px;
    width: 900px;
}

.post-popup__interactions {
    margin-top: 20px;
    height: auto;
    width: 400px;
}

.post-popup__card__photo {
    border-radius: var(--rounded-2);
    padding: var(--ratio-1);
    width: 40px;
    user-select: none;
    transition: transform 0.3s;

}

.post-popup-card__name {
    font-size: 1em;
}

.post-popup__card__photo {
    height: v-bind(ratio);
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background: url("@/assets/img/joao.jpg") center no-repeat;
    background-size: 100%;
}

</style>
<script>
import Popup from "@/components/base/Popup.vue";
import {Post} from "@/services/post/Post";
import {User} from "@/services/user/User";

export default {
    name: "PostPopup",
    components: {Popup},
    props: {
        post: Post,
        user: User
    },
    computed: {
        hasImage() {
            return this.post.image != null;
        }
    }
}
</script>