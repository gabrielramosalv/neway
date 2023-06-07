<template>
    <div class="timeline">
        <main class="timeline__main flex justify-c-center gap-2">
            <LeftBar @message="$emit('message', $event)" @new-post="loadPosts"/>
            <section class="timeline__main__posts flex row align-i-start justify-c-center gap-2">
                <div class="flex column gap-2">
                    <TimelinePost v-for="post in posts"
                          :user="getUserFromPost(post)"
                          :post="post"
                          :key="post.id"/>
                </div>
            </section>
            <RightBar/>
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
            user: null,
            posts: [],
            users: []
        }
    },
    mounted() {
        const user = $system.getUser();
        if (user == null) {
            router.push(Paths.LOGIN);
            return;
        }
        this.user = user;
        this.users = $system.services.user.getAllUnlessThisUser(this.user);
        this.loadPosts();
    },
    methods: {
        loadPosts() {
            this.posts = $system.services.post.getAllSortByRecent();
        },
        getUserFromPost(post) {
            return $system.services.user.getOne(post.userId);
        }
    }
}
</script>