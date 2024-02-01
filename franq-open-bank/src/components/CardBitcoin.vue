<template>
  <div
    class="bg-white rounded-lg p-4 h-60 m-3 hover:shadow-2xl cursor-pointer transition"
    @click="clickCard"
  >
    <div class="grid lg:grid-cols-12 gap-2">
      <div class="col-span-12 flex justify-start">
        <i :class="iconCard" class="text-orange-500 text-2xl"></i>
      </div>
      <div class="col-span-12 flex justify-start">
        <p class="text-blue-400 font-bold">{{ titleCard }}</p>
      </div>
      <div
        class="col-span-12 justify-start grid xl:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-2"
      >
        <p class="text-gray-500 font-bold" v-if="last">
          Último:
          <span class="text-gray-600 ml-2">{{
            new Intl.NumberFormat(formatType[0] === 'BRL' ? 'pt-BR' : 'en-US', {
              style: 'currency',
              currency: formatType[0]
            }).format(last)
          }}</span>
        </p>
        <p class="text-gray-500 font-bold" v-if="buy">
          Comprar:
          <span class="text-gray-600 ml-2">{{
            new Intl.NumberFormat(formatType[0] === 'BRL' ? 'pt-BR' : 'en-US', {
              style: 'currency',
              currency: formatType[0]
            }).format(buy)
          }}</span>
        </p>
        <p class="text-gray-500 font-bold" v-if="sell">
          Vender:
          <span class="text-gray-600 ml-2">{{
            new Intl.NumberFormat(formatType[0] === 'BRL' ? 'pt-BR' : 'en-US', {
              style: 'currency',
              currency: formatType[0]
            }).format(sell)
          }}</span>
        </p>
        <p class="text-gray-500 font-bold" v-if="variation">
          Variação:
          <span
            class="ml-2"
            :class="Math.sign(variation) === 1 ? 'text-green-500' : 'text-red-500'"
            >{{
              new Intl.NumberFormat('default', {
                style: 'percent'
              }).format(variation)
            }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['clickCard'])
const props = defineProps({
  titleCard: {
    type: String,
    required: true
  },
  iconCard: {
    type: String,
    required: true
  },
  last: {
    type: Number,
    required: true
  },
  buy: {
    type: Number,
    required: true
  },
  sell: {
    type: Number,
    required: true
  },
  variation: {
    type: Number,
    required: true
  },
  formatType: {
    type: String,
    required: true
  }
})

const clickCard = () => {
  emit('clickCard')
}

const titleCard = ref(props.titleCard)
// const iconCard = ref(props.iconCard)
</script>
