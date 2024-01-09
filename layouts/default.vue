<template>
    <div class="layout">
        <TheHeader />
        <div class="outter">
            <div class="inner">
                <slot />
            </div>
        </div>

        <footer>
            here goes the footer
        </footer>
    </div>
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';



</script>


<style scoped>
.outter {
    @apply bg-front w-screen m-0 py-14;
}

.inner {
    @apply max-w-4xl m-auto;
}
</style>