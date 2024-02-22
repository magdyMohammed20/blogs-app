import styled from 'styled-components';

const AlertParent = styled.div.attrs({
    className:
      "w-1/4 fixed top-3  p-4 bg-green-200 border border-green-300 rounded-lg shadow-md transition-opacity duration-500 z-50",
})``;

const AlertInnerParent = styled.div.attrs({
  className:
    "flex gap-2 items-center",
})``;
const AlertParagraph = styled.p.attrs({
    className:
      "text-black",
})``;


  
export {
    AlertParent,
  AlertParagraph,
  AlertInnerParent
}