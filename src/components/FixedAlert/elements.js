import styled from 'styled-components';

const AlertParent = styled.div.attrs({
    className: "flex items-center p-4 mb-4 w-full text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
   
})``;

const AlertSvg = styled.svg.attrs({
    className: "flex-shrink-0 inline w-4 h-4 me-3",
    xmlns:"http://www.w3.org/2000/svg",
    fill:"currentColor",
    viewBox:"0 0 20 20",
    "aria-hidden":"true"
})``;



export {
    AlertParent,
    AlertSvg
}