import styled from 'styled-components';

const ErrorParent = styled.div.attrs({
    className: "hero flex items-center justify-center",
   
})``;

const ErrorInnerParent = styled.div.attrs({
    className: "p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-96",
    role: "alert"
   
})``;


export {
    ErrorParent,
    ErrorInnerParent
}