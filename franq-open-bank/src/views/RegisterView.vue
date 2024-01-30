<template>
  <section class="flex justify-center items-center h-screen">
    <div class="w-1/2 m-5 rounded-2xl shadow-xl p-10 bg-white container">
      <div class="flex justify-center">
        <div class="container mt-4 text-indigo-400 font-bold ml-4">
          <i class="fa-solid fa-users text-2xl"></i>
          <span class="ml-5">Cadastro de Usuário</span>
        </div>
      </div>
      <form class="mt-10">
        <div class="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-2">
          <InputText
            class="mt-5"
            :label-name="'Usuário'"
            :iput-name="'userName'"
            v-model:model-value="userData.userName"
            :place-holder="'Digite seu usuário'"
          />
          <InputEmail
            class="mt-5"
            :label-name="'E-mail'"
            :iput-name="'email'"
            v-model:model-value="userData.email"
            :place-holder="'Digite seu E-mail'"
          />
          <InputPassword
            class="mt-5"
            :label-name="'Senha'"
            iput-name="'password'"
            v-model:model-value="userData.password"
            :place-holder="'Digite sua senha'"
          />
          <InputPassword
            class="mt-5"
            :label-name="'Confirmar Senha'"
            iput-name="'password'"
            v-model:model-value="confirmPassword"
            :place-holder="'Confirmar senha'"
          />
        </div>
        <div class="flex justify-center">
          <button
            @click.prevent="registerUser"
            class="w-40 bg-indigo-400 text-white px-4 py-2 rounded-md mt-6 hover:bg-indigo-600 transition ease-in-out delay-150"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import InputEmail from '@/components/InputEmail.vue'
import InputPassword from '@/components/InputPassword.vue'
import { inject, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const user = useUserStore()
const swal: any = inject('$swal')
const userData = ref({
  userName: '',
  password: '',
  email: ''
})
const confirmPassword = ref('')

const confirm = () => {
  if (userData.value.password === confirmPassword.value) {
    return true
  } else {
    swal.fire({
      title: 'Atenção!',
      icon: 'warning',
      confirmButtonText: 'Ok',
      text: 'As senhas não coincidem!'
    })

    return false
  }
}

const registerUser = () => {
  if (confirm()) {
    user.register(userData.value).then((res) => {
      if (res) {
        swal
          .fire({
            title: 'Tudo Certo!',
            icon: 'success',
            confirmButtonText: 'Ok',
            text: 'Cadastro realizado com sucesso!'
          })
          .then((result: any) => {
            if (result.isConfirmed) {
              router.push('/')
            }
          })
      }
    })
  }
}
</script>

<style></style>
