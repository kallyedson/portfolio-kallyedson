import { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useColorMode } from "../../contexts/ColorModeContext";

const navigationItems = [
  { label: "Início", sectionId: "inicio" },
  { label: "Sobre", sectionId: "sobre" },
  { label: "Hobbies", sectionId: "hobbies" },
  { label: "Formação", sectionId: "formacao" },
  { label: "Projetos", sectionId: "projetos" },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: theme.palette.text.primary,

  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(2, 6, 23, 0.88)"
      : "rgba(248, 250, 252, 0.9)",

  backdropFilter: "blur(12px)",
  borderBottom: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.18)"
      : "rgba(2, 132, 199, 0.2)"
  }`,

  transition: "background-color 0.3s ease, color 0.3s ease",
}));

const StyledToolbar = styled(Toolbar)({
  width: "100%",
  maxWidth: "1200px",
  minHeight: "64px !important",
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
});

const LogoButton = styled("button")(({ theme }) => ({
  padding: 0,

  color: theme.palette.secondary.main,
  backgroundColor: "transparent",
  border: 0,

  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: "1.25rem",
  fontWeight: 600,
  letterSpacing: "0.08em",

  cursor: "pointer",
}));

const DesktopNavigation = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  position: "relative",
  minWidth: "auto",
  padding: "8px 10px",

  color: theme.palette.text.primary,
  fontSize: "0.82rem",
  fontWeight: 600,

  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: "2px",

    width: 0,
    height: "2px",
    backgroundColor: theme.palette.secondary.main,

    transition: "width 0.25s ease, left 0.25s ease",
  },

  "&:hover": {
    color: theme.palette.secondary.main,
    backgroundColor: "transparent",
  },

  "&:hover::after": {
    left: 0,
    width: "100%",
  },
}));

const ThemeButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.3)"
      : "rgba(2, 132, 199, 0.3)"
  }`,

  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(56, 189, 248, 0.1)"
        : "rgba(2, 132, 199, 0.1)",
  },
}));

const MobileActions = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "8px",

  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "270px",
    padding: "18px",

    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === "dark" ? "#020617" : "#f8fafc",

    borderLeft: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(56, 189, 248, 0.25)"
        : "rgba(2, 132, 199, 0.25)"
    }`,
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "18px",
  marginBottom: "10px",

  borderBottom: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(56, 189, 248, 0.18)"
      : "rgba(2, 132, 199, 0.18)"
  }`,
}));

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { mode, toggleColorMode } = useColorMode();

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const themeButton = (
    <Tooltip
      title={
        mode === "dark"
          ? "Ativar modo claro"
          : "Ativar modo escuro"
      }
    >
      <ThemeButton
        onClick={toggleColorMode}
        aria-label={
          mode === "dark"
            ? "Ativar modo claro"
            : "Ativar modo escuro"
        }
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </ThemeButton>
    </Tooltip>
  );

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <StyledToolbar>
          <LogoButton
            type="button"
            onClick={() => scrollToSection("inicio")}
            aria-label="Voltar ao início"
          >
            KLS
          </LogoButton>

          <DesktopNavigation>
            {navigationItems.map((item) => (
              <NavigationButton
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.label}
              </NavigationButton>
            ))}

            {themeButton}
          </DesktopNavigation>

          <MobileActions>
            {themeButton}

            <MobileMenuButton
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <MenuIcon />
            </MobileMenuButton>
          </MobileActions>
        </StyledToolbar>
      </StyledAppBar>

      <StyledDrawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <DrawerHeader>
          <Typography color="secondary" sx={{ fontWeight: 600 }}>
            Navegação
          </Typography>

          <IconButton
            color="inherit"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <List>
          {navigationItems.map((item) => (
            <ListItemButton
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              sx={{
                mb: 1,
                borderRadius: "8px",

                "&:hover": {
                  color: "secondary.main",
                  backgroundColor:
                    mode === "dark"
                      ? "rgba(56, 189, 248, 0.08)"
                      : "rgba(2, 132, 199, 0.08)",
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </StyledDrawer>
    </>
  );
};

export default NavBar;