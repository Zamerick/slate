<template>
  <svg class="pointer-events-none">
    <use :href="'./svg/sprites.svg' + this.id"></use>
  </svg>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Icon extends Vue {
  @Prop() name!: string;
  get id () {
    return '#' + this.name;
  }
}
</script>
