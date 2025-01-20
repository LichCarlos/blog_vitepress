<!-- .vitepress/theme/components/VisitorPanel.vue -->
<template>
  <div class="panel">
    <div class="container">
      <section class="grid">
        <span class="text">
          本站总访问量
          <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次
        </span>
        <span class="text">
          本站访客数
          <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
        </span>
      </section>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.panel {
  margin-top: 12px;
  margin-bottom: 8px;
}

.container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  width: 100%;
  min-height: 32px;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}



.grid {
  font-weight: 500;
  padding:12px;
  justify-content: space-between; 
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.text {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
