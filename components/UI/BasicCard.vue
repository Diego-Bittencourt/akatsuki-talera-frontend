<template>
    <div class="card">
<slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card {
    @apply shadow-back shadow-md bg-fore rounded-md p-10 my-10 transition w-fit;
}
</style>