import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import Avatar from "../../../../assets/imagens/avatar.png";

import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const StyledHero = styled("section")({
  minHeight: "100vh",
  padding: "64px 0 40px",

  display: "flex",
  alignItems: "center",

  backgroundColor: "#000000",
  overflow: "hidden",
});

const StyledImg = styled("img")(({ theme }) => ({
  position: "relative",
  zIndex: 1,

  display: "block",
  width: "100%",
  maxWidth: "380px",
  aspectRatio: "1 / 1",
  margin: "0 auto",

  objectFit: "cover",
  borderRadius: "50%",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "280px",
  },
}));

const Hero = () => {
  return (
    <StyledHero id="inicio">
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "420px",
                margin: "0 auto",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 0,
                  width: "108%",
                }}
              >
                <AnimatedBackground />
              </Box>

              <StyledImg
                src={Avatar}
                alt="Foto de Kallyedson Lino dos Santos"
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              component="h1"
              variant="h1"
              color="secondary"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "2.5rem",
                  md: "6rem",
                },
                lineHeight: 1.05,
              }}
            >
              Kallyedson Lino dos Santos
            </Typography>

            <Typography
              component="h2"
              variant="h2"
              color="primary.contrastText"
              sx={{
                mt: 2,
                textAlign: "center",
                fontSize: {
                  xs: "1.5rem",
                  md: "3.75rem",
                },
                lineHeight: 1.15,
              }}
            >
              Software Engineering Student | Front-end Developer
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <StyledButton
                href="https://github.com/kallyedson"
                target="_blank"
              >
                <GitHubIcon />
                MEU GITHUB
              </StyledButton>

              <StyledButton
                href="mailto:kallyedsolino57@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio"
              >
                <EmailIcon />
                CONTATO
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;