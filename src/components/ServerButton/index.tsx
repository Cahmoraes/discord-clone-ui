import React from 'react'
import { Button } from './styles'
import Logo from '../../assets/logo.svg'

export interface ServerButtonProps {
  selected?: boolean
  isHome?: boolean
  hasNotifications?: boolean
  mentions?: number
}

const ServerButton: React.FC<ServerButtonProps> = ({
  selected, isHome, hasNotifications, mentions
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  )
}

export default ServerButton