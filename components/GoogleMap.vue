<template>
  <div class="map__wrapper">
    <GmapMap
      :center="pointerCoords"
      :zoom="12"
      :options="{styles: styles, 'zoom-control': false}"
      :zoom-control="false"
      style="width: 100%; height: 100%;"
    >
      <GmapMarker
        :position="pointerCoords"
        :icon="icon"
      />
    </GmapMap>
  </div>
</template>

<script>
import googleMapStyle from "@/assets/google-maps/googleMapStyle";

export default {
  props: {
    pointerCoords: {
      type: Object,
      default() {
        return {lat:10, lng:10}
      }
    }
  },
  data() {
    return {
      styles: googleMapStyle,
      icon: '/pointer.svg'
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/global/variables.scss";
  @import "@/assets/sass/components/google-maps.scss";
</style>
