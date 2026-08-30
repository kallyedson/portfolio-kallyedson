import {
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import TechnologyList from "../../../../components/TechnologyList/TechnologyList";

const aboutItems = [
  {
    title: "Formação atual",
    description:
      "Cursando o 5º semestre de Engenharia de Software na UFC, campus de Russas, e com formação técnica em Informática pelo ensino médio.",
    icon: SchoolOutlinedIcon,
  },
  {
    title: "Interesse pela área",
    description:
      "Meu contato com a Informática no ensino médio despertou meu interesse por tecnologia, reforçado pelas oportunidades do mercado e pela transformação digital.",
    icon: LightbulbOutlinedIcon,
  },
  {
    title: "Foco atual",
    description:
      "Atualmente, estou aprofundando meus conhecimentos em Front-end, com foco na criação de interfaces modernas, responsivas e fáceis de usar.",
    icon: CodeOutlinedIcon,
  },
  {
    title: "Objetivo profissional",
    description:
      "Quero continuar evoluindo como desenvolvedor e ampliar meus conhecimentos até me tornar um profissional Full Stack.",
    icon: RocketLaunchOutlinedIcon,
  },
];

const StyledAbout = styled("section")(({ theme }) => ({
  minHeight: "70vh",
  padding: "96px 0",
  scrollMarginTop: "70px",

  display: "flex",
  alignItems: "center",

  color: theme.palette.text.primary,

  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(
          to bottom,
          #000000 0%,
          ${theme.palette.primary.main} 22%,
          ${theme.palette.primary.main} 100%
        )`
      : `linear-gradient(
          to bottom,
          #e2e8f0 0%,
          #f8fafc 25%,
          #f8fafc 100%
        )`,

  overflow: "hidden",

  transition: "background 0.35s ease, color 0.35s ease",
}));

const InfoCard = styled("article")(({ theme }) => ({
  height: "100%",
  minHeight: "240px",
  padding: "28px",

  borderRadius: "14px",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.25)"
      : "rgba(2, 132, 199, 0.25)"
  }`,

  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.25)"
      : "rgba(255, 255, 255, 0.75)",

  boxShadow:
    theme.palette.mode === "dark"
      ? "none"
      : "0 8px 25px rgba(15, 23, 42, 0.08)",

  transition:
    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.3s ease",

  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: theme.palette.secondary.main,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 25px rgba(56, 189, 248, 0.15)"
        : "0 10px 28px rgba(2, 132, 199, 0.16)",
  },
}));

const IconContainer = styled("div")(({ theme }) => ({
  width: "48px",
  height: "48px",
  marginBottom: "18px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: theme.palette.secondary.main,

  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.08)"
      : "rgba(2, 132, 199, 0.08)",

  borderRadius: "10px",

  "& svg": {
    fontSize: "27px",
  },
}));

const About = () => {
  return (
    <StyledAbout id="sobre">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          color="secondary"
          sx={{ textAlign: "center", mb: 6 }}
        >
          Sobre mim
        </Typography>

        <Grid container spacing={3}>
          {aboutItems.map((item, index) => {
            const InfoIcon = item.icon;

            return (
              <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                <AnimationComponent
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <InfoCard>
                    <IconContainer>
                      <InfoIcon />
                    </IconContainer>

                    <Typography
                      variant="h5"
                      component="h3"
                      color="text.primary"
                      sx={{ mb: 1.5 }}
                    >
                      {item.title}
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {item.description}
                    </Typography>
                  </InfoCard>
                </AnimationComponent>
              </Grid>
            );
          })}
        </Grid>

        <TechnologyList />
      </Container>
    </StyledAbout>
  );
};

export default About;