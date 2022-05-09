import React from 'react'
import ChannelButton from '../ChannelButton'

import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="CS GO" />
      <ChannelButton channelName="Valorant" />
      <ChannelButton channelName="Warcraft 3" />
    </Container>
  )
}

export default ChannelList