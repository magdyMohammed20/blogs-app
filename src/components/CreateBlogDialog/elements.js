import styled from 'styled-components';

const DialogParent = styled.div.attrs({
    className:
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        id:"authentication-modal",
        tabIndex:"-1",
        "aria-hidden": "true"
})``;


const DialogInnerParent = styled.div.attrs({
    className:
        "bg-white rounded-lg shadow-lg w-full max-w-xl",
})``;

const DialogHeader = styled.div.attrs({
    className:
        "flex items-center justify-between p-4 border-b",
})``;

const HeaderTitle = styled.h3.attrs({
    className:
        "text-xl font-semibold text-gray-900",
})``;

const CloseBtn = styled.button.attrs({
    className:
        "text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8",
})``;

const CloseBtnIcon = styled.svg.attrs({
    className:
        "w-3 h-3",
        "aria-hidden":"true",
        xmlns:"http://www.w3.org/2000/svg",
        fill:"none",
        viewBox:"0 0 14 14"
})``;

const CloseBtnPath = styled.path.attrs({
    stroke:"currentColor",
    strokeLinecap:"round",
    strokeLinejoin:"round",
    strokeWidth:"2",
    d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
})``;

const Label = styled.label.attrs({
    className:"block mb-2 text-sm font-medium text-gray-900"
})``;

const TitleInput = styled.input.attrs({
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5",
    type:"text",
    name:"title",
    id:"title",
    required: "",
    placeholder: 'Write Article Title'
})``;

const DescTextarea = styled.textarea.attrs({
    className: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg",
    id:"description",
    rows:"4",
    placeholder: "Write Article description here",
    required: "",
})``;

const UpdateBtn = styled.button.attrs({
    className: "text-white disabled:bg-gray-500 disabled:opacity-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ",
    type:"submit"
})``;



  
export {
    DialogParent,
    DialogInnerParent,
    DialogHeader,
    HeaderTitle,
    CloseBtn,
    CloseBtnIcon,
    CloseBtnPath,
    Label,
    TitleInput,
    DescTextarea,
    UpdateBtn
}