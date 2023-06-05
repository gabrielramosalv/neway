<template>
    <label for="checkbox" class="checkbox flex all-center">
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
    background-color: transparent;
    border: var(--trace);
    cursor: pointer;
}

.checkbox::after {
    content: "";
    background-color: transparent;
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