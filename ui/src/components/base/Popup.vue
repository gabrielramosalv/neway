<template>
    <div class="popup-container flex align-i-center justify-c-center">
        <div class="popup flex column gap-1">
            <header v-if="header" class="popup__header flex align-i-center justify-c-between">
                <span class="t-s-headline t-w-bold">{{ title }}</span>
                <button @click="close" ref="closeButton" class="popup__close"></button>
            </header>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>

.popup-container[open] {
    display: flex;
}

.popup-container {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: default;
}

.popup {
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
        },
        header: {
            type: Boolean
        }
    },
    data() {
        return {
            parentElement: null
        }
    },
    mounted() {
        this.parentElement = this.$el.parentElement;
        this.parentElement.addEventListener("click", (ev) => {
            if (this.$el.getAttribute("open") == null &&
                (ev.target !== this.$refs.closeButton ||
                    !this.$refs.closeButton.contains(ev.target))) {
                this.$el.setAttribute("open", "");
                document.body.style.overflow = "hidden";
                document.body.appendChild(this.$el);
            }
        });
    },
    methods: {
        close() {
            document.body.style.removeProperty("overflow");
            this.$el.removeAttribute("open");
            this.parentElement.appendChild(this.$el);
        }
    }
}
</script>
