import { Box, styled, Typography } from "@mui/material";

import {
  SiC,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import AnimationComponent from "../AnimationComponent/AnimationComponent";

const technologies = [
  { name: "Python", icon: SiPython },
  { name: "C", icon: SiC },
  { name: "Java", icon: SiOpenjdk },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const TechnologyCard = styled("article")(({ theme }) => ({
  minHeight: "120px",
  padding: "20px 14px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",

  color: theme.palette.secondary.main,

  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.25)"
      : "rgba(255, 255, 255, 0.75)",

  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.3)"
      : "rgba(2, 132, 199, 0.25)"
  }`,

  borderRadius: "12px",

  boxShadow:
    theme.palette.mode === "dark"
      ? "none"
      : "0 6px 20px rgba(15, 23, 42, 0.07)",

  transition:
    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.3s ease",

  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: theme.palette.secondary.main,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 25px rgba(56, 189, 248, 0.18)"
        : "0 8px 25px rgba(2, 132, 199, 0.16)",
  },

  "& svg": {
    fontSize: "38px",
  },
}));

const TechnologyList = () => {
  return (
    <Box sx={{ mt: 7 }}>
      <Typography
        variant="h4"
        color="secondary"
        sx={{ textAlign: "center", mb: 4 }}
      >
        Tecnologias
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            md: "repeat(6, minmax(0, 1fr))",
          },

          gap: 2,
        }}
      >
        {technologies.map((technology, index) => {
          const TechnologyIcon = technology.icon;

          return (
            <AnimationComponent
              key={technology.name}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 60}
            >
              <TechnologyCard>
                <TechnologyIcon />

                <Typography
                  color="text.primary"
                  sx={{ fontWeight: 600, textAlign: "center" }}
                >
                  {technology.name}
                </Typography>
              </TechnologyCard>
            </AnimationComponent>
          );
        })}
      </Box>
    </Box>
  );
};

export default TechnologyList;