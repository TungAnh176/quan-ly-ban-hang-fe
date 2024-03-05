<template>
  <a-row
    :gutter="24"
    style="display: flex; justify-content: space-around; margin-top: 50px"
  >
    <a-col :span="11">
      <a-card>
        <img
          src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/gi%C3%A0y-samba-og.jpg"
          alt="Samba OG"
          style="width: 77vh"
        />
      </a-card>
    </a-col>
    <a-col :span="10">
      <a-card :bordered="false">
        <h1>Giày SAMBA OG</h1>
        <p style="font-size: 20px">Giày unisex</p>
        <p style="font-size: 20px">
          <DollarCircleOutlined style="font-size: 20px" /> 2.700.000 vnđ
        </p>
        <h3 style="font-size: 23px">Chọn kích cỡ</h3>
        <a-space wrap>
          <a-button
            style="
              width: 220px;
              height: 80px;
              font-size: 20px;
              text-align: center;
            "
            >37</a-button
          >
          <a-button
            style="
              width: 220px;
              height: 80px;
              font-size: 20px;
              text-align: center;
            "
            >38</a-button
          >
          <a-button
            style="
              width: 220px;
              height: 80px;
              font-size: 20px;
              text-align: center;
            "
            >39</a-button
          >
          <a-button
            style="
              width: 220px;
              height: 80px;
              font-size: 20px;
              text-align: center;
            "
            >40</a-button
          >
          <a-button
            style="
              width: 220px;
              height: 80px;
              font-size: 20px;
              text-align: center;
            "
            >41</a-button
          >
          <a-button
            style="
              width: 220px;
              height: 80px;
              font-size: 20px;
              text-align: center;
            "
            >42</a-button
          >
          <a-button
            style="
              width: 220px;
              height: 80px;
              font-size: 20px;
              text-align: center;
            "
            >43</a-button
          >
          <a-button
            style="
              width: 220px;
              height: 80px;
              font-size: 20px;
              text-align: center;
            "
            >44</a-button
          >
        </a-space>
        <a-col :span="24" style="padding: 0; margin-top: 30px">
          <a-button
            style="
              width: 100%;
              height: 60px;
              background-color: black;
              border-radius: 50px;
              color: white;
              font-size: 20px;
              font-weight: bold;
            "
            >Cho vào giỏ hàng</a-button
          >
        </a-col>
        <a-col :span="24" style="padding: 0; margin-top: 30px">
          <a-button
            style="
              width: 100%;
              height: 60px;
              background-color: white;
              border-radius: 50px;
              color: black;
              font-size: 20px;
              font-weight: bold;
            "
            >Yêu thích <HeartOutlined /></a-button
          >
        </a-col>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { localPath } from "@/defined/path";
import { DollarCircleOutlined, HeartOutlined } from "@ant-design/icons-vue";
</script>
