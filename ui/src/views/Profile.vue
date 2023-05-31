<template>

    <div class="profile flex column align-i-center">

        <div class="profile__leftbar">
            <LeftBar/>
        </div>

        <div class="profile__header flex align-i-center ">

                <article class="profile__user-card flex align-i-center gap-2">

                    <div class="profile__user-card__photo"></div>

                    <div class="flex column align-i-start">
                        <h3 class="profile__user-card__name">{{"Joao Gomes"}}</h3>
                        <span class="profile__user-card__nickname">{{ "@fogudoForever"}}</span>
                        <text-field class="profile__header__biografy flex" placeholder="Escreva sobre você..."  maxlength="200"/>
                    </div>
                </article>

            <div class="profile__header__quatity flex gap-2 ">
                <span class="profile__header__quatity__frinds">Amigos: {{3}}</span>
                <span class="profile__header__quatity__post">Publicações: {{0}}</span>
            </div>
        </div>

        <div class="profile__separatorBar flex align-i-center"></div>

        <div class="profile__posts flex justify-c-center gap-1">
            <profile-post/>
            <profile-post/>
            <profile-post/>
            <profile-post/>
            <profile-post/>
        </div>
    </div>
</template>

<style scoped>

.profile{
    margin-left: 300px;
    height: 100vh;
    width:calc(100vw - 300px);
}
.profile__user-card{
    border-radius: var(--rounded-1);
    padding: var(--ratio-1);
    user-select: none;
}
.profile__user-card__photo {
    height: v-bind(ratio);
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background: url("@/assets/img/joao.jpg") center no-repeat;
    background-size: 100%;
}
.profile__user-card__name {
    font-size: 2em;
    font-weight: 500;
    margin-top: 100px;
}
.profile__user-card__nickname {
    font-size: 1em;
    color: var(--color-text-aside-1);
}
.profile__header {
    gap: 170px;
    padding: var(--ratio-2);
}
.profile__header__quatity__frinds{
    border-radius: var(--rounded-1);
    padding: var(--ratio-1);
    background-color: var(--color-grey-1);
}
.profile__header__quatity__post{
    border-radius: var(--rounded-1);
    padding: var(--ratio-1);
    background-color: var(--color-grey-1);
}
.profile__header__quatity{
    font-weight: 600;
    font-size: 17px;
}
.profile__header__biografy{
    margin-top: var(--ratio-2);
    width: 300px;
}
.profile__posts{
    flex-wrap: wrap;
    justify-content: left;
    width: 1095px;
    border-top: 2px solid var(--color-grey-1);
}
</style>
import LeftBar from "@/layout/LeftBar.vue";
<script>
import LeftBar from "@/layout/LeftBar.vue";
import profilePost from "@/components/ProfilePost.vue";
import textField from "@/components/TextField.vue";
export default {
    name: "Profile",
    components: {LeftBar, profilePost, textField},
    props: {
        name: String,
        nickname: String,
        ratio: {
            default: "230px",
            type: String
        }
    },
}

</script>