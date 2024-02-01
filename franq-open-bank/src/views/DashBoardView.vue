<template>
  <div class="vl-parent">
    <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
  </div>
  <section class="flex justify-center">
    <div class="p-10 container">
      <div class="flex justify-center">
        <div class="container mt-4 text-yellow-500 font-bold ml-4">
          <i class="fa-brands fa-bitcoin text-4xl"></i>
          <span class="ml-5">Bitcoin</span>
        </div>
      </div>

      <div class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2">
        <CardBitcoin
          v-for="(item, index) in dataBitCoins"
          :key="index"
          :title-card="(item as any).name"
          :icon-card="'fa-brands fa-bitcoin'"
          :buy="(item as any).buy"
          :last="(item as any).last"
          :sell="(item as any).sell"
          :variation="(item as any).variation"
          :format-type="(item as any).format"
        />
      </div>
    </div>
  </section>
  <section class="flex justify-center">
    <div class="p-10 container">
      <div class="flex justify-center">
        <div class="container mt-4 text-green-800 font-bold ml-4">
          <i class="fa-solid fa-sack-dollar text-4xl"></i>
          <span class="ml-5">Ações</span>
        </div>
      </div>

      <div class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2">
        <CardStocks
          v-for="(item, index) in dataStocks"
          :key="index"
          :title-card="(item as any).name"
          :icon-card="'fa-solid fa-sack-dollar'"
          :location="(item as any).location"
          :points="(item as any).points"
          :variation="(item as any).variation"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardBitcoin from '@/components/CardBitcoin.vue'
import CardStocks from '@/components/CardStocks.vue'
import { inject, onMounted, ref } from 'vue'
import { useHgApi } from '@/stores/hgApi'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { initFlowbite } from 'flowbite'

const swal: any = inject('$swal')
const hgApi = useHgApi()
const user = useUserStore()
const dataBitCoins = ref('')
const dataStocks = ref('')

const isLoading = ref(false)
onMounted(() => {
  initFlowbite()
  isLoading.value = true
  user.isLogged = true

  hgApi
    .fincance()
    .then((res) => {
      dataBitCoins.value = res?.data.results.bitcoin
      dataStocks.value = res?.data.results.stocks
    })
    .finally(() => {
      isLoading.value = false
    })
})

setTimeout(async () => {
  if (await user.checkAuthentication()) {
    swal
      .fire({
        title: 'Atenção!',
        icon: 'warning',
        confirmButtonText: 'Ok',
        text: 'Sua sessão foi expirada, por favor, fazer login novamente!'
      })
      .then(() => {
        user.logout()
        router.push('/')
      })
  }
}, 100000)
</script>
