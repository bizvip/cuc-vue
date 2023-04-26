<template>
    <div class="flex justify-between">
        <div class="ma-content-block rounded-sm flex justify-between w-full p-3">
            <div class="pl-0 flex inline-block">
                <a-avatar :size="75" class="hidden lg:inline-block">
                    <img :src="(userStore.user && userStore.user.avatar) ? userStore.user.avatar : '/avatar.jpg'"
                         alt=""/>
                </a-avatar>
                <div class="pl-3 mt-2">
                    <div class="content-block-title">
                        {{ userStore.user.username }}
                        <template v-if="parseInt(userStore.user.status) !== 1">
                            <a-tag color="red" size="medium" bordered>
                                账号已停用
                            </a-tag>
                        </template>
                        <a-space>
                            <a-tag size="medium">
                                最后登陆IP：{{ userStore.user.login_ip }}
                            </a-tag>
                            <a-tag size="medium">
                                最后登陆时间：{{ userStore.user.login_time }}
                            </a-tag>
                        </a-space>
                    </div>
                    <div class="leading-5 mt-2">
                        欢迎使用渠道联盟中心管理系统，同联盟，共发财
                    </div>
                </div>
            </div>
            <div class="datetime ml-5 hidden md:block">
                <h2 class="text-3xl text-center">{{ time }}</h2>
                <p class="text-base">{{ day }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store'
import dayjs from 'dayjs'

const userStore = useUserStore()
const visible = ref(false)

const time = ref(null)
const day = ref(null)

onMounted(() => {
  showTime()
  setInterval(() => showTime(), 1000)
})

const showTime = () => {
  time.value = dayjs().format('HH:mm:ss')
  day.value = dayjs().format('YYYY年MM月DD日')
}

const donate = () => visible.value = true

</script>

<style scoped>
.datetime {
    background: rgb(var(--primary-6));
    color: #fff;
    width: 160px;
    text-align: center;
    border-radius: 3px;
    padding: 5px 10px;
}
</style>