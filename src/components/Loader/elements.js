import styled from "styled-components";
const LoadingParent = styled.div.attrs({
    className: "flex space-x-2 justify-center items-center bg-white h-screen",
})``;

const LoadingFirstChild = styled.div.attrs({
    className: "h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]",
})``;

const LoadingSecondChild = styled.div.attrs({
    className: "h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]",
})``;

const LoadingThirdChild = styled.div.attrs({
    className:"h-8 w-8 bg-black rounded-full animate-bounce"
})``;




export {
    LoadingParent,
    LoadingFirstChild,
    LoadingSecondChild,
    LoadingThirdChild
}