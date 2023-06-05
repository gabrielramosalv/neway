<template>
    <div :class="['message flex all-center', getTypeClass]">
        {{ message }}
    </div>
</template>

<style scoped>

.message {
    padding: 0 var(--action-side);
    height: var(--action-height);
    border-radius: var(--rounded-2);
    position: relative;
}

.message::after {
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    position: absolute;
    border: var(--trace);
    border-color: rgba(0, 0, 0, 0.15);
    border-radius: var(--rounded-2);
}

.message.error {
    background-color: var(--color-red-1);
    color: white;
}

.message.normal {
    background-color: white;
}

.message.success {
    color: white;
    background-color: var(--color-green-1);
}

</style>

<script>
import {MessageType} from "@/global/model/Message";

export default {
    name: "ResponseMessage",
    props: {
        type: MessageType,
        message: String
    },
    computed: {
        getTypeClass() {
            if (this.type === MessageType.ERROR) {
                return "error";
            } else if (this.type === MessageType.NORMAL) {
                return "normal";
            } else if (this.type === MessageType.SUCCESS) {
                return "success";
            } else {
                return "warning";
            }
        }
    }
}
</script>