import styled from "styled-components";
const SearchParent = styled.div.attrs({
    className: "flex items-center w-1/4",
})``;

const InputWrapper = styled.div.attrs({
    className: "relative w-full",
})``;

const InputIconParent = styled.div.attrs({
    className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
})``;

const InputField = styled.input.attrs({
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5   placeholder-gray-400 ",
    type: "text",
    id:"simple-search",
    placeholder:"Search branch name...",
    required: ''
})``;


const Button = styled.button.attrs({
    className: "p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
})``;



export {
    SearchParent,
    InputWrapper,
    InputIconParent,
    InputField,
    Button
}