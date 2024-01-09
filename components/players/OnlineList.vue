<template>
    <div>
        <BasicCard>
            <h1>Players da guild online: {{ onlinePlayers.length }}</h1>
        <table>
            <thead>
                <tr>
                    <th>Vocacao</th>
                    <th>Player</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="player in onlinePlayers">
                    <th>
                        <BasicVocation :vocation="player.vocation" />
                    </th>
                    <th>{{ player.name }}</th>
                    <th>{{ player.level }}</th>
                </tr>
            </tbody>
        </table>
        </BasicCard>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BasicVocation from '../UI/BasicVocation.vue';
import BasicCard from '../UI/BasicCard.vue'

const onlinePlayers = ref([])

const data = async () => {
    const response = await fetch('http://localhost:4000/player/online');
    const value = await response.json()
    onlinePlayers.value = value

}


data()
</script>

<style scoped>
table {
    @apply table-auto m-auto border-collapse border;
}

thead {
    @apply bg-back bg-opacity-70;
}

th {
    @apply py-2 px-7 border-collapse border;
}

tr {
    @apply hover:bg-opacity-65 hover:bg-back;
}

div {
    @apply m-auto;
}

h1 {
    @apply font-breath text-3xl mx-auto my-7 text-center;
}
</style>