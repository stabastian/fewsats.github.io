import React, { Component } from 'react'
import Big from 'big.js'
import clsx from 'clsx'
import Main from '../layouts/main'
import CalculatorRow from '../components/calculator-row'
import Select from '../components/select'
import { getETHPrice, get, set, unset } from '../utils'

const LS_KEY = 'bitmex_calculator'

const pairs = [
  { key: 'XBTUSD', value: 'XBTUSD (BitMEX contracts)' },
  { key: 'ETHUSD', value: 'ETHUSD (BitMEX perpetual contracts)' },
  { key: 'ALTS', value: 'Alt pairs (BitMEX, Binance, etc...)' }
]
const STORAGE_VERSION = 3
const defaultFormState = {
  capital: 1,
  entry: 8000,
  stop: 7000,
  target: 9000,
  risk: 5,
  ethPrice: 300,
  usedLeverage: 1
}

export default class Calculator extends Component {
  state = {
    ready: false,
    storageVersion: STORAGE_VERSION,
    pair: 'ALTS',
    form: defaultFormState
  }

  handleInputChange = async e => {
    const name = e.target.name
    const value = e.target.value
    if (e.target.name === 'pair') {
      this.setState(
        {
          pair: e.target.value
        },
        () => {
          set(`${LS_KEY}_pair`, this.state.pair)
          const storedFormState = get(`${LS_KEY}_${this.state.pair}`)
          this.setState({
            form: storedFormState || defaultFormState
          })
        }
      )
      if (value === 'ETHUSD') {
        const ethPrice = await getETHPrice()
        if (ethPrice) {
          this.setState(
            state => {
              return {
                ...state,
                form: { ...state.form, ...{ ethPrice } }
              }
            },
            () => {
              set(`${LS_KEY}_${this.state.pair}`, this.state.form)
            }
          )
        }
      }
      return
    }
    this.setState(
      state => {
        return {
          ...state,
          form: { ...state.form, ...{ [name]: value } }
        }
      },
      () => {
        set(`${LS_KEY}_${this.state.pair}`, this.state.form)
        set(`${LS_KEY}_pair`, this.state.pair)
        set(`${LS_KEY}_storageVersion`, this.state.storageVersion)
      }
    )
  }

  async componentDidMount() {
    const storedPair = get(`${LS_KEY}_pair`) || 'XBTUSD'
    const storageVersion = get(`${LS_KEY}_storageVersion`)
    const storedFormState = get(`${LS_KEY}_${storedPair}`)
    if (storageVersion !== this.state.storageVersion) {
      unset(`${LS_KEY}_XBTUSD`)
      unset(`${LS_KEY}_ETHUSD`)
      unset(`${LS_KEY}_ALTS`)
    }
    this.setState({
      form:
        storedFormState && storageVersion === this.state.storageVersion
          ? storedFormState
          : defaultFormState,
      pair: storedPair,
      ready: true
    })
    const ethPrice = await getETHPrice()
    if (ethPrice) {
      this.setState(
        state => {
          return {
            ...state,
            form: { ...state.form, ...{ ethPrice } }
          }
        },
        () => {
          set(`${LS_KEY}_${this.state.pair}`, this.state.form)
        }
      )
    }
  }

  compute() {
    const result = {
      riskAmount: 0,
      distanceToStop: 0,
      positionSizeBTC: 0,
      positionSize: 0,
      riskReward: 0,
      contractValue: 0,
      margin: 0,
      isLong: false
    }
    try {
      const { form, pair } = this.state
      const {
        capital,
        entry,
        stop,
        target,
        risk,
        ethPrice,
        usedLeverage
      } = form
      const isLong = new Big(target).gt(new Big(entry))
      const riskAmount = new Big(capital)
        .times(new Big(risk).div(100))
        .toFixed(8)
      const distanceToStop = new Big(stop)
        .div(new Big(entry))
        .minus(1)
        .times(isLong ? -100 : 100)
        .toFixed(3)
      const positionSizeBTC = new Big(riskAmount)
        .div(new Big(distanceToStop))
        .times(100)
        .toFixed(8)
      const margin = new Big(positionSizeBTC)
        .div(new Big(usedLeverage))
        .toFixed(8)
      // prettier-ignore
      const riskReward = isLong
        ? new Big(target).minus(new Big(entry)).div(new Big(new Big(entry).minus(new Big(stop)))).toFixed(2)
        : new Big(entry).minus(new Big(target)).div(new Big(new Big(stop).minus(new Big(entry)))).toFixed(2)

      if (pair === 'ETHUSD') {
        // prettier-ignore
        const contractValue = new Big(ethPrice).times(0.000001).toFixed(8)
        result.contractValue = contractValue
        // prettier-ignore
        result.positionSize = new Big(riskAmount).div(contractValue).div(distanceToStop).times(100).toFixed(0)
      } else if (pair === 'ALTS') {
        // prettier-ignore
        result.positionSize = new Big(positionSizeBTC).div(entry).toFixed(2)
      } else if (pair === 'XBTUSD') {
        // prettier-ignore
        result.positionSize = new Big(entry).times(new Big(positionSizeBTC)).toFixed(0)
      }

      result.isLong = isLong
      result.riskReward = riskReward
      result.positionSizeBTC = positionSizeBTC
      result.riskAmount = riskAmount
      result.distanceToStop = distanceToStop
      result.margin = margin
      return result
    } catch (err) {
      console.error('ouch!', err.message)
      return result
    }
  }

  render() {
    const { ready, form, pair } = this.state
    const { capital, entry, stop, target, risk, ethPrice, usedLeverage } = form

    const {
      riskAmount,
      contractValue,
      distanceToStop,
      positionSizeBTC,
      positionSize,
      riskReward,
      margin,
      isLong
    } = this.compute()
    return (
      <Main
        title='BitMEX and Binance Position Size Calculator'
        description='Position Size Calculator for Bitcoin and Altcoins'>
        <div className='max-w-xl mx-auto'>
          <div>
            <h1 className='text-3xl text-left'>Position size calculator</h1>
            {ready && (
              <>
                <div className='mt-8'>
                  <Select
                    name='pair'
                    value={pair}
                    onChange={this.handleInputChange}>
                    {pairs.map(el => (
                      <option key={el.key} value={el.key}>
                        {el.value}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className='mt-4'>
                  <table
                    className={clsx(
                      { 'border-green': isLong },
                      { 'border-red': !isLong },
                      'border-l-2 shadow-xl table-fixed w-full mt-2'
                    )}>
                    <tbody>
                      <CalculatorRow
                        label='Account Balance'
                        name='capital'
                        value={capital}
                        onChange={this.handleInputChange}
                        tip='This is your total account balance.'
                      />
                      <CalculatorRow
                        label='Risk (%)'
                        name='risk'
                        value={risk}
                        onChange={this.handleInputChange}
                        tip='Percentage of acceptable risk.'
                      />
                      {pair === 'ETHUSD' && (
                        <>
                          <CalculatorRow
                            label='ETH price ($)'
                            name='ethPrice'
                            value={ethPrice}
                            onChange={this.handleInputChange}
                            tip='Spot ETH price ($)'
                          />
                          <CalculatorRow
                            label='Contract Value'
                            value={contractValue}
                            readOnly
                            tip='ETH/USD perpetual contract value.'
                          />
                        </>
                      )}
                      <CalculatorRow
                        label='Entry price'
                        name='entry'
                        value={entry}
                        onChange={this.handleInputChange}
                        tip='Position entry price.'
                      />
                      <CalculatorRow
                        label='Stop-Loss Price'
                        name='stop'
                        value={stop}
                        onChange={this.handleInputChange}
                        tip='Stop-Loss price.'
                      />
                      <CalculatorRow
                        label='Take Profit Price'
                        name='target'
                        value={target}
                        onChange={this.handleInputChange}
                        tip='Take Profit price.'
                      />
                      {
                        <CalculatorRow
                          label='Used Leverage'
                          name='usedLeverage'
                          value={usedLeverage}
                          onChange={this.handleInputChange}
                          tip='Used leverage.'
                        />
                      }
                      <CalculatorRow
                        label='Total Margin'
                        value={margin}
                        readOnly
                        tip='Total margin needed according to used leverage.'
                      />
                      <CalculatorRow
                        label='Total Risk in BTC'
                        value={riskAmount}
                        readOnly
                        tip='Maximum loss in case the Stop-Loss gets hit.'
                      />
                      <CalculatorRow
                        label='Distance to Stop-Loss (%)'
                        value={distanceToStop}
                        readOnly
                        tip={
                          <div>
                            <div>
                              Difference between Entry price and Stop-Loss.
                            </div>
                            <div>Expressed in percentage.</div>
                          </div>
                        }
                      />
                      <CalculatorRow
                        label='Position Size in BTC'
                        value={positionSizeBTC}
                        readOnly
                        tip={
                          <div>
                            <div>Position size expressed in BTC.</div>
                            <div className='mt-1'>
                              Calculated with the following formula:
                            </div>
                            <div className='underline'>
                              Position Size = Risk Amount/Distance to Stop
                            </div>
                            <div className='mt-1'>
                              Assuming an account of 1 BTC.
                            </div>
                            <div>A risk of 5% per trade.</div>
                            <div>
                              A 10% distance from the entry to the Stop-Loss.
                            </div>
                            <div className='underline'>
                              Position Size = (1 BTC x 0.05)/0.1 = 0.5 BTC
                            </div>
                          </div>
                        }
                      />
                      <CalculatorRow
                        label='Position Size'
                        value={positionSize}
                        variant={isLong ? 'long' : 'short'}
                        readOnly
                        tip={
                          <div>
                            <div>Position size expressed in USD or $ALT.</div>
                            <div>
                              On BitMEX it corresponds to the amount of
                              contracts to buy.
                            </div>
                            <div>
                              For $ALTS it corresponds to the amount to buy.
                            </div>
                            <div className='mt-1'>
                              Calculated with the following formula:
                            </div>
                            <div className='underline'>
                              Position Size = Entry price * Position Size in BTC
                            </div>
                          </div>
                        }
                      />
                      <CalculatorRow
                        label='Risk Reward Ratio'
                        value={riskReward}
                        readOnly
                        tip='Risk/Reward Ratio.'
                      />
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </Main>
    )
  }
}
