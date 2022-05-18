import { Typography, CardContent } from '@mui/material'
import React from 'react'
import { PricingInfoCard, PricingInfoCardFooter, PricingInfoCardHeader, PricingInfoCardSubHeader } from './TechStyledComponent'

const PricingCard = ({primaryColor, header, price, content, secondaryColor, fees}) => {
  return (
    <PricingInfoCard>
        <PricingInfoCardHeader>
            <Typography
            align="center"
            mb={2}
            variant ='h4'
            fontWeight={500}
            sx={{color: primaryColor}}
            >
                {header}
            </Typography>
        </PricingInfoCardHeader>
        <PricingInfoCardSubHeader sx={{background: primaryColor}}>
            <Typography
            align="center"
            fontSize="3rem"
            fontWeight={400}
            sx={{color: "#fff"}}
            >
                {price}
            </Typography>
        </PricingInfoCardSubHeader>
        <CardContent sx={{borderTop:"5px solid #dee6ea"}}>
            <Typography variant="body1" sx={{ color: "secondary.contrastText" }} align="center">
                {content}
            </Typography>
        </CardContent>
        <PricingInfoCardFooter sx={{background: secondaryColor, borderTop:primaryColor}}>
            <Typography variant="h6" sx={{color: primaryColor}}>
                {fees}
            </Typography>
            <Typography variant="h6" sx={{color: primaryColor}}>
                Registration fee
            </Typography>
        </PricingInfoCardFooter>
    </PricingInfoCard>
  )
}

export default PricingCard