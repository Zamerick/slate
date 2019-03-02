<template>
  <div class="text-white bg-grey-darkest h-screen flex flex-col align-center ">
      <div class="loader m-auto flex w-s-20">
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
boxes = 20;
durationAll = 0.8s;
duration = (-(durationAll / boxes));
color = #00afef;

.loader {
  hight: 2px;
}

.loading {
  flex: 1;
  background: color;
  animation: go durationAll infinite alternate ease;
  box-shadow: 0 0 20px color;

  for box in (1 .. boxes) {
    &:nth-child({box}) {
      animation-delay: duration * (boxes - box);
    }
  }
}

@keyframes go {
  100% {
    background: transparent;
    flex: 10;
    box-shadow: 0 0 0 transparent;
  }
}
</style>
