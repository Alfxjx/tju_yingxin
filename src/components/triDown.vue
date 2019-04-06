<template>
  <div class="tri-down">
    <span></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'triDown'
  }
</script>

<style scoped>
  .tri-down {
    width: 0;
    height: 0;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-top: 38px solid rgb(53, 180, 235);
  }

</style>
