import styled from 'styled-components';

const Parent = styled.div.attrs({
    className:
      "p-6 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-white dark:border-gray-700",
  })``;

const HeaderParent = styled.div.attrs({
    className: "flex justify-between items-center mb-5 text-gray-500",
})``;

const HeaderSpan = styled.span.attrs({
    className: "bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800",
})``;

const HeaderDateSpan = styled.span.attrs({
    className: "text-sm italic",
})``;

const HeaderSvg = styled.svg.attrs({
    className: "mr-1 w-3 h-3",
})``;

const HeaderTitle = styled.h1.attrs({
    className: "mb-2 text-2xl font-bold tracking-tight text-gray-900",
})``;

const HeaderDesc = styled.p.attrs({
    className: "mb-5 font-light text-gray-500 dark:text-gray-400",
})``;

const CardFooter = styled.div.attrs({
    className: "flex justify-between items-center",
})``;

const AuthorParent = styled.div.attrs({
    className: "flex items-center space-x-4",
})``;

const AuthorImg = styled.img.attrs({
    className: "w-7 h-7 rounded-full",
    src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
            alt:"Jese Leos avatar"
})``;


const AuthorSpan = styled.span.attrs({
    className: "font-medium text-gray-600 italic",
    
})``;


const ReadMoreLink = styled.a.attrs({
    className: "inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline",
    
})``;

const ReadMoreLinkSvg = styled.svg.attrs({
    className: "ml-2 w-4 h-4",
    
})``;

export {Parent , HeaderParent , HeaderSpan , HeaderSvg , HeaderTitle , HeaderDesc , HeaderDateSpan , CardFooter , AuthorParent , AuthorImg , AuthorSpan , ReadMoreLink , ReadMoreLinkSvg}