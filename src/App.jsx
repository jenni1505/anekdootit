
import { useState } from 'react'
import './App.css'
import { anecdotes, initialVotes } from './anecdotes'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)
  const [randomNumber, setRandomNumber] = useState(null)

  const showRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1
    setRandomNumber(number)
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <p className="anecdote">{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={showRandomAnecdote}>Show Random Anecdote</button>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && <p className="random-number">Random Number: {randomNumber}</p>}
    </div>
  )
}

export default App
