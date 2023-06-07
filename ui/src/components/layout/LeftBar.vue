<template>
    <nav class="left-bar flex column gap-1">
        <h2 class="left-bar__logo">Neway</h2>
        <div class="flex column height-full">
            <router-link class="left-bar__button home flex align-i-center gap-1 width-full" :to="Paths.TIMELINE">
                <span class="left-bar__button__image"></span>
                <span>Início</span>
            </router-link>
            <router-link class="left-bar__button interaction flex align-i-center gap-1 width-full"
                         :to="Paths.INTERACTIONS">
                <span class="left-bar__button__image"></span>
                <span>Interações</span>
            </router-link>
            <button class="left-bar__button publish flex align-i-center gap-1 width-full">
                <span class="left-bar__button__image"></span>
                <span>Publicar</span>
                <DoPostPopup :user="user" @message="$emit('message', $event)" @new-post="$emit('new-post')"/>
            </button>
            <button class="left-bar__button exit flex align-i-center gap-1 width-full" @click="exit">
                <span class="left-bar__button__image"></span>
                <span>Encerrar sessão</span>
            </button>
        </div>
    </nav>
</template>

<style scoped>

.left-bar {
    left: 0;
    position: fixed;
    height: 100vh;
    width: 300px;
    padding: var(--ratio-1);
    border-right: var(--trace);
    background-color: white;
}

.left-bar__logo {
    font-size: 2.5em;
    color: var(--color-main-1);
    padding: var(--ratio-1);
    user-select: none;
}

.left-bar__button {
    color: var(--color-text-main-1);
    border-radius: var(--rounded-2);
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: var(--ratio-1);
}

.left-bar__button:hover {
    background-color: var(--color-grey-1);
}

.left-bar__button__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 20px;
    aspect-ratio: 1/1;
}

.left-bar__button.exit {
    margin-top: auto;
    color: var(--color-red-1);
}

.left-bar__button.interaction > .left-bar__button__image {
    background-image: url("@/assets/img/interactions-icon.svg");
}

.left-bar__button.exit > .left-bar__button__image {
    background-image: url("@/assets/img/exit-icon.svg");
}

.left-bar__button.home > .left-bar__button__image {
    background-image: url("@/assets/img/home-icon.svg");
    width: 23px;
}

.left-bar__button.publish > .left-bar__button__image {
    background-image: url("@/assets/img/publish-icon.svg");
}

</style>

<script>

import DoPostPopup from "@/components/DoPostPopup.vue";
import {User} from "@/services/user/User";
import {$system} from "@/global/system";
import {Paths} from "@/router/routes";
import router from "@/router";

export default {
    name: "LeftBar",
    components: {DoPostPopup},
    data() {
        return {
            user: User
        }
    },
    mounted() {
        const user = $system.getUser();
        if (user == null) {
            return;
        }
        this.user = user;
    },
    methods: {
        exit() {
            $system.removeUser();
            router.push(Paths.LOGIN);
        }
    },
    computed: {
        Paths() {
            return Paths
        }
    }
}
</script>