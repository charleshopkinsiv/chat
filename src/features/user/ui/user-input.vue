<template>
    <InputSubmit 
    btnText="Create" 
    placeholder="Pick a Username"
    :validate="validateUsername"
    @updateData="connectUser" />
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import InputSubmit from './../../../components/ui/input-submit.vue'

const emit = defineEmits(['newConnection']);

async function connectUser(user) {
    let ws = new WebSocket('ws://csun.wiki:8080');
    ws.onopen = async () => {
        console.log('Connected to server');
        // await ws.send({
        //     type: 'connect',
        //     user: user
        // });    
        
        emit('newConnection', {
            user: user,
            ws: ws
        });
    };
}

function validateUsername(username) {
    if (username.length > 12
        || !/^[a-zA-Z0-9]*$/.test(username)) {
        return false;
    }
    return true;
}
</script>