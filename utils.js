import throttle from 'lodash.throttle'
import Big from 'big.js'

const PREFIX = 'TTT'

export const get = key => {
  try {
    const data = window.localStorage.getItem(`${PREFIX}__${key}`)
    return JSON.parse(data)
  } catch (e) {
    console.log(e)
    return null
  }
}

export const unset = key => {
  try {
    window.localStorage.removeItem(`${PREFIX}__${key}`)
  } catch (e) {
    console.log(e)
    return null
  }
}

export const set = throttle((key, input) => {
  try {
    const data = JSON.stringify(input)
    window.localStorage.setItem(`${PREFIX}__${key}`, data)
    return JSON.parse(data)
  } catch (e) {
    console.log(e)
  }
}, 100)

export const getETHPrice = async () => {
  try {
    const res = await fetch('https://data.messari.io/api/v1/assets/eth/metrics')
    const data = await res.json()
    return new Big(data.data.market_data.price_usd).toFixed(2)
  } catch (err) {
    return null
  }
}
