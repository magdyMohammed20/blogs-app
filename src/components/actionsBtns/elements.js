import styled from 'styled-components';

/* ReUsable Styled Elemenets Or Tags To Be Used Instead Of Inline Class Syntax */

const ActionParent = styled.div.attrs({
    className:
      "flex justify-end mb-6",
})``;

const ActionInnerParent = styled.div.attrs({
    className:
      "flex justify-between gap-2",
})``;

const DeleteBtn = styled.button.attrs({
    className:
      "bg-red-100 w-[35px] h-[35px] flex justify-center items-center rounded-full hover:bg-red-200 focus:bg-red-200 active:bg-red-300",
})``;

const EditBtn = styled.button.attrs({
    className:
      "bg-blue-100 w-[35px] h-[35px] flex justify-center items-center rounded-full hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-300",
})``;



  
export {
    ActionParent,
    ActionInnerParent,
    DeleteBtn,
    EditBtn
}