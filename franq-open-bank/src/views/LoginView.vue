<template>
  <section class="flex justify-center items-center h-screen">
    <div class="w-96 m-5 rounded-2xl shadow-xl p-10 bg-white">
      <figure class="flex justify-center">
        <i class="fa-solid fa-g text-6xl text-cyan-500"></i>
      </figure>
      <form class="mt-16">
        <InputText
          :label-name="'Usuário'"
          :iput-name="'userName'"
          v-model:model-value="userName"
          :place-holder="'Digite seu usuário'"
        />
        <InputPassword
          class="mt-5"
          :label-name="'Senha'"
          iput-name="'password'"
          v-model:model-value="password"
          :place-holder="'Digite sua senha'"
        />
        <button @click.prevent="" class="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-6">
          Entrar
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import InputPassword from '@/components/InputPassword.vue'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// import { inject, ref } from 'vue'
// import { useUserStore } from '@/stores/user'
// import { useClientStore } from '@/stores/client'
// const user = useUserStore()
// const client = useClientStore()
// const swal: any = inject('$swal')
const userName = ref('')
const password = ref('')
// const login = () => {
//   // Simule a autenticação (substitua por sua lógica real)
//   if (this.username === 'usuario' && this.password === 'senha') {
//     // Armazenar dados de login no localStorage
//     localStorage.setItem('user', JSON.stringify({ username: this.username }))

//     // Redirecionar ou realizar outra ação após o login
//     this.$router.push('/dashboard')
//   } else {
//     alert('Usuário ou senha inválidos')
//   }
// }

// }
</script>

<style></style>
