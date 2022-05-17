import { CardContent, Typography } from '@mui/material'
import React from 'react'
import { CardButton, } from '../StyledComponents'
import { SubjectInfoCard, SubjectInfoCardHeader, SubjectInfoCardSubHeader } from './TechStyledComponent'

function SubjectCard({header, subHeader, body, content, Color, secondColor}) {
  return (
    <SubjectInfoCard>
        <SubjectInfoCardHeader sx={{background:Color}}>
        <Typography
          align="center"
          mb={2}
          variant ='h5'
          fontWeight={500}
        >
          {header}
        </Typography>
        </SubjectInfoCardHeader>
        <SubjectInfoCardSubHeader sx={{background: secondColor, borderColor:Color }}>
        <Typography
          align="center"
          mb={2}
          variant ='body1'
          fontWeight="bold"
        >
          {subHeader}
        </Typography>
            <Typography variant="body1" align="center">
                {body}
            </Typography>
        </SubjectInfoCardSubHeader>
        <CardContent>
            <Typography variant="body1" sx={{ color: "secondary.contrastText" }} align="center">
                {content}
            </Typography>
            <CardButton
              variant="contained"
              sx={{background:Color, "&:hover": {background:Color}}}
            >
              Contact Us
            </CardButton>
        </CardContent>
    </SubjectInfoCard>
  )
}

export default SubjectCard