import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateArticle } from "../../store/blogs/blogSlice"; // Import updateArticle Action For Using To Update Article
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
} from "./elements"; // Update Dialog Reusable Styled Components Elements

/* 
  EditBlogDialog : From For Update Article

  props(
    toggleEditDialog : Method For Close The Dialog After Update Article
    setShowAlertForUpdate : state setter For Show The Update Alert Component After Update Article
    title: Original article title for show/Edit It In The Form
    description: Original article description for show/Edit It In The Form
    id: ID Of Article To Use It In Update Action
  )
*/
const EditBlogDialog = ({
  toggleEditDialog,
  setShowAlertForUpdate,
  title,
  description,
  id,
}) => {
  const [editedTitle, setEditedTitle] = useState(title ? title : ""); // If Title Exists Set It As Value Else Set '' As Default Value
  const dispatch = useDispatch();

  // If description Exists Set It As Value Else Set '' As Default Value
  const [editedDescription, setEditedDescription] = useState(
    description ? description : ""
  );

  // For Handle Title Change In The State
  const handlechangeTitle = (val) => {
    setEditedTitle(val);
  };

  // For Handle Description Change In The State
  const handlechangeDescription = (val) => {
    setEditedDescription(val);
  };

  // Function For Update The Article Data
  const handleUpdate = () => {
    // Dispatch Update Action And Passing Required Data For Update
    dispatch(updateArticle({ id, editedTitle, editedDescription }));
    // Close EditDialog After Update
    toggleEditDialog();
    // Show Success Alert After Update
    setShowAlertForUpdate(true);
  };

  // Submit Function That Handle Submit Of Data After Update
  const handleSubmit = (e) => {
    // Prevent Form Default Action
    e.preventDefault();
    // Call Update Article Action
    handleUpdate();
  };
  return (
    <DialogParent>
      <DialogInnerParent onClick={(e) => e.stopPropagation()}>
        <div className="p-4">
          {/* Modal content */}
          <div className="relative">
            {/* Modal header */}
            <DialogHeader>
              <HeaderTitle>Edit Article</HeaderTitle>
              <CloseBtn type="button" onClick={toggleEditDialog}>
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
                    onChange={(e) => handlechangeTitle(e.target.value)}
                    value={editedTitle}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <DescTextarea
                    onChange={(e) => handlechangeDescription(e.target.value)}
                    value={editedDescription}></DescTextarea>
                </div>

                {/* Disable Update Button If Data Not Changed */}
                <UpdateBtn
                  disabled={
                    title == editedTitle && description == editedDescription
                  }>
                  Update
                </UpdateBtn>
              </form>
            </div>
          </div>
        </div>
      </DialogInnerParent>
    </DialogParent>
  );
};

export default EditBlogDialog;
