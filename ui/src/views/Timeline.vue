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
                    <div class="flex column align-i-center gap-0_1">
                        <button class="timeline__main__posts__create">
                            <Popup title="Criar publicação">
                                <template v-slot:content>
                                    
                                </template>
                            </Popup>
                        </button>
                        <span class="user-select-none bold">Criar</span>
                    </div>
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
    background-color: white;
    border: 2px solid var(--color-main-1);
    border-radius: var(--rounded-total);
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: background-color 0.05s, color 0.05s;
}

.timeline__main__posts__create:hover {
    background-color: var(--color-main-1);
}

</style>

<script>
import Post from "@/components/Post";
import LeftBar from "@/layout/LeftBar.vue";
import RightBar from "@/layout/RightBar.vue";
import Popup from "@/components/Popup.vue";

export default {
    name: "Timeline",
    components: {Popup, RightBar, LeftBar, Post},
    data() {
        return {
            name: "Gabriel"
        }
    },
    methods: {}
}
</script>