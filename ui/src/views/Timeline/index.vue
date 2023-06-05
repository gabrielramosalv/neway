<template>
    <div class="timeline">
        <main class="timeline__main flex justify-c-center gap-2">
            <LeftBar @message="$emit('message', $event)"/>
            <section class="timeline__main__posts flex row align-i-start justify-c-center gap-2">
                <div class="flex column gap-2">
                    <TimelinePost v-for="post in posts"
                          v-bind:user="getUserFromPost(post)"
                          v-bind:post="post"
                          v-bind:key="post.id"/>
                </div>
            </section>
            <RightBar v-bind:user="user" v-bind:users="users"/>
        </main>
    </div>
</template>

<style>

.timeline {
    height: 100%;
}

.timeline__main {
    height: fit-content;
}

.left-bar__logo > img {
    height: 60px;
}

.timeline__main__posts {
    width: calc(100vw - 605px);
    padding: var(--ratio-2);
}

</style>

<script>
import TimelinePost from "@/views/Timeline/TimelinePost.vue";
import LeftBar from "@/components/layout/LeftBar.vue";
import RightBar from "@/views/Timeline/RightBar.vue";
import {$system} from "@/global/system";
import router from "@/router";
import {Paths} from "@/router/routes";
import {User} from "@/services/user/User";

export default {
    name: "Timeline",
    components: {RightBar, LeftBar, TimelinePost},
    data() {
        return {
            user: User,
            posts: [],
            users: []
        }
    },
    setup() {
        if ($system.getUser() == null) {
            router.push(Paths.LOGIN);
        }
    },
    mounted() {
        this.user = $system.getUser();
        this.posts = $system.services.post.getAll();
        this.users = $system.services.user.getAllUnlessThisUser(this.user);
    },
    methods: {
        getUserFromPost(post) {
            return $system.services.user.getOne(post.userId);
        }
    }
}
</script>