<template>
    <input v-bind:type="type" class="text-field input t-w-bold" v-bind:placeholder="placeholder" v-if="type !==
    'textarea'" v-bind:maxlength="maxlength" spellcheck="false"
           @input="$emit('update:modelValue', $event.target.value)" v-bind:value="modelValue">
    <textarea class="text-field textarea t-w-bold" v-bind:placeholder="placeholder" v-else :rows="rows"
              v-bind:maxlength="maxlength" spellcheck="false"></textarea>
</template>

<style scoped>

.text-field {
    border: v-bind(border);
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
        modelValue: String,
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
        },
        rows: {
            default: "2",
            type: String
        },
        border: {
            default: "2px solid var(--color-grey-2)",
            type: String
        }
    }
}

</script>