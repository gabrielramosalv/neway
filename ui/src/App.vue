<template>
    <div>
        <ResponseMessageBox ref="messageBox"/>
        <router-view @message="(message) => $refs.messageBox.addMessage(message)"/>
    </div>
</template>

<script>

import ServiceException from "@/services/ServiceException";
import {Message, MessageType} from "@/global/model/Message";
import ResponseMessageBox from "@/components/ResponseMessageBox.vue";

export default {
    name: "App",
    components: {ResponseMessageBox},
    errorCaptured(err, vm, info) {
        if (err instanceof ServiceException) {
            this.$refs.messageBox.addMessage(new Message(err.message, MessageType.ERROR));
            return false;
        }
    }
}
</script>

<style>
@import "@/assets/css/import.css";
</style>