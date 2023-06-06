<template>

    <div class="profile flex column align-i-center">
        <LeftBar/>
        <div class="profile__header flex align-i-center ">
            <article class="profile__user-card flex align-i-center gap-2">
                <div class="profile__user-card__photo"></div>
                <div class="flex column align-i-start gap-1_2">
                    <div class="flex gap-2">
                    <text-field class="t-s-title" placeholder="Nome" maxlength="150" model-value= "user" border="none"/>
                    <button @click="changeTitle" class="profile__button">{{titleButton}}</button>
                    </div>
                    <text-field class="t-c-aside" placeholder="Apelido" maxlength="50" border="none"/>
                    <text-field class="profile__header__biografy" placeholder="Escreva sobre você..."
                                type="textarea" maxlength="150" v-bind:rows="5" border="none"/>
                </div>
            </article>
            <div class="profile__header__quatity flex gap-2">
                <span class="profile__header__quatity__friends">Amigos: {{ 3 }}</span>
                <span class="profile__header__quatity__post">Publicações: {{ 0 }}</span>
            </div>
        </div>
        <div class="profile__posts flex justify-c-center gap-1_2">
            <profile-post/>
            <profile-post/>
        </div>
    </div>
</template>

<style scoped>

.profile__button{
    border-radius: var(--rounded-1);
    padding: var(--ratio-1) 40px;
    background-color: white;
    border: 2px solid var(--color-main-3);
    font-weight: 600;
}
.profile__button:hover {
    background-color: var(--color-main-3); color: white;
    transition: 0.3s;
    cursor: pointer;
}
.profile__button:focus{
    background-color: var(--color-main-3); color: white;
}
.profile {
    margin-left: 300px;
    height: 100vh;
    width: calc(100vw - 300px);
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
    gap: 70px;
    padding: var(--ratio-2);
}

.profile__header__quatity__friends {
    border-radius: var(--rounded-1);
    padding: 15px 40px;
}

.profile__header__quatity__post {
    border-radius: var(--rounded-1);
    padding: var(--ratio-1) 40px;

}

.profile__header__quatity {
    font-weight: 600;
    font-size: 18px;
}

.profile__header__biografy {
    width: 300px;
}

.profile__posts {
    flex-wrap: wrap;
    justify-content: left;
    border-top: var(--trace);
    padding: var(--ratio-2) 0;
    width: calc(1050px + var(--ratio-1));
}
</style>

<script>

import LeftBar from "@/components/layout/LeftBar.vue";
import profilePost from "@/views/Profile/ProfilePost.vue";
import textField from "@/components/base/TextField.vue";

export default {
    name: "Profile",
    components: {LeftBar, profilePost, textField},

    data() {
        return {
            titleButton: "Seguir +"
        };
    },

    merhods: {
        changeTitle(){
            this.titleButton = "Seguindo";
        }
    }
}
</script>