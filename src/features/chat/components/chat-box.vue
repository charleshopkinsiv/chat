<template>
    <div id="chat-feed" class="container h-100">
        <div class="row h-100">
            <div class="col-md-3"></div>
            <div class="col-md-6 h-100">
                <div class="h-100 d-flex flex-column">
                    <div v-if="user">
                        <Feed :feed="messages" class="flex-fill" />
                        <ChatInput :ws="ws" :user="user"  />
                    </div>
                    <div v-else>
                        <h1 class="text-center text-danger">Please login to chat</h1>
                        <UserInput @newConnection="connected" />
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Feed from './../../../components/ui/feed.vue'
import ChatInput from './chat-input.vue'
import UserInput from './../../user/ui/user-input.vue'

const user = ref(null);
const ws = ref(null);
const messages = ref([]);

function connected(data) {
    console.log('connected');
    user.value = data.user;
    ws.value = data.ws;
    ws.value.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(message);
        newMessage(message);
    };
}

function newMessage(message) {
    messages.value.push({
        name: message.user,
        message: message.message
    });
    messages.value.slice(-50);
}
</script>