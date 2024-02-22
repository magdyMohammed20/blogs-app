import { useState } from "react";
import { useDispatch } from "react-redux";
import { createArticle } from "../../store/blogs/blogSlice"; // Import createArticle Action For Using To Create New Article
import {
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
  UpdateBtn,
} from "./elements"; // Create Dialog Reusable Styled Components Elements

/* 
  CreateBlogDialog : From For Create New Article

  props(
    toggleCreateDialog : Method For Close The Dialog After Create New Article
    setShowAlert : state setter For Show The Create Alert After Create New Article
  )
*/
const CreateBlogDialog = ({ toggleCreateDialog, setShowAlert }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDescModified, setIsDescModified] = useState(false);
  const [isTitleModified, setIsTitleModified] = useState(false);

  const dispatch = useDispatch();

  // Function For Prevent Validation Appear After Submit The Form
  const resetValidation = () => {
    setIsTitleModified(false);
    setIsDescModified(false);
  };

  // Function For Append Article Title Value In The State And setIsTitleModified(true) For Show Validation Message Empty Error If Value Is empty
  const handlechangeTitle = (val) => {
    setTitle(val);
    setIsTitleModified(true);
  };

  // Function For Append Article Description Value In The State And setIsDescModified(true) For Show Validation Message Empty Error If Value Is empty
  const handlechangeDescription = (val) => {
    setDescription(val);
    setIsDescModified(true);
  };

  // Function For Submit The New Article Data
  const handleSubmit = (e) => {
    // Prevent Default Form Action
    e.preventDefault();

    // Call Create New Article With Passing The Required Data
    dispatch(createArticle({ title, description }));

    // Reset The Title And Description Input Value After Submit
    setTitle("");
    setDescription("");

    // Reset The Validation After Submit As Title And Description Is Empty After Submit
    resetValidation();

    // Close The Create New Article Dialog After Submit
    toggleCreateDialog();

    // Show Create Article Alert Message After Submit
    setShowAlert(true);
  };
  return (
    <DialogParent>
      <DialogInnerParent onClick={(e) => e.stopPropagation()}>
        <div className="p-4">
          {/* Modal content */}
          <div className="relative">
            {/* Modal header */}
            <DialogHeader>
              <HeaderTitle>Create New Article</HeaderTitle>
              <CloseBtn type="button" onClick={toggleCreateDialog}>
                <CloseBtnIcon>
                  <CloseBtnPath />
                </CloseBtnIcon>
              </CloseBtn>
            </DialogHeader>
            {/* Modal body */}
            <div className="p-4">
              <form
                className="space-y-4"
                action="#"
                onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <Label>Title</Label>

                  <TitleInput
                    className={`${
                      isTitleModified &&
                      title.length === 0 &&
                      "border border-red-500 outline-none"
                    }`}
                    onChange={(e) => handlechangeTitle(e.target.value)}
                    value={title}
                  />

                  {/* If Title Is Empty Show Validation Error Message */}
                  {isTitleModified && title.length === 0 && (
                    <div className="text-red-600">Please provide a Title.</div>
                  )}
                </div>
                <div>
                  <Label>Description</Label>
                  <DescTextarea
                    className={`${
                      isDescModified &&
                      description.length === 0 &&
                      "border border-red-500 outline-none"
                    }`}
                    onChange={(e) => handlechangeDescription(e.target.value)}
                    value={description}></DescTextarea>

                  {/* If Description Is Empty Show Validation Error Message */}

                  {isDescModified && description.length === 0 && (
                    <div className="text-red-600">
                      Please provide a description.
                    </div>
                  )}
                </div>

                {/* Disable Submit Button If Title Or Description Is Empty */}
                <UpdateBtn disabled={!title || !description}>submit</UpdateBtn>
              </form>
            </div>
          </div>
        </div>
      </DialogInnerParent>
    </DialogParent>
  );
};

export default CreateBlogDialog;
