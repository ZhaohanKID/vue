<template>
  <div>
    <h1>首页</h1>
    <router-link :to="{name: 'UserProfile', params: {id: 2}}">用户列表</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>
