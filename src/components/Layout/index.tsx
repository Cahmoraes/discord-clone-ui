import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'

import { Grid } from './styles'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import UserList from '../UserList'
import ChannelData from '../ChannelData'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  )
}

export default Layout