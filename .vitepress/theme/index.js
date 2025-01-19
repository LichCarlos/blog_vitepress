// index.js
// import DefaultTheme from 'vitepress/theme'
// import './custom.css'

// export default DefaultTheme

// .vitepress/theme/index.js

// 可以直接在主题入口导入 Vue 文件
// VitePress 已预先配置 @vitejs/plugin-vue
import Layout from './MyLayout.vue';
import confetti from "./confetti.vue";
import VisitorPanel from "./VisitorPanel.vue";

import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
export default {
  Layout,
  enhanceApp: ({ app, router }) => {
    app.component("confetti", confetti);
    app.component("VisitorPanel", VisitorPanel);
    router.onBeforeRouteChange = (to) => {
      //线上环境才上报
      if (import.meta.env.MODE === 'production') {
        if (typeof _hmt !== 'undefined' && !!to) {
          _hmt.push(['_trackPageview', to]);
        }
      }
    };
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
