export const validateEmail = (email: any) => {
  // Expressão regular para validar um e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return regexEmail.test(email)
}
