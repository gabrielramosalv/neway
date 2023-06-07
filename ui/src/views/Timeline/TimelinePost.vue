<template>
    <article class="post flex column gap-1">
        <header class="post__header flex justify-c-between align-i-center width-full">
            <div class="flex align-i-center gap-1">
                <router-link :to="getProfileByNickname()">
                    <div class="post__header__user__photo pointer"></div>
                </router-link>
                <span class="post__header__user__name no-select">{{ user.nickname }}</span>
            </div>
            <span class="minor aside no-select">{{ this.getDateString }}</span>
        </header>

        <img class="post__content" alt="photo" v-if="hasImage" :src="post.image"/>

        <div :class="['post__bottom flex align-i-center justify-c-between width-full', !hasImage ? 'column'
         : 'gap-1']">
            <p :class="['post__bottom__text align-s-start no-select', hasImage ? 'caption' : 'content']">
                {{ post.text }}
            </p>
            <hr v-if="!hasImage" class="post__separator">
            <div class="flex align-s-end">
                <button :class="['post__interaction hang-loose flex gap-1_2 align-i-center', alreadyLiked ?
                'already-liked' : '']" @click="doLike">
                    <img :src="hangLooseIcon" alt="hang-loose-icon" ref="hangLooseIcon">
                    <span class="minor">{{ post.likes }}</span>
                </button>
                <button class="post__interaction save flex gap-1_2 all-center" @click="doSave">
                    <img :src="saveIcon" alt="save-icon" ref="saveIcon">
                </button>
            </div>
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

.post__content {
    min-height: var(--post-content-ratio);
    max-height: 550px;
    border-radius: var(--rounded-2);
    object-fit: cover;
    cursor: pointer;
}

.post__header__user__photo {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--color-grey-1);
    height: 35px;
    width: 35px;
    border-radius: 100%;
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

.post__interaction {
    cursor: pointer;
    border: none;
    height: var(--action-height);
    border-radius: var(--rounded-1);
    background-color: transparent;
    margin: 5px;
}

.post__interaction:hover {
    background-color: var(--color-grey-1);
}

.post__interaction.hang-loose {
    width: fit-content;
    padding: var(--action-side);
}

.post__interaction.save {
    width: var(--action-height);
}

.post__interaction > img {
    transition: transform 0.2s;
}

.post__interaction.hang-loose > img {
    width: 18px;
    aspect-ratio: 1/1;
}

.post__interaction.hang-loose.already-liked > img {
    mask-image: var(--color-main-1);
}

.post__interaction.save > img {
    width: 15px;
    aspect-ratio: 1/1;
}


</style>

<script>
import {User} from "@/services/user/User";
import {Post} from "@/services/post/Post";
import {Paths} from "@/router/routes";
import {$system} from "@/global/system";

export default {
    name: "TimelinePost",
    props: {
        user: User,
        post: Post
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
        getProfileByNickname() {
            return Paths.PROFILE.replace(":username", this.user.nickname);
        },
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
        hasImage() {
            return this.post.image != null;
        },
        hangLooseIcon() {
            return this.alreadyLiked ? this.hangLooseSvg : this.hangLooseInteractedSvg;
        },
        saveIcon() {
            return this.alreadySaved ? this.savedSvg : this.saveSvg;
        },
        getDateString() {
            const date = new Date(this.post.dateString);
            const formatedDay = date.getDay() >= 10 ? date.getDate() : `0${date.getDate()}`;
            const formatedMonth = date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`;
            const formatedHour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
            const formatedMinutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

            const today = new Date();
            if (today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear()) {
                if (today.getDate() === date.getDate()) {
                    return `Hoje às ${formatedHour}:${formatedMinutes}`
                } else if ((today.getDate() - date.getDate()) === 1) {
                    return `Ontem às ${formatedHour}:${formatedMinutes}`
                } else {
                    return `${formatedDay}/${formatedMonth} às ${formatedHour}:${formatedMinutes}`
                }
            } else {
                return `${formatedDay}/${formatedMonth}/${formatedHour} às ${formatedHour}:${formatedMinutes}`
            }
        }
    }
}
</script>

