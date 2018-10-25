<template>
  <div class="tab">
    <div class="tab__heading">Global Message Services {{ tab.country }} LLC</div>
    <div class="tab__text">
      {{ tab.street }}<br>
      {{ tab.postcode }}<br>
      {{ tab.country }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/components/tab.scss";
</style>