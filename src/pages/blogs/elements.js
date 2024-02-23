import styled from 'styled-components';

const BlogsTitleParent = styled.div.attrs({
    className: "mx-auto max-w-screen-sm text-center lg:mb-16 mb-8",
})``;

const BlogsTitle = styled.h2.attrs({
    className: "mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black",
})``;

const BlogsParagraph = styled.p.attrs({
    className: "font-light  sm:text-xl text-gray-700",
})``;

const Button = styled.button.attrs({
    className: "focus:ring-4 focus:bg-blue-800 active:bg-blue-900 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg flex items-center gap-1",
})``;


const BlogsGrid = styled.div.attrs({
    className: "grid  gap-4 gap-y-7 mt-12",
})``;

  
export {
   
    BlogsTitleParent,
    BlogsTitle,
    BlogsParagraph,
    Button,
    BlogsGrid
}