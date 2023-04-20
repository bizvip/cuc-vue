<template>
    <a-layout-content class="flex flex-col">
        <statistics v-if="userStore.user && userStore.user.dashboard === 'statistics'"/>
        <work-panel v-else-if="userStore.user"/>
    </a-layout-content>
</template>

<script setup>
import { useUserStore } from '@/store'
import Statistics from './statistics.vue'

const userStore = useUserStore()
</script>
<script>
export default { name: 'work-panel' }
</script>
