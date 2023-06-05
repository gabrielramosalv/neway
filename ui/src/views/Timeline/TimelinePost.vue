<template>
    <article class="post flex column gap-1">
        <header class="flex justify-c-between align-i-center width-full">
            <div class="flex align-i-center gap-1">
                <router-link v-bind:to="getProfileByNickname()">
                    <div class="post__header__user__photo pointer"></div>
                </router-link>
                <span class="post__header__user__name no-select">{{ user.nickname }}</span>
            </div>
            <span class="t-s-minor t-c-aside no-select">{{ this.getDateString }}</span>
        </header>

        <img class="post__content" alt="photo" v-if="hasImage" v-bind:src="post.image"/>

        <footer v-bind:class="['flex align-i-center justify-c-between width-full', !hasImage ? 'column' : 'gap-1']">
            <p class="post__caption align-s-start" :style="hasImage ? 'margin: auto 0;' : ''">
                {{ post.text }}
            </p>
            <hr v-if="!hasImage" class="post__separator">
            <div class="flex align-s-end">
                <button :class="['post__interaction hang-loose flex gap-1_2 align-i-center', alreadyLiked ?
                'already-liked' : '']" @click="doLike">
                    <img :src="hangLooseIcon" alt="hang-loose-icon" ref="hangLooseIcon">
                    <span class="t-s-minor">{{ post.likes }}</span>
                </button>
                <button class="post__interaction save flex gap-1_2 all-center">
                    <img src="@/assets/img/save-icon.svg" alt="save-icon">
                </button>
            </div>
        </footer>
    </article>
</template>

<style scoped>

.post {
    --post-content-ratio: calc(420px + 2vw);
    width: var(--post-content-ratio);
}

.post__content {
    height: var(--post-content-ratio);
    background-color: var(--color-grey-1);
    border-radius: var(--rounded-2);
    object-fit: contain;
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

.post__caption {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.post__separator {
    height: 1px;
    width: 100%;
    background-color: var(--color-grey-2);
    border: none;
    margin-top: var(--ratio-1);
    margin-bottom: calc(var(--ratio-1) / 2);
}

.post__interaction {
    cursor: pointer;
    border: none;
    height: var(--action-height);
    border-radius: var(--rounded-total);
    background-color: transparent;
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

.post__interaction.hang-loose > img {
    width: 18px;
    aspect-ratio: 1/1;
    transition: transform 0.2s;
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
            currentUser: new User(),
            alreadyLiked: false,
            alreadySaved: false,
            likedIcon: require('@/assets/img/hang-loose-interacted-icon.svg'),
            likeIcon: require('@/assets/img/hang-loose-icon.svg')
        }
    },
    mounted() {
        this.currentUser = $system.getUser();
        if (this.currentUser.likedPostIds.includes(this.post.id)) {
            this.alreadyLiked = true;
        }
        if (this.currentUser.savedPostIds.includes(this.post.id)) {
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
            this.alreadyLiked = $system.services.post.doLike(this.post, this.user);
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
    computed: {
        hasImage() {
            return this.post.image != null;
        },
        hangLooseIcon() {
            return this.alreadyLiked ? this.likedIcon : this.likeIcon;
        },
        getDateString() {
            const date = new Date(this.post.dateString);
            const formatedDay = date.getDay() > 9 ? date.getDate() : `0${date.getDate()}`;
            const formatedMonth = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;

            const today = new Date();
            if (today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear()) {
                if (today.getDate() === date.getDate()) {
                    return `Hoje às ${date.getHours()}:${date.getMinutes()}`
                } else if ((today.getDate() - date.getDate()) === 1) {
                    return `Ontem às ${date.getHours()}:${date.getMinutes()}`
                } else {
                    return `${formatedDay}/${formatedMonth} às ${date.getHours()}:${date.getMinutes()}`
                }
            } else {
                return `${formatedDay}/${formatedMonth}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`
            }
        }
    }
}
</script>

