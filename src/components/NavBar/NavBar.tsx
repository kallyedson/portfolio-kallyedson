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
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navigationItems = [
  { label: "Início", sectionId: "inicio" },
  { label: "Sobre", sectionId: "sobre" },
  { label: "Hobbies", sectionId: "hobbies" },
  { label: "Formação", sectionId: "formacao" },
  { label: "Projetos", sectionId: "projetos" },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(2, 6, 23, 0.88)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(56, 189, 248, 0.18)",
  color: theme.palette.primary.contrastText,
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
  gap: "14px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  position: "relative",
  minWidth: "auto",
  padding: "8px 10px",

  color: theme.palette.primary.contrastText,
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

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: theme.palette.secondary.main,

  [theme.breakpoints.down("md")]: {
    display: "inline-flex",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "270px",
    padding: "18px",

    color: theme.palette.primary.contrastText,
    backgroundColor: "#020617",
    borderLeft: "1px solid rgba(56, 189, 248, 0.25)",
  },
}));

const DrawerHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "18px",
  marginBottom: "10px",
  borderBottom: "1px solid rgba(56, 189, 248, 0.18)",
});

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
          </DesktopNavigation>

          <MobileMenuButton
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <MenuIcon />
          </MobileMenuButton>
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
                  backgroundColor: "rgba(56, 189, 248, 0.08)",
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