<template>
  <section class="flex justify-center items-center h-screen">
    <div class="w-96 m-5 rounded-2xl shadow-xl p-10 bg-white">
      <figure class="flex justify-center">
        <img src="../assets/img/LOGO-frang.svg" alt="Logo da Franq" style="width: 12rem" />
      </figure>
      <form class="mt-16">
        <InputText
          :label-name="'Usuário'"
          :iput-name="'userName'"
          v-model:model-value="userLogin.userName"
          :place-holder="'Digite seu usuário'"
        />
        <InputPassword
          class="mt-5"
          :label-name="'Senha'"
          iput-name="'password'"
          v-model:model-value="userLogin.password"
          :place-holder="'Digite sua senha'"
        />
        <button
          @click.prevent="authenticate"
          class="bg-indigo-400 text-white px-4 py-2 rounded-md w-full mt-6 hover:bg-indigo-600 transition ease-in-out delay-150"
        >
          Entrar
        </button>
        <div class="mt-5 flex justify-center">
          <span class="text-sm mr-1 text-gray-800 font-semibold">Não tem uma conta?</span>

          <span
            class="text-sm font-semibold text-indigo-600 cursor-pointer"
            @click="router.push('/register')"
            >Cadastre-se</span
          >
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import InputPassword from '@/components/InputPassword.vue'
import { inject, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const swal: any = inject('$swal')
const userLogin = ref({
  userName: '',
  password: ''
})
const user = useUserStore()
const authenticate = () => {
  if (userLogin.value.userName !== '' && userLogin.value.password !== '') {
    user.login(userLogin.value).then((res) => {
      if (res) {
        alert('Logado!!!')
      } else {
        swal.fire({
          title: 'Erro!',
          icon: 'error',
          confirmButtonText: 'Ok',
          text: 'Usuário ou senha não encontrado!'
        })
      }
    })
  } else {
    swal.fire({
      title: 'Atenção!',
      icon: 'warning',
      confirmButtonText: 'Ok',
      text: 'Informe um usuário e senha validos!'
    })
  }
}

setInterval(() => {
  // Logout automático após expiração do
  user.logout()
  router.push('/')
}, 50000)

// }
</script>

<style></style>
