import { keyframes, styled } from "@mui/material/styles";

const pulse = keyframes`
    0%, 100% {
        transform: scale(0.9);
        opacity: 0.25;
    }

    50% {
        transform: scale(1.05);
        opacity: 0.6;
    }
`;

const AnimatedCircle = styled("div")(({ theme }) => ({
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.secondary.main}`,
    background:
        "radial-gradient(circle, rgba(56, 189, 248, 0.15), transparent 70%)",
    boxShadow: "0 0 40px rgba(56, 189, 248, 0.35)",
    animation: `${pulse} 3s ease-in-out infinite`
}));

const AnimatedBackground = () => {
    return <AnimatedCircle />;
};

export default AnimatedBackground;