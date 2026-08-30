import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  href: string;
  target?: "_blank" | "_self";
}

const Button = styled("a")(({ theme }) => ({
  padding: "10px 16px",
  margin: "6px",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",

  color: theme.palette.text.primary,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.25)"
      : "rgba(255, 255, 255, 0.55)",

  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "6px",

  textDecoration: "none",
  fontFamily: "inherit",
  fontSize: "0.85rem",
  fontWeight: 600,
  cursor: "pointer",

  transition:
    "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    color: "#ffffff",
    backgroundColor: theme.palette.secondary.main,
    transform: "translateY(-2px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 6px 20px rgba(56, 189, 248, 0.2)"
        : "0 6px 20px rgba(2, 132, 199, 0.2)",
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