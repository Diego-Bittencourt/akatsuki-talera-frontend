<template>
    <header class="w-screen p-5 flex justify-between">
        <h1>AKATSUKI</h1>
        <nav>
            <ul>
                <NuxtLink to="/eventos">
                    <li>Eventos</li>
                </NuxtLink>
                <NuxtLink to="/rank">
                    <li>
                        Rank da guilda
                    </li>
                </NuxtLink>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
    @apply w-screen p-5 flex justify-between items-center bg-back;
}

h1 {
    text-shadow: 2px 2px 0px #E8D3B6;
    @apply font-breath text-5xl text-fore;
}

nav {
    @apply w-1/2 font-breath;
}

ul {
    @apply flex justify-around w-full text-lg;
} 

ul * {
    @apply p-2 bg-front text-fore rounded-lg hover:scale-105 transition;
}
</style>