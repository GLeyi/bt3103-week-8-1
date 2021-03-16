<template>
  <div>
    <pageHeader></pageHeader>
    <!--<pageContent></pageContent>-->
    <router-view></router-view>
  </div>
</template>

<script>
//import PageContent from './components/PageContent.vue'
import Header from './components/Header.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    //'pageContent': PageContent,
    'pageHeader': Header,
  }
}
</script>

<style scoped>
</style>
