import { Container, Grid, Typography, Stack, Box } from '@mui/material'
import Underline from '../../../../images/svg/Underline'
import CodifyWork from '../../../shared/teachHub/CodifyWork'
import PricingCard from '../../../shared/teachHub/PricingCard'
import PricingOffers from '../../../shared/teachHub/PricingOffers'

const primCol=[
    "#00bde0",
    "#ffa950",
    "#f55167",
    "#4f50ce",
    "#05b79a",
    "#9e40e7"
]
const secCol=[
    "#d0edf5",
    "#f6eae0",
    "#f5dde3",
    "#dfe0f4",
    "#d1eceb",
    "#e8dbf6"
]

const Pricing = ({title, description, PricingCardData, secondTitle, CodifyPricingOffers}) => {
  return (
    <Container maxWidth="xl" sx={{ pb: 7, marginTop:"40px" }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          mt={5}
          gap={1}
        >
          <Typography variant="h3">
            {title}
          </Typography>
          <Underline />
          <Typography
            variant="h6"
            sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
          >
            {description}
          </Typography>
        </Stack>
        <Grid
        container
        sx={{ justifyContent: { xs: "center", lg: "center" }, marginTop:"25px" }}
        gap={10}
        >
          {PricingCardData.map((item, index)=> {
            return(
             <Grid key={item.id} item sx={{ width: 340 }}>
                <PricingCard
                header={item.Header}
                price={item.Price}
                content={item.Content}
                fees={item.Fees}
                primaryColor={index + 1 / primCol.length > 1
                ? primCol[index % primCol.length]
                : primCol[index]}

                secondaryColor={index + 1 / secCol.length > 1
              ? secCol[index % secCol.length]
              : secCol[index]}
                 />
             </Grid>
            );
          })}
        </Grid>
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
                {secondTitle}
            </Typography>
            <Underline />
        </Box>
        <Grid
          container
          sx={{ justifyContent: { xs: "center", lg: "center" } }}
          gap={4}
        >
            {CodifyPricingOffers.map((item)=> {
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

export default Pricing