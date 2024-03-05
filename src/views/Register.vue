<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 70px 0px;
    "
  >
    <a-row :gutter="[16, 16]" style="width: 30%">
      <a-col
        :span="24"
        style="display: flex; justify-content: center; align-items: center"
      >
        <h1>Đăng ký</h1>
      </a-col>
      <a-col :span="24">
        <a-form>
          <a-form-control :span="24">
            <a-input
              placeholder="Họ và tên"
              style="border-radius: 30px; height: 50px"
            />
          </a-form-control>
          <a-form-control :span="24">
            <a-input
              placeholder="Số điện thoại"
              style="border-radius: 30px; height: 50px"
            />
          </a-form-control>
          <a-form-control :span="24">
            <a-input
              placeholder="Email"
              style="border-radius: 30px; height: 50px"
            />
          </a-form-control>
          <a-form-control :span="24">
            <a-input
              type="password"
              placeholder="Mật khẩu"
              style="border-radius: 30px; height: 50px"
            />
          </a-form-control>
          <a-form-control :span="24">
            <RouterLink :to="localPath.login" style="font-size: 16px"
              >Đăng nhập</RouterLink
            >
          </a-form-control>
          <a-col :span="24">
            <a-button
              style="
                width: 100%;
                height: 50px;
                border-radius: 30px;
                font-weight: bold;
                font-size: 20px;
              "
              >Đăng ký</a-button
            >
          </a-col>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { localPath } from "@/defined/path";
</script>

<style></style>
