<template>
    <div class="w-full lg:w-3/12 ma-content-block rounded-sm ml-0 lg:ml-3 p-3 mt-3">
        <div class="flex">
            公司业务相关
        </div>
        <div class="block lg:grid lg:grid-cols-2 lg:gap-1 mt-3">
            <a-card class="rounded-sm text-center" :body-style="{ padding: 0 }" :bordered="false">
                <a-button
                        type="outline"
                        class="w-4/5"
                        @click="openPage('https://www.google.com')"
                >官方网站
                </a-button>
            </a-card>
            <a-card class="rounded-sm text-center mt-2 lg:mt-0" :body-style="{ padding: 0 }" :bordered="false">
                <a-button
                        type="outline"
                        class="w-4/5"
                        @click="openPage('https://doc.google.com')"
                >官方网站
                </a-button>
            </a-card>
            <a-card class="rounded-sm text-center mt-2" :body-style="{ padding: 0 }" :bordered="false">
                <a-button
                        type="outline"
                        class="w-4/5"
                        @click="openPage('https://官方网站.com/kanyxmo/MineAdmin')"
                >官方网站
                </a-button>
            </a-card>
            <a-card class="rounded-sm text-center mt-2" :body-style="{ padding: 0 }" :bordered="false">
                <a-button
                        type="outline"
                        class="w-4/5"
                        @click="openPage('https://官方网站.com/xmo/MineAdmin')"
                >官方网站
                </a-button>
            </a-card>
            <a-card class="rounded-sm text-center mt-2" :body-style="{ padding: 0 }" :bordered="false">
                <a-button
                        type="outline"
                        class="w-4/5"
                        @click="openPage('https://官方网站.com/xmo/MineAdmin/releases')"
                >官方网站
                </a-button>
            </a-card>
            <a-card class="rounded-sm text-center mt-2" :body-style="{ padding: 0 }" :bordered="false">
                <a-button
                        type="outline"
                        class="w-4/5"
                        @click="openPage('https://doc.官方网站.com/faqs/')"
                >官方网站
                </a-button>
            </a-card>
        </div>
        <div class="w-11/12 mx-auto mt-3">
            <a-tag class="ml-0.5">官方网站</a-tag>
        </div>
    </div>
</template>

<script setup>

const openPage = (url = '') => {
  window.open(url)
}
</script>