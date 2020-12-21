import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

kintone.events.on('portal.show', () => {
  const el = kintone.portal.getContentSpaceElement();
  new Vue({
    render: h => h(App)
  }).$mount(el);
});