import React, { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messageRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const div = messageRef.current
    
    if (div) {
      div.scrollTo({
        top: div.scrollHeight
      })
    }

  }, [messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
        {
          [...Array(15)].map((i, index) => (
            <ChannelMessage
              key={index}
              author='Caique Moraes'
              date='23/12/2022'
              content='Hoje é o meu aniversário'
            />
          ))
        }
        <ChannelMessage
          author='Diego Fernandes'
          date='23/12/2022'
          isBot
          hasMention
          content={
            <>
              <Mention>@Caique Moraes</Mention>, me carrega no LOL e no CS de novo
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData