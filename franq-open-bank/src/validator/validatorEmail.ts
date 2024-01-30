export const validateEmail = (email: any) => {
  // Expressão regular para validar um e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Testar se a string do e-mail corresponde à expressão regular
  return regexEmail.test(email)
}
