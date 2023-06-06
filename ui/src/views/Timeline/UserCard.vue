<template>
    <router-link :to="profileLink" class="user-card flex align-i-center gap-1">
        <div class="user-card__photo"></div>
        <div class="flex column align-i-start">
            <h4 class="user-card__name">{{ resumedName }}</h4>
            <span class="user-card__nickname">{{ user.nickname }}</span>
        </div>
    </router-link>
</template>

<style scoped>

.user-card {
    border-radius: var(--rounded-2);
    padding: var(--ratio-1);
    width: 100%;
    cursor: pointer;
    user-select: none;
    transition: transform 0.3s;
    color: var(--color-text-main-1);
}

.user-card:active {
    transform: scale(0.97);
}

.user-card__name {
    font-size: 1em;
    font-weight: 600;
}

.user-card__nickname {
    color: var(--color-text-aside-1);
}

.user-card:hover {
    background-color: var(--color-grey-1);
}

.user-card__photo {
    height: v-bind(ratio);
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background: url("@/assets/img/joao.jpg") center no-repeat;
    background-size: 100%;
}

</style>

<script>
import {User} from "@/services/user/User";

export default {
    name: "UserCard",
    props: {
        user: User,
        ratio: {
            default: "40px",
            type: String
        }
    },
    computed: {
        resumedName() {
            return this.user.name.substring(0, this.user.name.indexOf(" ")) +
                this.user.name.substring(this.user.name.lastIndexOf(" "));
        },
        profileLink() {
            return "@" + this.user.nickname;
        }
    }
}
</script>