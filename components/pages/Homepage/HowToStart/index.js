import {
  Container,
  Stack,
  Box,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import {
  BannerImage,
  InfoCard,
  CustomImageContainer,
  PrimaryButton,
  SecondaryButton,
} from "../../../shared/StyledComponents";

import HappyGuy from "../../../../public/images/happyGuy.png";
import HowToStartImage from "../../../../public/images/howToStart.png";
import { useRouter } from "next/router";
import Underline from "../../../../images/svg/Underline";
import InformationCard from "../../../shared/InformationCard";
import Header from "../../../shared/Header";

const HowToStart = ({
  title,
  subTitle,
  bannerTitle,
  bannerSubTitle,
  cardData,
}) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box bgcolor="secondary.background">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          my: { xs: 2, md: 5 },
          py: { xs: 3, md: 10 },
          gap: { xs: 5, md: 10 },
        }}
      >
        <Header title={title} subTitle={subTitle} color="primary" />
        <Grid
          container
          justifyContent={{ lg: "space-between", xs: "center" }}
          spacing={5}
        >
          <Grid item md={5}>
            <Stack
              spacing={4}
              justifyContent="center"
              alignItems={{ xs: "center", md: "start" }}
              sx={{ maxWidth: "450px", height: "100%" }}
            >
              <Typography variant="h4">{bannerTitle}</Typography>
              <Typography variant="body1">{bannerSubTitle}</Typography>
              <PrimaryButton variant="contained" color="primary">
                Learn More
              </PrimaryButton>
            </Stack>
          </Grid>
          <Grid item md={5}>
            <CustomImageContainer>
              <Image
                priority
                src={HowToStartImage}
                alt="How To Start Image"
                layout="responsive"
              />
            </CustomImageContainer>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
          gap={2}
        >
          {cardData.map((item) => {
            return (
              <Grid item key={item.id} sx={{ width: 294 }}>
                <InformationCard
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                />
              </Grid>
            );
          })}
        </Grid>
        <Container
          maxWidth="xl"
          sx={{
            height: "300px",
            display: "flex",
            alignItems: { sm: "flex-end", xs: "initial" },
            justifyContent: "stretch",
          }}
        >
          <Stack
            direction="row"
            bgcolor="primary.main"
            gap={5}
            sx={{
              width: "100%",
              position: "relative",
              borderRadius: "20px",
              height: { xs: "100%", sm: "80%" },
              alignItems: { md: "flex-end", sm: "center" },
              flexDirection: { sm: "row", xs: "column" },
              backgroundImage:
                'url("/svgImages/BackgroundImages/howMuchBackgroundImage.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Stack
              justifyContent="center"
              sx={{
                pl: { lg: 15, md: 7, sm: 4, xs: 2 },
                pt: { xs: 2, sm: 5 },
                alignItems: { sm: "flex-start", xs: "center" },
                justifyContent: { xs: "center", md: "start" },
                gap: { xs: 2, sm: 0 },
                height: "100%",
                width: { md: "70%", xs: "90%" },
              }}
            >
              <Typography
                sx={{
                  color: "secondary.main",
                  textAlign: { xs: "center", sm: "start" },
                }}
                variant="h3"
              >
                Unsure which course fits you?
              </Typography>
              <Typography
                sx={{
                  color: "common.white",
                  fontWeight: "bold",
                  textAlign: { xs: "center", sm: "start" },
                }}
                variant="h6"
              >
                Talk to our advisor to craft the ideal course plan
              </Typography>
              <SecondaryButton
                variant="contained"
                color="secondary"
                onClick={() => {
                  router.push("/home/ask-advisor");
                }}
              >
                Ask an advisor
              </SecondaryButton>
            </Stack>
            <BannerImage>
              <Image priority src={HappyGuy} alt="Advisor" />
            </BannerImage>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
};

export default HowToStart;
