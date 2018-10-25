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
    <tab
      :tab="activeTab"
      :class="{out: tabHidden}" />
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
      activeTab: this.tabs[0],
      tabHidden: false
    }
  },
  methods: {
    selectTab(tabId) {
      this.activeId = tabId;
      this.tabHidden = true;

      let self = this;
      setTimeout(function() {
        self.tabHidden = false;
        self.activeTab = self.tabs[tabId];
        self.$emit('officeChanged', tabId);
      }, 300);
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/components/tabs.scss";
</style>