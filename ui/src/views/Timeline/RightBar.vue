<template>
    <nav class="right-bar flex column align-i-start gap-1">
        <UserCard v-bind:user="user" ratio="50px" border-color="var(--color-main-1)"/>
        <section class="flex column gap-1 width-full">
            <TextField type="search" placeholder="Procure pessoas no Neway" v-model="usersSearch"/>
            <div class="right-bar__friends-list flex column">
                <UserCard v-for="user in users" v-bind:user="user" v-bind:key="user.id"/>
                <div class="right-bar__friends-list__fade"></div>
            </div>
        </section>
    </nav>
</template>

<style scoped>
.right-bar {
    right: 0;
    position: fixed;
    height: 100vh;
    width: 300px;
    padding: var(--ratio-1);
    border-left: var(--trace);
    background-color: white;
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

import UserCard from "@/views/Timeline/UserCard.vue";
import TextField from "@/components/base/TextField.vue";
import {$system} from "@/global/system";
import {User} from "@/services/user/User";

export default {
    name: "RightBar",
    data() {
        return {
            usersSearch: "",
            users: [],
            user: User
        }
    },
    mounted() {
        const user = $system.getUser();
        if (user == null) {
            return;
        }
        this.user = user;
        this.users = $system.services.user.getAllUnlessThisUser(this.user);
    },
    watch: {
        usersSearch(newValue) {
            this.users = $system.services.user.getAllByNameOrNicknameUnlessThisUser(newValue, this.user);
        }
    },
    components: {TextField, UserCard}
}
</script>