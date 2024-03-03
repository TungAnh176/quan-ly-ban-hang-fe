<template>
    <a-row :gutter="[0, 0]" style="height: 60px; display: flex; align-items: center; background-color: white;">
        <a-col :span="8" style="padding: 0 120px;">
            <!-- <RouterLink :to="localPath.home">Home</RouterLink> -->
            <RouterLink :to="localPath.home">
                <img src="../../assets/img/free-adidas-14-761730.png" alt="" style="width: 60px; height: 60px;">
            </RouterLink>
        </a-col>
        <a-col :span="8" style="display: flex; justify-content: center;">
            <a-space size="large">
                <RouterLink to="/">
                    <h2 style="font-weight: 500; color: black;">Nam</h2>
                </RouterLink>
                <RouterLink to="/">
                    <h2 style="font-weight: 500; color: black;">Nữ</h2>
                </RouterLink>
                <RouterLink to="/">
                    <h2 style="font-weight: 500; color: black;">Trẻ em</h2>
                </RouterLink>
                <RouterLink to="/">
                    <h2 style="font-weight: 500; color: black;">Giảm giá</h2>
                </RouterLink>
                <RouterLink to="/">
                    <h2 style="font-weight: 500; color: black;">Sắp và mới ra mắt</h2>
                </RouterLink>
            </a-space>
        </a-col>
        <a-col :span="8" style="display: flex; justify-content: end; padding: 0 100px;">
            <a-space direction="vertical" size="large">
                <a-space size="large" style="font-size: 30px; ">
                    <SearchOutlined style="cursor: pointer;" @click="changeSearchVisible()" />
                    <RouterLink :to="localPath.login">
                        <UserOutlined style="cursor: pointer; color: black;" />
                    </RouterLink>
                    <HeartOutlined style="cursor: pointer;" />
                    <a-badge dot="true" style="cursor: pointer;">
                        <ShoppingCartOutlined style="font-size: 30px;" />
                    </a-badge>
                </a-space>

            </a-space>
        </a-col>
        <a-col :span="24" style="padding: 0 10px; background-color: white;" v-if="searchVisible">
            <a-input size="large" placeholder="Tìm kiếm" style="width: 100%; border-color: #dcdcdc;">
                <template #prefix>
                    <SearchOutlined />
                </template>
            </a-input>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import { HeartOutlined, UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue'
import { localPath } from '@/defined/path';
import { type Ref, ref } from 'vue';

const searchVisible: Ref<boolean> = ref(false);

const changeSearchVisible = () => {
    searchVisible.value = !searchVisible.value;
}
</script>

<style scoped></style>