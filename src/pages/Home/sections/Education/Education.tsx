import { Box, Container, Grid, styled, Typography } from "@mui/material";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";

import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const educationItems = [
  {
    title: "Engenharia de Software",
    institution:
      "Universidade Federal do Ceará (UFC) — Campus de Russas",
    period: "5º semestre • Em andamento",
    description:
      "Durante a graduação, venho desenvolvendo conhecimentos em programação, desenvolvimento web, banco de dados, engenharia de requisitos, redes e arquitetura de software.",
    icon: SchoolOutlinedIcon,
  },
  {
    title: "Técnico em Informática",
    institution: "Formação integrada ao Ensino Médio",
    period: "Concluído",
    description:
      "Foi durante o curso técnico que tive meu primeiro contato com programação, desenvolvimento de sistemas e outras áreas da tecnologia, despertando meu interesse por Engenharia de Software.",
    icon: ComputerOutlinedIcon,
  },
];

const StyledEducation = styled("section")(({ theme }) => ({
  minHeight: "75vh",
  padding: "96px 0",
  scrollMarginTop: "70px",
  color: theme.palette.primary.contrastText,
  overflow: "hidden",

  background: `linear-gradient(
    to bottom,
    #000000 0%,
    #050816 45%,
    ${theme.palette.primary.main} 100%
  )`,
}));

const EducationCard = styled("article")(({ theme }) => ({
  position: "relative",
  height: "100%",
  minHeight: "300px",
  padding: "32px",
  overflow: "hidden",

  borderRadius: "14px",
  border: "1px solid rgba(56, 189, 248, 0.25)",
  backgroundColor: "rgba(0, 0, 0, 0.35)",

  transition:
    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "24px",
    bottom: "24px",
    left: 0,
    width: "3px",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0 0 14px rgba(56, 189, 248, 0.7)",
  },

  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: theme.palette.secondary.main,
    boxShadow: "0 10px 30px rgba(56, 189, 248, 0.16)",
  },
}));

const IconContainer = styled("div")(({ theme }) => ({
  width: "58px",
  height: "58px",
  marginBottom: "22px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "12px",
  color: theme.palette.secondary.main,
  border: "1px solid rgba(56, 189, 248, 0.35)",
  backgroundColor: "rgba(56, 189, 248, 0.08)",

  "& svg": {
    fontSize: "34px",
  },
}));

const Status = styled("span")(({ theme }) => ({
  display: "inline-block",
  margin: "12px 0 18px",
  padding: "6px 12px",

  borderRadius: "20px",
  color: theme.palette.secondary.main,
  backgroundColor: "rgba(56, 189, 248, 0.08)",
  border: "1px solid rgba(56, 189, 248, 0.3)",

  fontSize: "0.85rem",
  fontWeight: 600,
}));

const Education = () => {
  return (
    <StyledEducation id="formacao">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          color="secondary"
          sx={{ textAlign: "center", fontWeight: 600, marginBottom: 2 }}
        >
          Formação
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", maxWidth: "650px", mx: "auto", mb: 6 }}
        >
          Minha trajetória acadêmica e o início do meu contato com a área de
          tecnologia.
        </Typography>

        <Grid container spacing={3}>
          {educationItems.map((education, index) => {
            const EducationIcon = education.icon;

            return (
              <Grid size={{ xs: 12, md: 6 }} key={education.title}>
                <AnimationComponent
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 120}
                >
                  <EducationCard>
                    <IconContainer>
                      <EducationIcon />
                    </IconContainer>

                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {education.title}
                    </Typography>

                    <Typography
                      color="primary.contrastText"
                      sx={{ fontWeight: 600 }}
                    >
                      {education.institution}
                    </Typography>

                    <Status>{education.period}</Status>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {education.description}
                    </Typography>
                  </EducationCard>
                </AnimationComponent>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography color="text.secondary" sx={{ fontSize: "0.9rem" }}>
            Em constante aprendizado e desenvolvimento profissional.
          </Typography>
        </Box>
      </Container>
    </StyledEducation>
  );
};

export default Education;