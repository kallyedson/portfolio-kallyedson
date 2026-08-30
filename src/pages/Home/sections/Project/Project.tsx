import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { FaJava } from "react-icons/fa";
import { SiHtml5, SiReact } from "react-icons/si";

import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const projects = [
  {
    title: "Sistema de Achados e Perdidos",
    description:
      "Aplicação desktop desenvolvida em Java para cadastrar pessoas, objetos perdidos e objetos encontrados, além de permitir listagens, geração de relatórios e armazenamento local dos dados.",
    technologies: ["Java", "Java Swing", "POO", "Arquivos"],
    icon: FaJava,
    repository:
      "https://github.com/kallyedson/Gerenciamento-de-Achados-e-Perdidos-",
  },
  {
    title: "Museu Virtual de Curiosidades Históricas",
    description:
      "Site acadêmico que apresenta curiosidades sobre Roma Antiga, Egito Antigo e História do Brasil, utilizando navegação interna e organização semântica do conteúdo.",
    technologies: ["HTML", "CSS", "GitHub Pages"],
    icon: SiHtml5,
    repository:
      "https://github.com/kallyedson/museu-virtual-curiosidades-historicas",
    demo: "https://kallyedson.github.io/museu-virtual-curiosidades-historicas/",
  },
  {
    title: "Gerenciador de Tarefas",
    description:
      "Aplicação web desenvolvida com React para cadastrar, editar, filtrar e remover tarefas, mantendo os dados armazenados localmente no navegador.",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    icon: SiReact,
    repository:
      "https://github.com/kallyedson/desenvolvimento-software-web",
  },
];

const StyledProjects = styled("section")(({ theme }) => ({
  minHeight: "85vh",
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

const ProjectCard = styled("article")(({ theme }) => ({
  position: "relative",
  height: "100%",
  minHeight: "440px",
  padding: "28px",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",

  borderRadius: "14px",
  border: "1px solid rgba(56, 189, 248, 0.25)",
  backgroundColor: "rgba(0, 0, 0, 0.35)",

  transition:
    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "3px",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0 0 14px rgba(56, 189, 248, 0.7)",
  },

  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: theme.palette.secondary.main,
    boxShadow: "0 12px 32px rgba(56, 189, 248, 0.16)",
  },
}));

const IconContainer = styled("div")(({ theme }) => ({
  width: "64px",
  height: "64px",
  marginBottom: "22px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "14px",
  color: theme.palette.secondary.main,
  border: "1px solid rgba(56, 189, 248, 0.35)",
  backgroundColor: "rgba(56, 189, 248, 0.08)",

  "& svg": {
    fontSize: "38px",
  },
}));

const TechnologyTag = styled("span")(({ theme }) => ({
  padding: "5px 10px",
  borderRadius: "16px",

  color: theme.palette.secondary.main,
  backgroundColor: "rgba(56, 189, 248, 0.07)",
  border: "1px solid rgba(56, 189, 248, 0.25)",

  fontSize: "0.78rem",
  fontWeight: 600,
}));

const CardActions = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "auto",
  paddingTop: "24px",
});

const Project = () => {
  return (
    <StyledProjects id="projetos">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          color="secondary"
          sx={{ textAlign: "center", fontWeight: 600, mb: 2 }}
        >
          Projetos
        </Typography>

        <Typography
          component="p"
          color="text.secondary"
          sx={{ textAlign: "center", maxWidth: "680px", mx: "auto", mb: 6 }}
        >
          Alguns projetos acadêmicos e pessoais que representam minha evolução
          no desenvolvimento de software.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
                <AnimationComponent
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 120}
                >
                  <ProjectCard>
                    <IconContainer>
                      <ProjectIcon />
                    </IconContainer>

                    <Typography
                      component="h3"
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {project.title}
                    </Typography>

                    <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.75, mb: 3 }}>
                      {project.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      {project.technologies.map((technology) => (
                        <TechnologyTag key={technology}>
                          {technology}
                        </TechnologyTag>
                      ))}
                    </Box>

                    <CardActions>
                      <Button
                        component="a"
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="secondary"
                        startIcon={<GitHubIcon />}
                      >
                        Código
                      </Button>

                      {project.demo && (
                        <Button
                          component="a"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="secondary"
                          endIcon={<OpenInNewIcon />}
                        >
                          Visualizar
                        </Button>
                      )}
                    </CardActions>
                  </ProjectCard>
                </AnimationComponent>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Project;