import {useState} from 'react'
import {MainContainer, MsgContent, NameText} from './styledComponents'

const GreetUser = () => {
  const [count, setCount] = useState(0)
  console.log('component renders')

  const onClickname = () => {
    setCount(prevState => count + 1)
  }
  return (
    <MainContainer>
      <button onClick={onClickname}>click</button>
      <MsgContent>
        Hello <NameText>{count}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
