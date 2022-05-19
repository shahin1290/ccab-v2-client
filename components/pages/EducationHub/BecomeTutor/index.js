import { Container, Grid, Typography, Stack, Box } from '@mui/material'
import Underline from '../../../../images/svg/Underline'
import PricingOffers from '../../../shared/teachHub/PricingOffers'

const BecomeTutor = ({title, BecomeTutorCardsData}) => {
  return (
    <Container maxWidth="xl" sx={{ pb: 7, marginTop:"40px" }}>
    <Box
        sx={{
            marginTop:"30px",
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
          sx={{ justifyContent: { xs: "center", lg: "center" }, flexWrap:{xs:"wrap", xlg: "nowrap", lg:"nowrap"} }}
          gap={4}
        >
            {BecomeTutorCardsData.map((item)=> {
            return (
            <Grid key={item.id} item sx={{ width: 420 }}>
                <PricingOffers
                  title={item.Title}
                  content={item.Description}
                  icon={item.IconImage}
                />
            </Grid>
            );
            })}
        </Grid>
    </Container>
  )
}

export default BecomeTutor