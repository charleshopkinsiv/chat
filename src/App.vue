<template>
  <div id="main">
    <div id="box">
      <div class="h-100 d-flex flex-column">
        <div class="w-100 text-center">
          <img alt="CSUN logo" :src="logo" />
        </div>
        <ChatBox class="flex-fill" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import ChatBox from './features/chat/components/chat-box.vue'
  import logo from './assets/CSUN.png'
  </script>

<style>
  #main {
    background: url('./assets/drips.png') center top no-repeat;
    height: 100%;
  }
  #box {
    background: rgba(0,0,0,0.8);
    height: 100%;
  }
  #logo {
    margin: 0 auto;
  }
</style>
