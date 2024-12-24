import { useCallback } from 'react'

export const useCheckAuth = () => {
  return useCallback(() => {
    let savedPassword = localStorage.getItem('auth-password')

    while (!savedPassword && !savedPassword?.length) {
      const password = prompt('Parolni kiriting!')
      if (password === 'staticpassword777') {
        localStorage.setItem('auth-password', JSON.stringify(password))
        savedPassword = password
      }
    }

    return JSON.parse(savedPassword)
  }, [])
}
