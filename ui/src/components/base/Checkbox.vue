<template>
    <label for="checkbox" class="checkbox flex align-i-center justify-c-center">
        <input type="checkbox" id="checkbox" @change="emit" ref="checkbox" :checked="modelValue">
    </label>
</template>

<style scoped>

.checkbox > input {
    display: none;
}

.checkbox {
    height: 20px;
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background-color: var(--color-grey-1);
    border: 2px solid var(--color-grey-2);
    cursor: pointer;
}

.checkbox::after {
    content: "";
    background-color: var(--color-grey-1);
    height: 12px;
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    display: block;
}

.checkbox:has(input:checked)::after {
    background-color: var(--color-main-1);
}

</style>

<script>
export default {
    name: "Checkbox",
    props: {
        modelValue: Boolean
    },
    methods: {
        emit() {
            this.$emit("update:modelValue", this.$refs.checkbox.checked)
        }
    }
}
</script>