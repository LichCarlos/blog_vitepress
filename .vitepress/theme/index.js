import Layout from './MyLayout.vue';
import confetti from "./confetti.vue";
import VisitorPanel from "./VisitorPanel.vue";
import busuanzi from "busuanzi.pure.js";
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
export default {
  Layout,
  enhanceApp: ({ app, router, siteData }) => {
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
    onMounted(() => {
      const busuanziScript = document.createElement('script');
      busuanziScript.async = true;
      busuanziScript.src = 'https://cdn.jsdelivr.net/npm/busuanzi@2.3/busuanzi.pure.mini.js';
      document.body.appendChild(busuanziScript);
    });
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
