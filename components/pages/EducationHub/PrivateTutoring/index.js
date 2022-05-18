import { Container, Grid, useTheme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Underline from '../../../../images/svg/Underline'
import PrivateTutCard from '../../../shared/teachHub/PrivateTutCard';

function PrivateTutoring({title, PrivateTutoringCardsData}) {
    const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ pb: 7, paddingTop:"40px", background: theme.palette.primary.background}}>
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
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{
            textAlign: "-webkit-center",
            marginTop: "20px",
            flexWrap: "nowrap",
            overflowY: "hidden",
          }}
        >
            {PrivateTutoringCardsData.map((item) => {
            return (
              <Grid item xs={4} key={item.id}>
                <PrivateTutCard
                  coverImage={item.coverImage}
                  title={item.Header}
                  description={item.Content}
                />
              </Grid>
            );
          })}
        </Grid>
    </Container>
  )
}

export default PrivateTutoring