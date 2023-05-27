<template>
    <nav class="right-bar flex column align-i-start gap-1">
        <UserCard name="João Gomes" nickname="@mengudoprasempre" ratio="50px" border-color="var(--color-main-1)"/>
        <section class="flex column gap-1 width-full">
            <input type="search" class="right-bar__search" placeholder="Procure pessoas no Neway"/>
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
    right: 0;
    position: fixed;
    height: calc(100vh - calc(2 * var(--ratio-1)));
    width: 300px;
    padding: var(--ratio-1);
    border-left: 2px solid var(--color-grey-1);
}

.right-bar__search {
    border-radius: var(--rounded-2);
    font-weight: 700;
    background-color: transparent;
    border: 2px solid var(--color-grey-1);
    padding: var(--ratio-1);
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