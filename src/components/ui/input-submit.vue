<template>
    <div id="message-box" class="input-group bg-black text-red mb-3">
        <input v-model="data" @input="validateInput" type="text" class="form-control bg-black text-white" :placeholder="placeholder">
        <span class="input-group-text bg-black" id="basic-addon2">
            <button @click="updateData" class="btn btn-danger">{{ btnText }}</button>
        </span>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['updateData']);

const props = defineProps({
    btnText: String,
    placeholder: String,
    validate: Function
});

const data = ref('');

const updateData = () => {
    emit('updateData', data.value);
    data.value = '';
}

const validateInput = () => {
    if (!props.validate(data.value)) {
        data.value = data.value.slice(0, -1);
    }
}
</script>

<style scoped>
    ::placeholder {
        color: #ce1126;
    }
</style>
