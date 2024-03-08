<template>
  <h4>機型選擇</h4> 
  <input type="text" v-model="message">
  <h5>{{ message }}</h5>
  </template>

<script setup>
import { ref } from 'vue'
    const message = ref("700E")
</script>

<style>

</style>