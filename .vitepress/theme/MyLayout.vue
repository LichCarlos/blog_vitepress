<script setup>
import DefaultTheme from 'vitepress/theme';
import { watch } from 'vue';
import Giscus from '@giscus/vue';
import { useRoute, useData, inBrowser } from 'vitepress';
const { page, isDark } = useData();
const { Layout } = DefaultTheme;
// import NotFound from './NotFound.vue'

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
    .querySelector('giscus-widget')
    ?.shadowRoot?.querySelector('iframe');

  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
    'https://giscus.app'
  );
});
// ...
</script>
<template>
  <Layout>
    <!-- <template #not-found>
      <NotFound></NotFound>
    </template> -->
    <template #doc-after>
      <div style="margin-top: 24px">
        <Giscus
          :key="page.filePath"
          repo="LichCarlos/blog_vitepress"
          repo-id="R_kgDONsH0pA"
          category="Announcements"
          category-id="DIC_kwDONsH0pM4CmJWv"
          mapping="title"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          :theme="isDark ? 'dark' : 'light'"
          input-position="top"
          lang="zh-CN"
          crossorigin="anonymous"
        />
      </div>
    </template>
  </Layout>
</template>

<style  lang="scss">
iframe{
  width: 100%;
  height: 400px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  margin-top: 40px;
  margin-bottom: 40px;
}
//表格宽度自适应
th, td {
    white-space: nowrap !important; /* 不让th，td内容换行显示 */
    width: 1%; /* 强制均匀分配宽度 */ 
}
// markdown图片居中
.main img{
  display: block;
  margin: 0 auto;
}
</style>
