<template>
    <nav class="side-bar right-bar column align-i-start">
        <UserCard/>
        <section class="flex column gap-1 width-full">
            <h3 class="right-bar__friends-title">Amigos</h3>
            <div class="right-bar__friends-list flex column">
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
            </div>
        </section>
    </nav>
</template>

<style scoped>
@import "common.css";

.right-bar {
    right: var(--ratio-1);
}

.right-bar__friends-title {
    margin-left: var(--ratio-1);
    font-size: 1.2em;
    line-height: 1;
}

.right-bar__friends-list {
    overflow-y: auto;
    height: calc(100vh - 50px - calc(8*var(--ratio-1)) - 1.2em);
}

</style>

<script>

import UserCard from "@/components/UserCard.vue";

export default {
    name: "RightBar",
    components: {UserCard}
}
</script>