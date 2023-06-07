<template>
    <div class="flex">
        <LeftBar/>
        <div class="profile flex column align-i-center gap-2">
            <div class="profile__header flex align-i-center width-full">
                <article class="profile__user-card flex align-i-center gap-2">
                    <div class="profile__user-card__photo"></div>
                    <div class="flex column align-i-start gap-1">
                        <h2 class="title">
                            <span class="aside">@ </span>
                            <span>{{ profileUser.nickname }}</span>
                        </h2>
                        <div class="flex column" :class="{'gap-1_2': isProfileFromLoggedUser}">
                            <text-field placeholder="Nome" maxlength="150"
                                        :border="isProfileFromLoggedUser ? 'var(--trace)' : 'none'"
                                        v-model="profileUser.name"
                                        :readyonly="!isProfileFromLoggedUser"
                                        :formatter="User.nameFormatter"
                                        style="width: 300px"/>
                            <text-field class="profile__header__biografy"
                                        :placeholder="isProfileFromLoggedUser ? 'Escreva sobre você...' : user.bibliography"
                                        type="textarea" maxlength="150" :rows="5"
                                        v-model="profileUser.bibliography" :readyonly="!isProfileFromLoggedUser"
                                        :border="isProfileFromLoggedUser ? 'var(--trace)' : 'none'"/>
                        </div>
                    </div>
                </article>
                <div class="headline flex column align-i-center gap-2 width-full">
                    <div class="flex align-i-center justify-c-center gap-2">
                        <span class="flex gap-1_2">
                            <span class="main">{{ followingQuantity }}</span>
                            <span>seguidores</span>
                        </span>
                        <span class="flex gap-1_2">
                            <span class="main">{{ posts.length }}</span>
                            <span>publicações</span>
                        </span>
                    </div>
                    <Button
                            :content="isFollowed ? 'Seguindo' : 'Seguir +'"
                            :bg-color="isFollowed ? 'var(--color-main-1)' : 'white'"
                            border="1px solid var(--color-main-1)"
                            :text-color="isFollowed ? 'white' : 'var(--color-main-1)'"
                            class="profile__button"
                            @click="follow"
                            v-if="!isProfileFromLoggedUser"
                    />
                </div>
            </div>
            <PostsContainer :posts="posts"/>
        </div>
    </div>
</template>

<style scoped>

.profile__button {
    transition: 0.2s;
}

.profile__button:hover {
    background-color: var(--color-main-3);
    color: white;
}

.profile {
    margin-left: 300px;
    width: calc(100vw - 300px);
    padding: calc(2 * var(--ratio-2));
}

.profile__user-card {
    border-radius: var(--rounded-1);
    user-select: none;
}

.profile__user-card__photo {
    height: 250px;
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background: url("@/assets/img/joao.jpg") center no-repeat;
    background-size: 100%;
}

.profile__header {
    border-bottom: var(--trace);
    padding-bottom: var(--ratio-2);
}

.profile__header__biografy {
    width: 300px;
}
</style>

<script>

import LeftBar from "@/components/layout/LeftBar.vue";
import textField from "@/components/base/TextField.vue";
import {$system} from "@/global/system";
import router from "@/router";
import {Paths} from "@/router/routes";
import {User} from "@/services/user/User";
import PostsContainer from "@/components/PostsContainer.vue";
import Button from "@/components/base/Button.vue";

export default {
    name: "Profile",
    components: {Button, PostsContainer, LeftBar, textField},
    data() {
        return {
            profileUser: new User(),
            user: new User(),
            isFollowed: false,
            posts: []
        }
    },
    mounted() {
        const user = $system.getUser();
        if (user == null) {
            router.push(Paths.LOGIN);
            return;
        }
        this.user = user;
        const byNickname = $system.services.user.getByNickname(this.$route.params.username);
        if (byNickname == null) {
            router.push(Paths.LOGIN);
            return;
        }
        this.profileUser = byNickname;
        this.isFollowed = this.user.followIds.includes(this.profileUser.id);
        this.posts = $system.services.post.getAllByUser(this.profileUser);
    },
    methods: {
        follow() {
            this.isFollowed = $system.services.user.doFollow(this.user, this.profileUser);
        }
    },
    computed: {
        User() {
            return User
        },
        isProfileFromLoggedUser() {
            return this.user.id === this.profileUser.id;
        },
        followingQuantity() {
            return this.profileUser.followIds.length;
        }
    }
}
</script>