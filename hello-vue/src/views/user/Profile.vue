<template>
    <div>
      <h1>用户列表页面</h1>
      {{$route.params.id}}
      <router-link to="/goHome">回到首页</router-link>
    </div>
</template>

<script>
    export default {
        name: "UserProfile"
    }
</script>

<style scoped>

</style>
