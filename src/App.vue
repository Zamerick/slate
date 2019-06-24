<template>
  <div id="app" class="">
    <router-view/>
  </div>
</template>
<script lang="ts">
import '@/assets/css/tailwind.styl';
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class App extends Vue {}
</script>
<style lang="stylus">
</style>
