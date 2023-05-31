<template>
    <input v-bind:type="type" class="text-field input bold" v-bind:placeholder="placeholder" v-if="type !== 'textarea'" v-bind:maxlength="maxlength">
    <textarea class="text-field textarea bold" v-bind:placeholder="placeholder" v-else rows="3" v-bind:maxlength="maxlength"></textarea>
</template>

<style scoped>

.text-field {
    border: 2px solid var(--color-grey-2);
    border-radius: var(--rounded-1);
    background-color: transparent;
    outline: none;
}

.text-field:focus {
    border: 2px solid var(--color-main-1);
}

.text-field.input {
    height: var(--action-height);
    padding: 0 var(--action-side);
}

.text-field.textarea {
    padding: var(--ratio-1);
    resize: none;
}

</style>

<script>
export default {
    name: "TextField",
    props: {
        placeholder: {
            default: "",
            type: String
        },
        maxlength: {
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