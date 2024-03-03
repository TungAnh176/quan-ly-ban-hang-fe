<template>
    <div style="display: flex; justify-content: center; align-items: center; padding: 70px 0px;">
        <a-row :gutter="[16, 16]" style="width: 30%;">
            <a-col :span="24" style="display: flex; justify-content: center; align-items: center;">
                <h1>Đăng ký</h1>
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="Họ và tên" />
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="Số điện thoại" />
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="Email" />
            </a-col>
            <a-col :span="24">
                <a-input size="large" placeholder="Mật khẩu" />
            </a-col>
            <a-col :span="24">
                <RouterLink :to=localPath.login>Đăng nhập</RouterLink>
            </a-col>
            <a-col :span="24">
                <a-button style="width: 100%; height: 40px;">Đăng ký</a-button>
            </a-col>
        </a-row>
    </div>
</template>

<script setup lang="ts">
import { localPath } from '@/defined/path';
</script>

<style></style>