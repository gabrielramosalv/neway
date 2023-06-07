<template>
    <router-link :to="profileLink" class="user-card flex align-i-center justify-c-between gap-1_2">
        <div class="flex align-i-center gap-1_2">
            <div class="user-card__photo"></div>
            <div class="flex column align-i-start">
                <h4 class="user-card__name bold" :style="isFollowed ? 'width: 100px': ''">{{ resumedName }}</h4>
                <span class="user-card__nickname" :style="isFollowed ? 'width: 100px': ''">{{ user.nickname }}</span>
            </div>
        </div>
        <span v-if="isFollowed" class="user-card__followed bold minor">Seguindo</span>
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

.user-card__name, .user-card__nickname {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    background: url("@/assets/img/user-default-photo.svg") center no-repeat var(--color-grey-1);
    background-size: 50%;
}


.user-card__followed {
    color: var(--color-main-1);
    background-color: rgba(80, 34, 161, 0.1);
    padding: 8px 10px;
    line-height: 1;
    border-radius: var(--rounded-1);
}

</style>

<script>
import {User} from "@/services/user/User";
import {$system} from "@/global/system";

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
                this.user.name.substring(this.user.name.lastIndexOf(" "), this.user.name.length);
        },
        profileLink() {
            return "@" + this.user.nickname;
        },
        isFollowed() {
            const user = $system.getUser();
            return user.followIds.includes(this.user.id) && this.user.id !== user.id;
        }
    }
}
</script>