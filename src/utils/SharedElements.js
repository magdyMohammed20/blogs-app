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

export {
    DialogParent,
    DialogInnerParent,
    DialogHeader,
    HeaderTitle,
    CloseBtn,
    CloseBtnIcon,
    CloseBtnPath
}