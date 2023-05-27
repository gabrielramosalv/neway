<template>
  <button class="button bold">
      {{ content }}
  </button>
</template>

<style scoped>

.button {
    height: var(--action-height);
    padding: 0 var(--action-side);
    background-color: var(--color-main-1);
    border: none;
    color: white;
    border-radius: var(--rounded-1);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
}

.button:hover {
    background-color: var(--color-main-2);
}

</style>

<script>
export default {
    name: "Button",
    props: {
        content: String
    }
}
</script>
