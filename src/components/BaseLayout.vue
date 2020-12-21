<template>
  <div class="portal-base">
    <p class="portal-menu-title"> {{ title }}</p>
    <div class="portal-link-area">
      <applink v-if="title === 'Apps'"></applink>
      <spacelink v-if="title === 'Spaces'"></spacelink>
    </div>
  </div>
</template>

<script>
import applink from './AppLink'
import spacelink from './SpaceLink'

export default {
  name: 'BaseLayout',
  props: {
    title: String
  },
  components: {
    applink,
    spacelink,
  }

}
</script>

<style scoped>
.portal-base {
  width: 80%;
  margin: 0 auto 3% auto;
}
.portal-menu-title {
  text-align: left;
  font-size: 2.5em;
  margin: 0;
}
.portal-link-area {
  background-color: #fff;
  height: 300px;
  border-radius: 10px;
}
</style>
