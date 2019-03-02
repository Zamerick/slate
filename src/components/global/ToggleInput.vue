<template>
  <span class="toggle" role="checkbox" tabindex="0"
    @click="this.toggle"
    @keydown.space.prevent="this.toggle"
    :aria-checked="this.toggled.toString()"
  ></span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
@Component({})
export default class ToggleInput extends Vue {
  @Model('toggle', {type: Boolean}) toggled!:boolean;
  toggle () {
    this.$emit('toggle', !this.toggled);
  }
};
</script>
<style lang="stylus">
.toggle {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  border-radius: 9999px;
  cursor: pointer;
  height: 1.5rem;
  width: 3rem;
}
.toggle:focus {
  outline: 0;
}
.toggle:before {
  display: inline-block;
  border-radius: 9999px;
  height: 100%;
  width: 100%;
  background-color: #353E47;
  content: "";
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;
}
.toggle[aria-checked="true"]:before {
  background-color: #00AFEF;
}
.toggle:after {
  position: absolute;
  top: 0
  left: 0;
  border-radius: 9999px;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #1B1F24;
  border-width: 1px;
  border-color: #101316;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  content: "";
  transition: transform 0.2s ease;
  transform: translateX(0);
}
.toggle[aria-checked="true"]:after {
  transform: translateX(1.6rem);
}
</style>
