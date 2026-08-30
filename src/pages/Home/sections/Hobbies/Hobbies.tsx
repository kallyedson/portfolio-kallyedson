import { Container, Grid, styled, Typography } from "@mui/material";

import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsVolleyballOutlinedIcon from "@mui/icons-material/SportsVolleyballOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";

import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const hobbies = [
  {
    title: "Jogos e estratégia",
    description:
      "Gosto de jogos virtuais e também de desafios presenciais, como dominó e jogos de cartas, que envolvem estratégia e raciocínio.",
    icon: SportsEsportsOutlinedIcon,
  },
  {
    title: "Esportes",
    description:
      "Gosto de praticar esportes, principalmente vôlei, tanto pela diversão quanto pela interação e pelo trabalho em equipe.",
    icon: SportsVolleyballOutlinedIcon,
  },
  {
    title: "Séries e animes",
    description:
      "No tempo livre, gosto de assistir séries e animes, especialmente produções que exploram tecnologia, criatividade e desenvolvimento.",
    icon: LiveTvOutlinedIcon,
  },
  {
    title: "Futebol",
    description:
      "Também acompanho futebol e gosto de assistir aos jogos e torcer pelo Flamengo.",
    icon: SportsSoccerOutlinedIcon,
  },
];

const StyledHobbies = styled("section")(({ theme }) => ({
  minHeight: "75vh",
  padding: "96px 0",
  scrollMarginTop: "70px",
  color: theme.palette.primary.contrastText,
  overflow: "hidden",

  background: `linear-gradient(
    to bottom,
    ${theme.palette.primary.main} 0%,
    #050816 45%,
    #000000 100%
  )`,
}));

const HobbyCard = styled("article")(({ theme }) => ({
  height: "100%",
  minHeight: "230px",
  padding: "28px",
  borderRadius: "14px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  backgroundColor: "rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(56, 189, 248, 0.25)",

  transition:
    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: theme.palette.secondary.main,
    boxShadow: "0 10px 30px rgba(56, 189, 248, 0.16)",
  },
}));

const IconContainer = styled("div")(({ theme }) => ({
  width: "56px",
  height: "56px",
  marginBottom: "20px",
  borderRadius: "12px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: theme.palette.secondary.main,
  backgroundColor: "rgba(56, 189, 248, 0.08)",
  border: "1px solid rgba(56, 189, 248, 0.3)",

  "& svg": {
    fontSize: "32px",
  },
}));

const Hobbies = () => {
  return (
    <StyledHobbies id="hobbies">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          color="secondary"
          sx={{ textAlign: "center", fontWeight: 600, mb: 2 }}
        >
          Hobbies e interesses
        </Typography>

        <Typography
          component="p"
          color="text.secondary"
          sx={{ textAlign: "center", maxWidth: "650px", mx: "auto", mb: 6 }}
        >
          Algumas atividades que fazem parte dos meus momentos de lazer e
          descanso.
        </Typography>

        <Grid container spacing={3}>
          {hobbies.map((hobby, index) => {
            const HobbyIcon = hobby.icon;

            return (
              <Grid size={{ xs: 12, sm: 6 }} key={hobby.title}>
                <AnimationComponent
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <HobbyCard>
                    <IconContainer>
                      <HobbyIcon />
                    </IconContainer>

                    <Typography
                      component="h3"
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 600, mb: 1.5 }}
                    >
                      {hobby.title}
                    </Typography>

                    <Typography 
                      component="p"
                      color="text.secondary" 
                      sx={{ lineHeight: 1.8 }}
                    >
                      {hobby.description}
                    </Typography>
                  </HobbyCard>
                </AnimationComponent>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </StyledHobbies>
  );
};

export default Hobbies;