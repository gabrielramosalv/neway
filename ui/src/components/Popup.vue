<template>
    <dialog class="popup flex column gap-1">
        <header class="popup__header flex align-i-center justify-c-between">
            <span class="popup__title bold">{{ title }}</span>
            <button @click="close" ref="closeButton" class="popup__close"></button>
        </header>
        <slot name="content"></slot>
    </dialog>
</template>

<style scoped>

.popup {
    display: none;
    min-width: v-bind(width);
    height: fit-content;
    border-radius: var(--rounded-2);
    background-color: white;
    border: none;
    position: absolute;
    margin: auto;
    padding: var(--ratio-1);
    cursor: default;
}

.popup[open]{
    display: flex;
}

.popup::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}

.popup__close {
    height: 35px;
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    border: none;
    cursor: pointer;
    background-color: transparent;
}

.popup__close:hover {
    background-color: var(--color-grey-1);
}

.popup__title {
    font-size: 1.5em;
}

</style>

<script>
export default {
    name: "Popup",
    props: {
        title: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: "fit-content"
        }
    },
    mounted() {
        this.$el.parentElement.addEventListener("click", (ev) => {
            if (this.$el.getAttribute("open") == null &&
                (ev.target !== this.$refs.closeButton ||
                    !this.$refs.closeButton.contains(ev.target))) {
                this.$el.showModal();
                document.body.style.overflow = "hidden";
            }
        });
    },
    methods: {
        close() {
            document.body.style.removeProperty("overflow");
            this.$el.close();
        }
    }
}
</script>
