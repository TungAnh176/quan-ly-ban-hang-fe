<template>
  <div style="position: relative; height: 850px;">
    <video class="video" autoplay loop muted>
      <source src="../assets/video/-1e5f-403e-9cf7-956c6c8d173e.mp4" style="position: absolute;">
    </video>
    <div class="in-video">
      <a-space direction="vertical" size="large" style="display: flex; align-items: center;">
        <h1 style="font-size: 50px; color: white; padding: 0; margin: 0;">SUPERCOMFORT .</h1>
        <div style="display: flex; justify-content: center; flex-direction: column; color: white; font-size: 15px;">
          <p style="display: flex; justify-content: center; margin: 0;">Trải nghiệm cảm giác thoải mái tối đa với</p>
          <p style="display: flex; justify-content: center; margin: 0;">giày Adidas</p>
        </div>
        <a-button size="large">Khám phá</a-button>
      </a-space>
    </div>
  </div>
  <div class="container">
    <a-row :gutter="[16, 16]">
      <a-col :span="12">
        <h2>Tổng quan sản phẩm</h2>
      </a-col>
      <a-col :span="12" style="display: flex; justify-content: end; align-items: center;">
        <a-button>
          <FunnelPlotOutlined style="font-size: 20px;" /> Filter
        </a-button>
        <a-popover v-model:open="filterVisible" trigger="click" placement="bottomRight">
          <template #content>
            <div style="width: 1000px;">
              <a-row :gutter="[16, 16]">
                <a-col :span="5">
                  <a-space direction="vertical" :size="10">
                    <h3>Sắp xếp</h3>
                    <!-- <a-checkbox-group v-model:value="checkedList" :options="plainOptions" /> -->
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                    <a-checkbox value="A">A</a-checkbox>
                  </a-space>
                </a-col>
                <a-col :span="5">
                  <h3>Sắp xếp</h3>
                </a-col>
                <a-col :span="5">
                  <h3>Sắp xếp</h3>
                </a-col>
                <a-col :span="5">
                  <h3>Sắp xếp</h3>
                </a-col>
                <a-col :span="4">
                  <h3>Sắp xếp</h3>
                </a-col>
              </a-row>
              <a @click="hide">Close</a>
            </div>
          </template>
          <a-button type="primary">Click me</a-button>
        </a-popover>
      </a-col>
    </a-row>

  </div>
</template>

<script setup lang="ts">
import { FunnelPlotOutlined } from "@ant-design/icons-vue"
import { ref, type Ref } from "vue";
const filterVisible: Ref<boolean> = ref(false);
const hide = () => {
  filterVisible.value = false;
}
const checkedList = ['Apple', 'Orange'];
const plainOptions = ['Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange',];

</script>

<style scoped>
.video {
  width: 100%;
  position: absolute;
}

.in-video {
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.container {
  padding: 0px 100px;
}
</style>import { type Ref, ref } from "vue";
