<template>
    <div class="timeline">

        <main class="timeline__main flex justify-c-center gap-2">
            <LeftBar/>

            <section class="timeline__main__posts flex column gap-2">
                <div class="timeline__main__search-container">
                    <input type="search" class="timeline__main__search width-full">
                </div>
                <Post/>
                <Post/>
                <Post/>
            </section>

            <RightBar/>
        </main>

    </div>
</template>

<style>

.timeline {
    height: 100%;
    padding: var(--ratio-1);
}

.timeline__main {
    height: fit-content;
}

.left-bar__logo > img {
    height: 60px;
}

.timeline__main__posts {
    padding: var(--ratio-1);
}

.timeline__main__search-container {
    position: sticky;
    top: -1px;
    background: white;
    padding: var(--ratio-1) 0;
}

.timeline__main__search {
    border-radius: var(--rounded-2);
    padding: var(--ratio-1) var(--ratio-2);
    background-color: white;
    border: 2px solid var(--color-grey-1);
}

</style>

<script>
import Post from "@/components/Post";
import LeftBar from "@/layout/LeftBar.vue";
import RightBar from "@/layout/RightBar.vue";

export default {
    name: "Timeline",
    components: {RightBar, LeftBar, Post},
    data() {
        return {
            name: "Gabriel"
        }
    },
    methods: {}
}
</script>