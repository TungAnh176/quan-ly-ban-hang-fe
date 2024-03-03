<template>
    <a-row :gutter="[16, 16]" style="width: 100%; background-color: black;">
        <a-col :span="24" style="width: 100%;">
            <a-row :gutter="[16, 16]" style="padding: 50px 0; width: 100%;">
                <a-col :span="5" style="padding-left: 100px; width: 100%;">
                    <a-space direction="vertical" :size="size">
                        <h2 class="list-title">Hỗ trợ</h2>
                        <RouterLink to="/" class="list-item">Trả hàng</RouterLink>
                        <RouterLink to="/" class="list-item">Phương thức thanh toán</RouterLink>
                        <RouterLink to="/" class="list-item">Khuyến mãi</RouterLink>
                        <RouterLink to="/" class="list-item">Liên hệ</RouterLink>
                    </a-space>
                </a-col>
                <a-col :span="12">
                    <a-space direction="vertical" :size="size">
                        <h2 class="list-title">Thông tin về công ty</h2>
                        <RouterLink to="/" class="list-item">Giới thiệu về chúng tôi</RouterLink>
                        <RouterLink to="/" class="list-item">Cơ hội nghề nghiệp</RouterLink>
                        <RouterLink to="/" class="list-item">Tin tức</RouterLink>
                        <RouterLink to="/" class="list-item">Adidas Blog</RouterLink>
                    </a-space>
                </a-col>
                <a-col :span="5">
                    <a-space direction="vertical" :size="size">
                        <h2 class="list-title">Theo dõi chúng tôi</h2>
                        <a-space :size="size">
                            <RouterLink to="/" class="list-icon">
                                <FacebookFilled />
                            </RouterLink>
                            <RouterLink to="/" class="list-icon">
                                <YoutubeFilled />
                            </RouterLink>
                            <RouterLink to="/" class="list-icon">
                                <AlipayCircleFilled />
                            </RouterLink>
                            <RouterLink to="/" class="list-icon">
                                <TwitterCircleFilled />
                            </RouterLink>
                        </a-space>
                    </a-space>
                </a-col>
            </a-row>
        </a-col>
        <a-col :span="24" style="background-color: white;">
            <a-row :gutter="[16, 16]" style="width: 100%;">
                <a-col :span="12" style="padding: 0 100px;">
                    © 2023 Nike, Inc. All Rights Reserved
                </a-col>
                <a-col :span="12">
                    <a-space size="large" style="font-size: 15px; color: black;">
                        <RouterLink to="/" style="color: black;">Điều khoản bán hàng</RouterLink>
                        <RouterLink to="/" style="color: black;">Điều khoản sử dụng</RouterLink>
                        <RouterLink to="/" style="color: black;">Chính sách bảo mật Adidas</RouterLink>
                    </a-space>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import { FacebookFilled, YoutubeFilled, AlipayCircleFilled, TwitterCircleFilled } from '@ant-design/icons-vue'
import { ref } from 'vue';

const size = ref(20);
</script>

<style scoped>
.list-title {
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    padding: 0;
}

.list-item {
    color: white;
    font-weight: 500;
    font-size: 13px;
}

.list-icon {
    color: white;
    font-weight: 500;
    font-size: 20px;
}
</style>