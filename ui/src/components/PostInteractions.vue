<template>
    <div class="post-interactions flex align-s-end">
        <button :class="['post-interaction__interaction hang-loose flex gap-1_2 align-i-center', alreadyLiked ?
                'already-liked' : '']" @click="doLike">
            <img :src="hangLooseIcon" alt="hang-loose-icon" ref="hangLooseIcon">
            <span class="minor">{{ post.likes }}</span>
        </button>
        <button class="post-interaction__interaction save flex gap-1_2 all-center" @click="doSave">
            <img :src="saveIcon" alt="save-icon" ref="saveIcon">
        </button>
    </div>
</template>

<style scoped>

.post-interactions {
    margin: 5px;
}

.post-interaction__interaction {
    cursor: pointer;
    border: none;
    height: var(--action-height);
    border-radius: var(--rounded-1);
    background-color: transparent;
}

.post-interaction__interaction:hover {
    background-color: var(--color-grey-1);
}

.post-interaction__interaction.hang-loose {
    width: fit-content;
    padding: var(--action-side);
}

.post-interaction__interaction.save {
    width: var(--action-height);
}

.post-interaction__interaction > img {
    transition: transform 0.2s;
}

.post-interaction__interaction.hang-loose > img {
    width: 18px;
    aspect-ratio: 1/1;
}

.post-interaction__interaction.hang-loose.already-liked > img {
    mask-image: var(--color-main-1);
}

.post-interaction__interaction.save > img {
    width: 15px;
    aspect-ratio: 1/1;
}
</style>

<script>
import {User} from "@/services/user/User";
import {$system} from "@/global/system";

export default {
    name: "PostInteractions",
    props: {
        post: User
    },
    data() {
        return {
            alreadyLiked: false,
            alreadySaved: false,
            hangLooseSvg: require('@/assets/img/hang-loose-interacted-icon.svg'),
            hangLooseInteractedSvg: require('@/assets/img/hang-loose-icon.svg'),
            saveSvg: require('@/assets/img/save-icon.svg'),
            savedSvg: require('@/assets/img/save-interacted-icon.svg')
        }
    },
    mounted() {
        const user = $system.getUser();
        if (user == null) {
            return;
        }
        this.alreadyLiked = user.likedPostIds.includes(this.post.id);
        this.alreadySaved = user.savedPostIds.includes(this.post.id);
    },
    unmounted() {
        let id = window.setTimeout(function () {
            //
        }, 0);
        while (id--) {
            window.clearTimeout(id);
        }
    },
    computed: {
        hangLooseIcon() {
            return this.alreadyLiked ? this.hangLooseSvg : this.hangLooseInteractedSvg;
        },
        saveIcon() {
            return this.alreadySaved ? this.savedSvg : this.saveSvg;
        },
    },
    methods: {
        doLike() {
            if (!this.alreadyLiked) {
                this.doLikeAnimation();
            }
            this.alreadyLiked = $system.services.post.doLike(this.post, $system.getUser());
        },
        doSave() {
            if (!this.alreadySaved) {
                this.doSaveAnimation();
            }
            this.alreadySaved = $system.services.post.doSave(this.post, $system.getUser());
        },
        doSaveAnimation() {
            this.$refs.saveIcon.style.transform = "rotate(10deg)";
            setTimeout(() => {
                this.$refs.saveIcon.style.transform = "rotate(-10deg)";
                setTimeout(() => {
                    this.$refs.saveIcon.style.removeProperty("transform");
                }, 200);
            }, 200);
        },
        doLikeAnimation() {
            const SCALE = "scale(1.2) translateY(-10%)";
            this.$refs.hangLooseIcon.style.transform = SCALE;
            setTimeout(() => {
                this.$refs.hangLooseIcon.style.transform = SCALE + " rotate(-20deg)";
                setTimeout(() => {
                    this.$refs.hangLooseIcon.style.transform = SCALE + " rotate(20deg)";
                    setTimeout(() => {
                        this.$refs.hangLooseIcon.style.transform = SCALE + " rotate(-20deg)";
                        setTimeout(() => {
                            this.$refs.hangLooseIcon.style.transition = "transform 0.6s";
                            this.$refs.hangLooseIcon.style.removeProperty("transform");
                            setTimeout(() => {
                                this.$refs.hangLooseIcon.style.removeProperty("transition");
                            }, 600);
                        }, 200);
                    }, 200)
                }, 200);
            }, 50);
        }
    }
}
</script>