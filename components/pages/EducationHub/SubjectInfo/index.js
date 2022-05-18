import { Container, Grid, useTheme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Underline from '../../../../images/svg/Underline'
import SubjectCard from '../../../shared/teachHub/SubjectCard'

const cardColors = [
  "#6364D9",
  "#ff7f69",
  "#f55167",
  "#ffa950",
];
const cardSecondColors = [
  "#e4e4f3",
  "#ffe8e4",
  "#ffdadf",
  "#ffd9b2",
]

function SubjectInfo({title, SubjectInfoCardData}) {
    const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ pb: 7, marginTop:"40px", background: theme.palette.primary.background}}>
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 3, md: 5 },
        pb: { xs: 5, md: 8 },
      }}
    >
        <Typography variant="h3" mb={1} sx={{paddingBottom:"10px"}}>
            {title}
        </Typography>
        <Underline />
    </Box>
    <Grid
      container
      sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
      gap={2}
    >
        {SubjectInfoCardData.map((item, index) => {
        return(
        <Grid key={item.id} item sx={{ width: 340 }}>
            <SubjectCard
              header={item.Header}
              subHeader={item.SubHeader}
              body={item.Body}
              content={item.Content}
              
              Color={index + 1 / cardColors.length > 1
              ? cardColors[index % cardColors.length]
              : cardColors[index]}

              secondColor={index + 1 / cardSecondColors.length > 1
              ? cardSecondColors[index % cardSecondColors.length]
              : cardSecondColors[index]}
            />
        </Grid>
            );
        })}
    </Grid>
</Container>
  )
}

export default SubjectInfo