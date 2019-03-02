<template>
<div class="fixed pin overflow-auto bg-spectre p-8 flex content-center z-50" v-show="show">
        <div class="modal w-s-30 h-content m-auto flex flex-col h-content bg-grey-7 rounded-lg p-4">
        <div class="text-grey-1 text-center pb-4">
          <slot></slot>
        </div>
        <div class="flex flex-row justify-end mt-6">
          <basic-button :buttonAction="dismiss" > {{ this.cancelText }} </basic-button >
          <basic-button v-show="this.showConfirm" class="bg-red-1 text-white" :buttonAction='confirm'> {{ this.confirmText }} </basic-button>
        </div>
      </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import BasicButton from '@/components/global/BasicButton.vue';
@Component({ components: { BasicButton, } })
export default class AnoucementModal extends Vue {
  @Prop({ required: true }) show!: Boolean;
  @Prop({ default: true }) preventBackgroundScolling!: Boolean
  @Prop({ default: "Confirm" }) confirmText!: string
  @Prop({ default: true }) showConfirm!: boolean
  @Prop({ default: "Cancel" }) cancelText!: string
  @Prop({ required: true }) confirmAction!: Function

  @Watch('show', { immediate: true })
  function (show: boolean) {
    if (show) {
      this.preventBackgroundScolling && document.body.style.setProperty('overflow', 'hidden');
    } else {
      this.preventBackgroundScolling && document.body.style.removeProperty('overflow');
    }
  }

  created () {
    const escapeHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && this.show) {
        this.dismiss();
      }
    };
    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  }
  confirm () {
    this.confirmAction();
    this.dismiss();
  }
  dismiss () {
    this.$emit('close');
  }
};
</script>
<style lang="stylus">
</style>
