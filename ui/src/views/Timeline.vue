<template>
    <div class="timeline">

        <main class="timeline__main flex justify-c-center gap-2">
            <LeftBar/>

            <section class="timeline__main__posts flex row align-i-start justify-c-between gap-2">
                <div class="timeline__main__posts__controller">
                </div>
                <div class="flex column gap-2">
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                <div class="timeline__main__posts__controller">
                    <button class="timeline__main__posts__create">
                        <CreatingPostPopup/>
                    </button>
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

.timeline__main__posts__controller {
    max-height: 100px;
    width: 50px;
    position: sticky;
    top: var(--ratio-2);
}

.timeline__main__posts__create {
    border: 2px solid var(--color-main-1);
    border-radius: var(--rounded-total);
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: background-color 0.05s, color 0.05s;
    background-color: var(--color-main-1);
    flex-shrink: 0;
}

.timeline__main__posts__create:hover {
    background-color: var(--color-main-2);
}

</style>

<script>
import Post from "@/components/Post";
import LeftBar from "@/layout/LeftBar.vue";
import RightBar from "@/layout/RightBar.vue";
import CreatingPostPopup from "@/components/CreatingPostPopup.vue";

export default {
    name: "Timeline",
    components: {CreatingPostPopup, RightBar, LeftBar, Post},
    data() {
        return {
            name: "Gabriel"
        }
    },
    methods: {}
}
</script>