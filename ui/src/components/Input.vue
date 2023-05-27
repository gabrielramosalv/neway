<template>
    <input v-bind:type="type" class="input" v-bind:placeholder="placeholder">
</template>

<style scoped>

.input {
    height: var(--action-height);
    padding: 0 var(--action-side);
    border: 2px solid var(--color-grey-2);
    border-radius: var(--rounded-1);
    background-color: var(--color-grey-0_5);
    outline: none;
}

.input:focus {
    border: 2px solid var(--color-main-1);
}

</style>

<script>
export default {
    name: "Input",
    props: {
        placeholder: {
            default: "",
            type: String
        },
        type: {
            default: "text",
            type: String
        }
    }
}

</script>