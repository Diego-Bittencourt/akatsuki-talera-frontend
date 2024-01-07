<template>
    <div class="layout">
        <TheHeader />
        <slot />
        <footer>
            here goes the footer
        </footer>
    </div>

</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';



</script>


<style scoped>


</style>