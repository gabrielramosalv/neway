<template>
    <router-link v-bind:to="to" v-if="to != null" class="button t-w-bold flex all-center">
        {{ content }}
    </router-link>
    <button class="button t-w-bold" v-else>
        {{ content }}
    </button>
</template>

<style scoped>

.button {
    height: var(--action-height);
    padding: 0 var(--action-side);
    background-color: v-bind(bgColor);
    border: v-bind(border);
    color: v-bind(textColor);
    border-radius: var(--rounded-1);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    width: fit-content;
    position: relative;
}

.button::after {
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    transition: background-color 0.1s;
}

.button:hover::after {
    background-color: rgba(0, 0, 0, 0.1);
}

</style>

<script>
export default {
    name: "Button",
    props: {
        content: String,
        bgColor: {
            type: String,
            default: "var(--color-main-1)"
        },
        border: {
            type: String,
            default: "none"
        },
        textColor: {
            type: String,
            default: "white"
        },
        to: String
    }
}
</script>
