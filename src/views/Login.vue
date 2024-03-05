<template>
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 35px 0;
      "
    >
      <a-row :gutter="[16, 16]" style="width: 30%">
        <a-col
          :span="24"
          style="display: flex; justify-content: center; align-items: center"
        >
          <h1>Đăng nhập</h1>
        </a-col>
        <a-col :span="24">
          <a-input type="email" size="large" placeholder="Email" style="border-radius: 30px; height: 50px;"/>
        </a-col>
        <a-col :span="24">
          <a-input type="password" size="large" placeholder="Mật khẩu" style="border-radius: 30px; height: 50px;"/>
        </a-col>
        <a-col>
          <a-typography-text type="danger" style="display: none"
            >Email hoặc mật khẩu không đúng</a-typography-text
          >
        </a-col>
        <a-col :span="24" style="display: flex; justify-content: space-between">
          <RouterLink :to="localPath.register" style="font-size: 16px;">Đăng ký tài khoản</RouterLink>
          <RouterLink to="/about" style="font-size: 16px;">Quên mật khẩu</RouterLink>
        </a-col>
        <a-col :span="24">
          <a-button style="width: 100%; height: 50px; border-radius: 30px; font-weight: bold; font-size: 20px;"
            >Đăng nhập</a-button
          >
        </a-col>
        <a-col :span="24">
          <a-divider>Đăng nhập với mạng xã hội</a-divider>
        </a-col>
        <a-col :span="24">
          <a-button
            style="
              width: 100%;
              height: 50px;
              background-color: #2596be;
              color: white;
              border-radius: 50px;
              font-weight: bold;
              position: relative;
            "
          >
            <img
              src="../assets/img/google.svg"
              alt="logo-google"
              style="
                position: absolute;
                background-color: white;
                border-radius: 50%;
                top: 0;
                left: 0;
                width: 70px;
                height: 70px;
                margin: -10px 0 0 -10px;
                z-index: 1;
              "
            />
            <span style="z-index: 0">Đăng nhập với Google</span>
          </a-button>
        </a-col>
        <a-col :span="24" style="margin-top: 10px">
          <a-button
            style="
              width: 100%;
              height: 50px;
              border-radius: 20px;
              font-weight: bold;
            "
            ><img
              src="../assets/img/facebook.svg"
              alt="logo-facebook"
              style="
                position: absolute;
                background-color: white;
                border-radius: 50%;
                top: 0;
                left: 0;
                width: 70px;
                height: 70px;
                margin: -10px 0 0 -10px;
                z-index: 1;
              "
            /><span>Đăng nhập với Facebook</span></a-button
          >
        </a-col>
      </a-row>
    </div>
  </template>
  
  <script setup lang="ts">
  import { localPath } from "@/defined/path";
  
  </script>