import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, Container, Grid, useTheme, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Underline from '../../../../images/svg/Underline';
import Image from "next/image";

const heightLine= [
    "80px",
    "80px",
    "80px",
    "0"
]
const widthLine=
[
    "3px",
    "3px",
    "3px",
    "0"
]
const TimelineTech = ({TimelineData, title, Media}) => {
    const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ pb: 7, marginTop:"40px"}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item xs={6}>
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        pt: { xs: 3, md: 5 },
        pb: { xs: 5, md: 8 },
      }}
    >
        <Stack
          marginLeft="50px"
          marginBottom="20px"
          alignItems="start"
          textAlign="flex-start"
          mt={5}
          gap={1}
        >
            <Typography variant="h3">
            {title}
          </Typography>
          <Underline />
          </Stack>

        
    <Timeline sx={{display:"block", alignItems:"center"}}>
      {TimelineData.map((item, index)=>{
        return(
      <TimelineItem key={item.id} sx={{width:"min-content"}}>
        <TimelineSeparator>
          <TimelineDot sx={{
              background:"#FFA950", 
              width:"36px",
              height:"36px", 
              textAlign:"center", 
              alignItems:"center", 
              borderStyle:"none", 
              margin:0,
              boxShadow:"none" }} >
              <Typography sx={{paddingLeft:"9px"}}>
                {item.id}
              </Typography>
          </TimelineDot>
          <TimelineConnector sx={{
              background:"#ffd9b2", 
              width:
                (index + 1) / widthLine.length > 1
                ? widthLine[index % widthLine.length]
                : widthLine[index] ,
              height:
                (index + 1) / heightLine.length > 1
                ? heightLine[index % heightLine.length]
                : heightLine[index] 
                }}/>
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h6" sx={{whiteSpace:"nowrap"}}>
                {item.Title}
            </Typography>
        </TimelineContent>
      </TimelineItem>
            )
        })}
    </Timeline>
    </Box>
    </Grid>
    <Grid item xs={12} lg={6} md={6}>
        <Image priority src={Media} layout="responsive" height={600} width={600} alt="Homepage Hero" />
    </Grid>
    </Grid>
    </Container>
  )
}

export default TimelineTech