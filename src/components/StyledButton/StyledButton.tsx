import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  href: string;
  target?: "_blank" | "_self";
}

const Button = styled("a")(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.contrastText,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "6px",
  padding: "10px 16px",
  margin: "6px",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",

  textDecoration: "none",
  fontFamily: "inherit",
  fontSize: "0.85rem",
  fontWeight: 600,
  cursor: "pointer",

  transition:
    "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    transform: "translateY(-2px)",
  },
}));

const StyledButton = ({
  children,
  href,
  target = "_self",
}: StyledButtonProps) => {
  return (
    <Button
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Button>
  );
};

export default StyledButton;