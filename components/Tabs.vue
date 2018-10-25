<template>
  <div class="tabs">
    <ul class="tabs__nav">
      <li
        v-for="(tab, key) in tabs" 
        :key="key"
        :class="{ 'active': key == activeId }"
        class="tabs__item"
        @click.prevent="selectTab(key)">{{ tab.city }}</li>
    </ul>
    <tab :tab="activeTab" />
  </div>
</template>

<script>
import Tab from '~/components/Tab.vue';

export default {
  components: {
    Tab
  },
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      activeId: 0,
      activeTab: this.tabs[0]
    }
  },
  methods: {
    selectTab(tabId) {
      this.activeId = tabId;
      this.activeTab = this.tabs[tabId];
      this.$emit('officeChanged', tabId);
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/components/tabs.scss";
</style>