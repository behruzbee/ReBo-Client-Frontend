import axios from 'axios'
import { apiInstance } from './instance'

interface ICreateHistory {
  worker_id: string
  work_place_name: string
  status_type: 'enter' | 'exit'
}

export const createHistory = async (history: ICreateHistory) => {
  try {
    const result = await apiInstance.post('/history/public', history)
    alert("Muvaffaqiyatli!")
    return result.data
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      console.log(err)
      return alert(err.response.data.message)
    }
    console.log(err)
    alert('Server javob bermayapti! Eskiz.uz ga server uchun raxmat )')
  }
}
