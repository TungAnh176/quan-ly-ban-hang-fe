<template>
  <div style="position: relative; height: 850px">
    <video class="video" autoplay loop muted>
      <source
        src="../assets/video/-1e5f-403e-9cf7-956c6c8d173e.mp4"
        style="position: absolute"
      />
    </video>
    <div class="in-video">
      <a-space
        direction="vertical"
        size="large"
        style="display: flex; align-items: center"
      >
        <h1 style="font-size: 50px; color: white; padding: 0; margin: 0">
          SUPERCOMFORT .
        </h1>
        <div
          style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            color: white;
            font-size: 15px;
          "
        >
          <p style="display: flex; justify-content: center; margin: 0">
            Trải nghiệm cảm giác thoải mái tối đa với
          </p>
          <p style="display: flex; justify-content: center; margin: 0">
            giày Adidas
          </p>
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
      <a-col
        :span="12"
        style="display: flex; justify-content: end; align-items: center"
      >
        <a-popover
          v-model:open="filterVisible"
          trigger="click"
          placement="bottomRight"
        >
          <template #content>
            <div style="width: 1000px">
              <a-row :gutter="[16, 16]">
                <a-col :span="5">
                  <a-space direction="vertical" :size="10">
                    <h3>Sắp xếp</h3>
                    <!-- <a-checkbox-group v-model:value="checkedList" :options="plainOptions" /> -->
                    <a-checkbox value="A">Mặc định</a-checkbox>
                    <a-checkbox value="A">Mới nhất</a-checkbox>
                    <a-checkbox value="A">Bán nhiều nhất</a-checkbox>
                    <a-checkbox value="A">Giá thấp nhất</a-checkbox>
                    <a-checkbox value="A">Giá cao nhất</a-checkbox>
                  </a-space>
                </a-col>
                <a-col :span="5">
                  <h3>Giá</h3>
                  <a-checkbox value="A">Tất cả</a-checkbox>
                  <a-checkbox value="A">0 - 1.000.000 vnđ</a-checkbox>
                  <a-checkbox value="A">1.000.000 - 2.000.000 vnđ</a-checkbox>
                  <a-checkbox value="A">2.000.000 - 3.000.000 vnđ</a-checkbox>
                  <a-checkbox value="A">3.000.000 - 4.000.000 vnđ</a-checkbox>
                </a-col>
                <a-col :span="5" style="display: flex; flex-direction: column">
                  <h3>Màu sắc</h3>
                  <a-checkbox value="A">Đen</a-checkbox>
                  <a-checkbox value="A">Xanh nước biển</a-checkbox>
                  <a-checkbox value="A">Xám</a-checkbox>
                  <a-checkbox value="A">Trắng</a-checkbox>
                  <a-checkbox value="A">Đỏ</a-checkbox>
                </a-col>
                <a-col :span="5" style="display: flex; flex-direction: column">
                  <h3>Loại giày</h3>
                  <a-checkbox value="A">Gốc</a-checkbox>
                  <a-checkbox value="A">Giới hạn</a-checkbox>
                  <a-checkbox value="A">Thể thao</a-checkbox>
                </a-col>
                <a-col :span="4" style="display: flex; flex-direction: column">
                  <h3>Kích thước</h3>
                  <a-checkbox value="A">37</a-checkbox>
                  <a-checkbox value="A">38</a-checkbox>
                  <a-checkbox value="A">39</a-checkbox>
                  <a-checkbox value="A">40</a-checkbox>
                  <a-checkbox value="A">41</a-checkbox>
                  <a-checkbox value="A">42</a-checkbox>
                  <a-checkbox value="A">43</a-checkbox>
                  <a-checkbox value="A">44</a-checkbox>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="8" :offset="20">
                  <a-space warp style="margin-top: 10px">
                    <a-button type="primary">Xác nhận</a-button>
                    <a-button danger>Xóa</a-button>
                  </a-space>
                </a-col>
              </a-row>
            </div>
          </template>
          <a-button>
            <FunnelPlotOutlined style="font-size: 20px" /> Filter
          </a-button>
        </a-popover>
      </a-col>
    </a-row>
    <div class="content">
      <div style="background-color: #ececec; padding: 20px; margin: 5px">
        <a-row :gutter="24">
          <template v-for="index in 8" :key="index">
            <a-col :span="6" style="margin-bottom: 10px">
              <a-card :bordered="false">
                <img
                  src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/gi%C3%A0y-samba-og.jpg"
                  alt="Samba OG"
                />
                <h3>Giày SAMBA OG</h3>
                <DollarCircleOutlined /> 2.700.000 vnđ
              </a-card>
            </a-col>
          </template>
            <a-col :span="8" :offset="10"><a-button type="primary">Xem Thêm</a-button></a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FunnelPlotOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons-vue";
import { spawn } from "child_process";
import { ref, type Ref } from "vue";
const filterVisible: Ref<boolean> = ref(false);
const hide = () => {
  filterVisible.value = false;
};
const checkedList = ["Apple", "Orange"];
const plainOptions = [
  "Apple",
  "Pear",
  "Orange",
  "Apple",
  "Pear",
  "Orange",
  "Apple",
  "Pear",
  "Orange",
  "Apple",
  "Pear",
  "Orange",
];
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
</style>
import { type Ref, ref } from "vue";
