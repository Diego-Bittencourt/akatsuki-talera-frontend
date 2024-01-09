

<template>
    <img :src="`/img/${vocation}`" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps(['vocation']);

const vocation = computed(() => {
    const vocationString = props.vocation;
    switch(vocationString) {
        case 'Druid':
        case 'Elder Druid':
            return 'Paralyse_Rune.gif';
            break;
        case 'Knight':
        case 'Elite Knight':
            return 'Blessed_Shield.gif';
            break;
        case 'Paladin':
        case 'Royal Paladin':
            return 'Royal_Crossbow.gif';
            break;
        case 'Sorcerer':
        case 'Master Sorcerer':
            return 'Sudden_Death_Rune.gif';
            break;
        default:
            return 'Spellbook_of_Ancient_Arcana.gif';
    }
})


</script>

<style>
img {
    @apply h-8 w-8 my-2 mx-auto;
}
</style>