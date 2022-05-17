import { Container, Grid, useTheme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Underline from '../../../../images/svg/Underline'
import SubjectCard from '../../../shared/teachHub/SubjectCard'

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
        <Typography variant="h3" mb={1}>
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
              Color={(index + 1 ) % 4 === 0 ? "#ffa950" : (index + 1) % 3 === 0 ? "#f55167" : (index + 1) % 2 === 0 ? "#ff7f69" : "#6364D9"}
              secondColor={(index + 1 ) % 4 === 0 ? "#ffd9b2" : (index + 1) % 3 === 0 ? "#ffdadf" : (index + 1) % 2 === 0 ? "#ffe8e4" : "#e4e4f3"}
            />
        </Grid>
            );
        })}
    </Grid>
</Container>
  )
}

export default SubjectInfo