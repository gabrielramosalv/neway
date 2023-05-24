<template>
    <nav class="right-bar flex column align-i-start gap-1">
        <UserCard name="João Gomes" nickname="@mengudoprasempre"/>
        <section class="flex column gap-1 width-full">
            <h3 class="right-bar__friends-title">Amigos</h3>
            <div class="right-bar__friends-list flex column">

                <UserCard v-for="(user, index) in users"
                          v-bind:nickname="user.nickname"
                          v-bind:name="user.name"
                          v-bind:key="index"
                />

                <div class="right-bar__friends-list__fade"></div>
            </div>
        </section>
    </nav>
</template>

<style scoped>
.right-bar {
    right: var(--ratio-1);
    position: fixed;
    height: calc(100vh - calc(2 * var(--ratio-1)));
    width: 300px;
}

.right-bar__friends-title {
    margin-left: var(--ratio-1);
    font-size: 1.2em;
    line-height: 1;
}

.right-bar__friends-list {
    overflow-y: auto;
    height: calc(100vh - 50px - calc(6 * var(--ratio-1)) - 1.2em);
}

.right-bar__friends-list__fade {
    bottom: 0;
    width: 100%;
    height: 25px;
    position: absolute;
    background: linear-gradient(transparent, white);
}

</style>

<script>

import UserCard from "@/components/UserCard.vue";

export default {
    name: "RightBar",
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.users = [
            {
                name: "Roberto Carlos", nickname: "@reidopop"
            },
            {
                name: "Catarina Furacão", nickname: "@rebolaateochao"
            },
            {
                name: "Jorge", nickname: "@jorgete"
            }
        ];
    },
    components: {UserCard}
}
</script>