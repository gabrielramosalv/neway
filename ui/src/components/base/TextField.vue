<template>
    <input v-bind:type="type" class="text-field input" v-bind:placeholder="placeholder" v-if="type !==
    'textarea'" v-bind:maxlength="maxlength" spellcheck="false" @input="change" v-bind:value="modelValue">
    <textarea class="text-field textarea" v-bind:placeholder="placeholder" v-else :rows="rows"
              v-bind:maxlength="maxlength" spellcheck="false" v-bind:value="modelValue" @input="change"></textarea>
</template>

<style scoped>

.text-field {
    border: v-bind(border);
    border-radius: var(--rounded-1);
    background-color: transparent;
    outline: none;
    transition: box-shadow 0.1s;
}

.text-field:focus {
    box-shadow: 0 0 0 1px var(--color-main-transparent-1);
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
            default: 2,
            type: Number
        },
        border: {
            default: "var(--trace)",
            type: String
        },
        formatter: {
            default: (text) => {
                return text;
            },
            type: Function
        }
    },
    methods: {
        change(event) {
            event.target.value = this.formatter(event.target.value);
            this.$emit('update:modelValue', event.target.value);
        }
    }
}

</script>