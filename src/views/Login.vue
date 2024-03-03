<template>
    <div style="display: flex; justify-content: center; align-items: center; padding: 35px 0;">
        <a-row :gutter="[16, 16]" style="width: 30%;">
            <a-col :span="24" style="display: flex; justify-content: center; align-items: center;">
                <h1>Đăng nhập</h1>
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="large size" />
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="large size" />
            </a-col>
            <a-col :span="24" style="display: flex; justify-content: space-between;">
                <RouterLink :to=localPath.register>Đăng ký tài khoản</RouterLink>
                <RouterLink to="/about">Quên mật khẩu</RouterLink>
            </a-col>
            <a-col :span="24">
                <a-button style="width: 100%; height: 40px;">Đăng nhập</a-button>
            </a-col>
            <a-col :span="24">
                <a-divider>Đăng nhập với mạng xã hội</a-divider>
            </a-col>
            <a-col :span="24">
                <a-button style="width: 100%; height: 40px; background-color: #2596be;">Đăng nhập với Google</a-button>
            </a-col>
            <a-col :span="24">
                <a-button style="width: 100%; height: 40px;">Đăng nhập với Facebook</a-button>
            </a-col>
        </a-row>
    </div>
</template>

<script setup lang="ts">
import { localPath } from '@/defined/path';

</script>