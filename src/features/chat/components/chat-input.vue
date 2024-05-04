<template>
    <InputSubmit 
    btnText="Send" 
    placeholder="Send a message"
    @updateData="sendMessage"
    :validate="validateMessage" />
</template>

<script setup>
import { ref } from 'vue'
import InputSubmit from './../../../components/ui/input-submit.vue'

const props = defineProps({
    user: String,
    ws: WebSocket,
});

function validateMessage(message) {
    if (message.length > 128
        || !/^[a-zA-Z0-9\s]*$/.test(message)) {
        return false;
    }
    return true;
}

function sendMessage(message) {
    props.ws.send(JSON.stringify({
        type: 'message',
        user: props.user,
        message: message
    }));
    console.log({
        type: 'message',
        user: props.user,
        message: message
    });
}
</script>
