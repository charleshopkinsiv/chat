<template>
    <div class="feed mb-3">
        <div v-for="item in feed" class="d-flex">
            <div class="name flex-fill">{{ item.name }}</div>
            <div class="message flex-fill">{{ item.message }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    feed: Array
})

</script>

<style scoped>
    .feed {
        color: #ce1126;
    }
    .name {
        font-weight: bold;
        max-width: 33%;
        text-align: right;
        padding-right: 10px;
    }
</style>