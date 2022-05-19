import { Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Underline from '../../../../images/svg/Underline'
import CodifyWork from '../../../shared/teachHub/CodifyWork';

export default function HowCodifyWork({title, CodifyData}) {
  return (
    <Container maxWidth="xl" sx={{ pb: 7, marginTop:"40px" }}>
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
          sx={{ justifyContent: { xs: "center", lg: "center" }, flexWrap: {xs:"wrap", xlg: "nowrap", lg:"nowrap"} }}
          gap={4}
        >
            {CodifyData.map((item)=> {
            return (
            <Grid key={item.id} item sx={{ width: 420 }}>
                <CodifyWork
                  title={item.Header}
                  content={item.Content}
                  icon={item.IconImage}
                />
            </Grid>
            );
            })}
        </Grid>
    </Container>
  )
}
