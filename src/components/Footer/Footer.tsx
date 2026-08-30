import {
  Box,
  Container,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledFooter = styled("footer")(({ theme }) => ({
  padding: "32px 0",

  color: theme.palette.text.secondary,

  backgroundColor:
    theme.palette.mode === "dark" ? "#000000" : "#e2e8f0",

  borderTop: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.2)"
      : "rgba(2, 132, 199, 0.2)"
  }`,

  transition: "background-color 0.35s ease, color 0.35s ease",
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const FooterLink = styled("a")(({ theme }) => ({
  width: "42px",
  height: "42px",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  color: theme.palette.text.primary,
  backgroundColor: "transparent",

  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.3)"
      : "rgba(2, 132, 199, 0.3)"
  }`,

  borderRadius: "50%",
  textDecoration: "none",
  cursor: "pointer",

  transition: "0.25s",

  "&:hover": {
    color: "#ffffff",
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    transform: "translateY(-3px)",
  },

  "& svg": {
    fontSize: "24px",
  },
}));

const BackToTopButton = styled("button")(({ theme }) => ({
  width: "42px",
  height: "42px",
  padding: 0,

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  color: theme.palette.text.primary,
  backgroundColor: "transparent",

  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.3)"
      : "rgba(2, 132, 199, 0.3)"
  }`,

  borderRadius: "50%",
  cursor: "pointer",
  transition: "0.25s",

  "&:hover": {
    color: "#ffffff",
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    transform: "translateY(-3px)",
  },

  "& svg": {
    fontSize: "24px",
  },
}));

const Footer = () => {
  const returnToTop = () => {
    document.getElementById("inicio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <FooterContent>
          <Box>
            <Typography color="text.primary" sx={{ fontWeight: 600 }}>
              Kallyedson Lino dos Santos
            </Typography>

            <Typography variant="body2" sx={{ mt: 0.5 }}>
              © {new Date().getFullYear()} • Desenvolvido com React e TypeScript
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Tooltip title="GitHub">
              <FooterLink
                href="https://github.com/kallyedson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir GitHub"
              >
                <GitHubIcon />
              </FooterLink>
            </Tooltip>

            <Tooltip title="Enviar e-mail">
              <FooterLink
                href="mailto:kallyedsolino57@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio"
                aria-label="Enviar e-mail"
              >
                <EmailOutlinedIcon />
              </FooterLink>
            </Tooltip>

            <Tooltip title="Voltar ao início">
              <BackToTopButton
                type="button"
                onClick={returnToTop}
                aria-label="Voltar ao início"
              >
                <KeyboardArrowUpIcon />
              </BackToTopButton>
            </Tooltip>
          </Box>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;