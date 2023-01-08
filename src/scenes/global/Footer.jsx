import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { shades } from '../../theme'

import React from 'react'

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme()
  return (
    <Box mt='70px' p='40px 0' backgroundColor={neutral.light}>
      <Box
        display='flex'
        width='80%'
        margin='auto'
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='30px'
        columnGap='clamp(20px, 30px, 40px)'
      >
        <Box width='clamp(20%, 30%, 40%)'>
          <Typography
            variant='h4'
            fontWeight='bold'
            mb='30px '
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium, sint explicabo eaque non aut quae at odit eligendi,
            atque animi, sed quia provident nostrum officiis possimus eum
            deleniti eius consequuntur!
          </div>
        </Box>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            About us
          </Typography>
          <Typography mb='30px'>Careers</Typography>
          <Typography mb='30px'>Our Stores</Typography>
          <Typography mb='30px'>Terms & Conditions</Typography>
          <Typography mb='30px'>Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            Customer Care
          </Typography>
          <Typography mb='30px'>Help Center</Typography>
          <Typography mb='30px'>Track Your Order</Typography>
          <Typography mb='30px'>Corporate & Bulk Purshasing</Typography>
          <Typography mb='30px'>Returns & Refunds</Typography>
        </Box>
        <Box width='clamp(20%, 25%, 30%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            Contact Us
          </Typography>
          <Typography mb='30px'>50 North Blvd, Washington, DC 10501</Typography>
          <Typography mb='30px' sx={{ wordWrap: 'break-word' }}>
            Email: something@gmail.com
          </Typography>
          <Typography mb='30px'>(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
