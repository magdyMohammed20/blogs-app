import {
  DialogParent,
  DialogInnerParent,
  DialogHeader,
  HeaderTitle,
  CloseBtn,
  CloseBtnIcon,
  CloseBtnPath,
} from "../../utils/SharedElements"; // Create Dialog Reusable Styled Components Elements

const ViewBlogDialog = ({ toggleViewDialog, currentViewed }) => {
  return (
    <DialogParent>
      <DialogInnerParent onClick={(e) => e.stopPropagation()}>
        <div className="p-4">
          {/* Modal content */}
          <div className="relative">
            {/* Modal header */}
            <DialogHeader>
              <HeaderTitle>{currentViewed.title}</HeaderTitle>
              <CloseBtn type="button" onClick={toggleViewDialog}>
                <CloseBtnIcon>
                  <CloseBtnPath />
                </CloseBtnIcon>
              </CloseBtn>
            </DialogHeader>
            {/* Modal body */}
            <div className="px-8  my-5">
              <h1 className="text-lg font-bold"></h1>
              <p className="text-sm text-gray-700 leading-7">
                {currentViewed.description}
              </p>
            </div>
          </div>
        </div>
      </DialogInnerParent>
    </DialogParent>
  );
};

export default ViewBlogDialog;
