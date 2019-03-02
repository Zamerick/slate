<template>
  <button type="button"  @click="buttonAction" class="p-2 rounded m-1 w-content focus:outline-none bg-grey-4">
    <slot>Default Button</slot>
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class PrimaryButton extends Vue {
  @Prop({ required: true }) buttonAction!: Function
}
</script>
<style lang="stylus">
</style>
