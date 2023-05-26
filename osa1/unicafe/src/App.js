import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Header = ({text}) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, num, extra=''}) => (
  <tr> 
    <td>{text}</td> 
    <td>{num} {extra}</td>
  </tr>
)

const Round = num => Math.round(num * 10) / 10 

const Statistics = ({props}) => {
  const avg = Round((props.good-props.bad) / props.all)
  const pos = Round(props.good*100 / props.all)

  if (props.all == 0) return <>No feedback given</>

  return(
    <div>
      <table>
        <StatisticLine text='good' num={props.good} />
        <StatisticLine text='neutral' num={props.neutral} />
        <StatisticLine text='bad' num={props.bad} />
        <StatisticLine text='all' num={props.all} />
        <StatisticLine text='avg' num={avg} />
        <StatisticLine text='pos' num={pos} extra='%'/>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0, all: 0
  })
  const GoodClickHandler = () =>
    setClicks({...clicks, good: clicks.good + 1, all: clicks.all +1})
  const NeutralClickHandler = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1, all: clicks.all +1})
  const BadClickHandler = () =>
    setClicks({...clicks, bad: clicks.bad + 1, all: clicks.all +1})

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={GoodClickHandler} text='good'/>
      <Button handleClick={NeutralClickHandler} text='neutral'/>
      <Button handleClick={BadClickHandler} text='bad'/>
      <Header text='statistics' />
      <Statistics props={clicks} />
    </div>
  )
}

export default App