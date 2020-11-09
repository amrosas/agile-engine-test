const BASE_URL = 'http://localhost:4000'
import balance from '../utils/balance.json';
import movements from '../utils/movements.json';

// export const getBalance = () => {
//   return fetch(BASE_URL + '/', {mode: "no-cors"});
// }

// export const getMovements = () => {
//   return fetch(BASE_URL + '/transaction',  {mode: "no-cors"});
// }

export const getBalance = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(balance), 500)
  })
}

export const getMovements = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(movements), 500)
  })
}