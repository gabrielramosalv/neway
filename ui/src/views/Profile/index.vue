<template>

    <div class="profile flex column align-i-center">
        <LeftBar/>
        <div class="profile__header flex align-i-center ">
            <article class="profile__user-card flex align-i-center gap-2">
                <div class="profile__user-card__photo"></div>
                <div class="flex column align-i-start gap-1_2">
                    <text-field class="t-s-title" placeholder="Nome" maxlength="150" model-value="oi" border="none"/>
                    <text-field class="t-c-aside" placeholder="Apelido" maxlength="50" border="none"/>
                    <text-field class="profile__header__biografy" placeholder="Escreva sobre você..."
                                type="textarea" maxlength="150" rows="5" border="none"/>
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
    background-color: var(--color-grey-1);
}

.profile__header__quatity__post {
    border-radius: var(--rounded-1);
    padding: var(--ratio-1) 40px;
    background-color: var(--color-grey-1);
}

.profile__header__quatity {
    font-weight: 600;
    font-size: 17px;
}

.profile__header__biografy {
    width: 300px;
}

.profile__posts {
    flex-wrap: wrap;
    justify-content: left;
    border-top: 2px solid var(--color-grey-2);
    padding: var(--ratio-2) 0;
    width: calc(1050px + var(--ratio-1));
}
</style>
import LeftBar from "@/layout/LeftBar.vue";
<script>
import LeftBar from "@/components/layout/LeftBar.vue";
import profilePost from "@/views/Profile/ProfilePost.vue";
import textField from "@/components/base/TextField.vue";
//import {ServiceManager} from "@/services/ServiceManager";

export default {
    name: "Profile",
    components: {LeftBar, profilePost, textField},

    /*mounted() {
        let user = ServiceManager.getInstance().user.getByNickname(this.$route.params.username)
        console.log(user)
    }*/
}

</script>