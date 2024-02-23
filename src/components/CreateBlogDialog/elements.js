import styled from 'styled-components';
import {     DialogParent,
    DialogInnerParent,
    DialogHeader,
    HeaderTitle,
    CloseBtn,
    CloseBtnIcon,
    CloseBtnPath, } from '../EditBlogDialog/elements';

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