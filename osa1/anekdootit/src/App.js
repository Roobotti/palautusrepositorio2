import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Text = ({text, vote}) => (
  <div>
    <>{text}</>
    <br></br>
    <>has {vote} votes</>
  </div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const GetRandomInt = (max) => Math.floor(Math.random() * max)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const len = anecdotes.length
   
  const [selected, setSelected] = useState(GetRandomInt(len))
  const [votes, setVotes] = useState(new Array(len).fill(0))

  const MostVoted = () => votes.indexOf(Math.max(...votes))
  
  const NextClickHandler = () => setSelected(GetRandomInt(len))
  const VoteClickHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Header text = 'Anecdote of the day'/>
      <Text text = {anecdotes[selected]} vote={votes[selected]}/>
      <Button handleClick={VoteClickHandler} text='vote'/>
      <Button handleClick={NextClickHandler} text='next anecdote'/>
      <Header text = 'Anecdote with most votes'/>
      <Text text = {anecdotes[MostVoted()]} vote={votes[MostVoted()]}/>
    </div>
  )
}

export default App