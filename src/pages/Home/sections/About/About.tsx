import { Container, Grid, styled, Typography} from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import TechnologyList from "../../../../components/TechnologyList/TechnologyList";

const StyledAbout = styled("section")(({ theme }) => ({
    background: `linear-gradient(
        to bottom,
        #000000 0%,
        ${theme.palette.primary.main} 22%,
        ${theme.palette.primary.main} 100%
    )`,
    color: theme.palette.primary.contrastText,
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "80px 0",
    overflow: "hidden"
}));

const InfoCard = styled("article")(({ theme }) => ({
    height: "100%",
    padding: "28px",
    borderRadius: "12px",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(56, 189, 248, 0.25)",
    transition: "0.2s",

    "&:hover": {
        transform: "translateY(-4px)",
        borderColor: theme.palette.secondary.main,
        boxShadow: "0 8px 25px rgba(56, 189, 248, 0.15)"
    }
}));

const IconContainer = styled("div")(({ theme }) => ({
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    color: theme.palette.secondary.main,
    backgroundColor: "rgba(56, 189, 248, 0.1)",
    marginBottom: "16px"
}));

const About = () => {
    return (
        <StyledAbout id="sobre">
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    color="secondary"
                    sx={{ textAlign: "center", mb: 5 }}
                >
                    Sobre mim
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <AnimationComponent direction="left">
                            <InfoCard>
                                <IconContainer>
                                    <SchoolOutlinedIcon />
                                </IconContainer>

                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Formação atual
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.7 }}
                                >
                                    Cursando o 5º semestre de Engenharia de
                                    Software na UFC, campus de Russas, e com
                                    formação técnica em Informática pelo ensino
                                    médio.
                                </Typography>
                            </InfoCard>
                        </AnimationComponent>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <AnimationComponent
                            direction="right"
                            delay={120}
                        >
                            <InfoCard>
                                <IconContainer>
                                    <LightbulbOutlinedIcon />
                                </IconContainer>

                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Interesse pela área
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.7 }}
                                >
                                    Meu contato com a Informática no ensino
                                    médio despertou meu interesse por
                                    tecnologia, reforçado pelas oportunidades
                                    do mercado e pela transformação digital.
                                </Typography>
                            </InfoCard>
                        </AnimationComponent>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <AnimationComponent direction="left">
                            <InfoCard>
                                <IconContainer>
                                    <CodeOutlinedIcon />
                                </IconContainer>

                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Foco atual
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.7 }}
                                >
                                    Atualmente, estou aprofundando meus
                                    conhecimentos em Front-end, com foco na
                                    criação de interfaces modernas,
                                    responsivas e fáceis de usar.
                                </Typography>
                            </InfoCard>
                        </AnimationComponent>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <AnimationComponent
                            direction="right"
                            delay={120}
                        >
                            <InfoCard>
                                <IconContainer>
                                    <RocketLaunchOutlinedIcon />
                                </IconContainer>

                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Objetivo profissional
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.7 }}
                                >
                                    Quero continuar evoluindo como
                                    desenvolvedor e ampliar meus conhecimentos
                                    até me tornar um profissional Full Stack.
                                </Typography>
                            </InfoCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <TechnologyList />
            </Container>
        </StyledAbout>
    );
};

export default About;