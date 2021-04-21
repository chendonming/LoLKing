<template>
  <div class="flex flex-col">
    <h1 class="text-2xl text-center">当前系统进程</h1>
    <ul>
      <li v-for="(item, index) in processList" :key="index" class="flex justify-between p-4 cursor-pointer hover:bg-blue-400 hover:text-white">
        <span>{{ item.label }}</span>
        <span>{{ item.pid }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'Home',
  data () {
    return {
      processList: []
    }
  },
  created () {
    console.log('111')
    ipcRenderer.on('tasklist', (e, data) => {
      this.processList = data
    })
    ipcRenderer.send('tasklist')
  }
}
</script>
