import React from 'react'
import Exercise1 from './1/Exercise'
import Exercise2 from './2/Exercise'
import Exercise3 from './3/Exercise'
import Exercise4 from './4/Exercise'
import Exercise5 from './5/Exercise'

const App = () => {
  const exerciseComponents = {
    1: Exercise1,
    2: Exercise2,
    3: Exercise3,
    4: Exercise4,
    5: Exercise5,
  }
  let exerciseNumber = prompt(
    'Which exercise do you want to run? Please give exercise number between 1 to 5.',
  )

  if (exerciseComponents[parseInt(exerciseNumber)] !== undefined) {
    const Exercise = exerciseComponents[exerciseNumber]

    return (
      <div>
        <Exercise />
      </div>
    )
  }

  return (
    <div>
      <p>
        No exercise found for the given number: {exerciseNumber}, please make
        sure you have provided a bumber between 1 to 5.
      </p>
    </div>
  )
}

export default App
