<template>
    <div class="message-box flex column gap-1">
        <ResponseMessage v-for="(message, index) in messages" v-bind:type="message.type"
                         v-bind:message="message.message"
                         v-bind:key="index"/>
    </div>
</template>

<style scoped>

.message-box {
    position: fixed;
    top: var(--ratio-1);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
}

</style>

<script>

import ResponseMessage from "@/components/ResponseMessage.vue";

export default {
    name: "ResponseMessageBox",
    components: {ResponseMessage},
    data() {
        return {
            messages: []
        }
    },
    methods: {
        addMessage(message) {
            if (this.messages.length > 0) {
                this.messages = [];
            }
            if (this.messages.filter(cachedMessage => cachedMessage.message === message.message).length > 0) {
                return;
            }
            let index = this.messages.unshift(message) - 1;
            setTimeout(() => {
                this.messages.splice(index, 1);
            }, 3000);
        }
    }
}
</script>


