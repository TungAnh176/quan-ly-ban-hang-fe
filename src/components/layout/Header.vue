<template>
    <a-anchor>
        <div class="header">
            <a-badge dot="true">
                <a-button>
                    Theo dõi đơn hàng
                </a-button>
            </a-badge>
            <a-button>
                Trợ giúp
            </a-button>
        </div>
        <div style="background-color: black;">
            <a-button style="width: 100%; background-color: black; color: white; height: 40px;">Trả hàng dễ dàng
                <DownOutlined />
            </a-button>
        </div>
        <SideBar />
    </a-anchor>
</template>

<script setup lang="ts">
import SideBar from './SideBar.vue';

</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 0px 100px;
    height: 40px;
    align-items: center;
    background-color: white;
}

button {
    border: none;
    font-weight: 700;
}
</style>