/* eslint-disable react/prop-types */
import { Box, Container, Grid } from '@mui/material'
import SettingShop from '../components/Shop/SettingShop'
import Sidebar from '../components/Shop/sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const ShopLayout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <Container>
      <Box py={4}>
        {(pathname === '/shop' || pathname === '/shop/') && <SettingShop />}
        <Grid container spacing={4} mt={3.75} sx={{flexWrap: 'nowrap'}}>
          <Box
            component={Grid}
            item
            md={3}
            display={{ xs: 'none', lg: 'block', }}
            sx={{overflow: 'hidden'}}
          >
            <Sidebar />
          </Box>
          {children}
        </Grid>
      </Box>
    </Container>
  )
}

export default ShopLayout
