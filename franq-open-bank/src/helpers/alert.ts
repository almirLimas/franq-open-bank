import { inject, ref } from 'vue'
const swal: any = inject('$swal')

export const sucessAlert = () => {
  swal
    .fire({
      title: 'Tudo certo!',
      icon: 'success',
      confirmButtonText: 'Sim',
      text: 'Usuário cadastrado com sucesso!'
    })
    .then((result: any) => {
      if (result.isConfirmed) {
        return true
      }
    })
}
