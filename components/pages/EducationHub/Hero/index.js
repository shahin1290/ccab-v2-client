import { Grid, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import Image from "next/image";

const Hero = ({Media}) => {
    const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.background} pt={{ lg: 8, xs: 2 }}>
      <Grid container justifyContent="center" alignItems="end">
        <Grid item xs={10} sm={8} md={6} sx={{ display: "block" }}>
          <Image
            priority
            src={Media}
            layout="responsive"
            width={950}
            height={550}
            alt="Software Hub Hero"
            objectFit="contain"
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero