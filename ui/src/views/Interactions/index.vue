<template>
  <div class="interactions flex column align-i-center">

    <div class="interactions__leftbar">
      <LeftBar/>
    </div>

    <h1 class="interactions__title">Suas interações</h1>

    <div class="interactions__button flex justify-c-center">
      <button @click="activeTab = 'posts__liked'" :class="{'active': activeTab === 'posts__liked'}"
              class="interactions__button__liked t-w-bold t-c-aside">Curtidas</button>
      <button @click="activeTab = 'posts__saved'" :class="{'active': activeTab === 'posts__saved'}"
              class="interactions__button__saved t-w-bold t-c-aside">Salvos</button>
    </div>

    <div id="posts__liked" class="interactions__posts__liked flex justify-c-center gap-1_2"
         v-if="activeTab === 'posts__liked'">
      <interactions-post/>
      <interactions-post/>
      <interactions-post/>
      <interactions-post/>
      <interactions-post/>
    </div>

    <div id="posts__saved" class="interactions__posts__saved flex justify-c-center gap-1_2"
         v-if="activeTab === 'posts__saved'">
      <interactions-post/>
      <interactions-post/>
      <interactions-post/>
    </div>

  </div>
</template>

<style>

.interactions {
    margin-left: 280px;
    height: 100vh;
    width:calc(100vw - 280px);
}

.interactions__title {
    font-size: 2.5em;
    margin-top: var(--ratio-2);
    color: var(--color-main-1);
    user-select: none;
}

.interactions__button {
    margin-top: var(--ratio-2);
}

.interactions__button__liked,
.interactions__button__saved {
    border: none;
    background: none;
    padding: var(--ratio-1);
    cursor: pointer;
    transition: color 0.2s;
}

.interactions__button__liked.active,
.interactions__button__saved.active {
    color: var(--color-main-1);
    border-bottom: 2px solid var(--color-main-1);
}

.interactions__posts__liked,
.interactions__posts__saved {
    margin-top: var(--ratio-2);
    flex-wrap: wrap;
    justify-content: left;
    padding: 0 0 var(--ratio-2) 0;
    width: calc(1030px + var(--ratio-1));
}

</style>

<script>
    import LeftBar from "@/components/layout/LeftBar.vue";
    import InteractionsPost from "@/views/Interactions/InteractionsPost.vue";

    export default {
    name: "Interactions",
    components: { LeftBar, InteractionsPost },
    data() {
        return {
        activeTab: "posts__liked",
        };
    },
};
</script>