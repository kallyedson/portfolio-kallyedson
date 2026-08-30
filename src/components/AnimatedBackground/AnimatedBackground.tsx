import { keyframes, styled } from "@mui/material/styles";

const pulse = keyframes`
  0%,
  100% {
    transform: scale(0.86);
    opacity: 0;
  }

  50% {
    transform: scale(1.08);
    opacity: 0.9;
  }
`;

const AnimatedCircle = styled("div")(({ theme }) => ({
  width: "100%",
  aspectRatio: "1 / 1",

  borderRadius: "50%",
  border: `2px solid ${theme.palette.secondary.main}`,

  background:
    theme.palette.mode === "dark"
      ? "radial-gradient(circle, rgba(56, 189, 248, 0.14), transparent 70%)"
      : "radial-gradient(circle, rgba(2, 132, 199, 0.1), transparent 70%)",

  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 40px rgba(56, 189, 248, 0.35)"
      : "0 0 35px rgba(2, 132, 199, 0.25)",

  transformOrigin: "center",
  animation: `${pulse} 3s ease-in-out infinite`,
  willChange: "transform, opacity",
}));

const AnimatedBackground = () => {
  return <AnimatedCircle />;
};

export default AnimatedBackground;