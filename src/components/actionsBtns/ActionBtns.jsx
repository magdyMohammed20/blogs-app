import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Trash, Pen } from "lucide-react"; // Import Icons For Delete And Edit Articles Buttons
import EditBlogDialog from "../EditBlogDialog/EditBlogDialog"; // Import Edit Article Dialog
import { deleteArticle } from "../../store/blogs/blogSlice"; // Import Delete Action For Using To Delete Specific Article
/* Import The Reusable Styled Component Elemenets */
import {
  ActionParent,
  ActionInnerParent,
  DeleteBtn,
  EditBtn,
} from "./elements";

import Alert from "../Alert/Alert"; // Import Alert Component For Show Update Or Delete Article Status

const ActionBtns = ({ title, description, id }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false); // State For Open/Close The Edit Article Dialog
  const [showAlertForUpdate, setShowAlertForUpdate] = useState(false); // State For Show/Hide The Update Article Alert
  const [showAlertForDelete, setShowAlertForDelete] = useState(false); // State For Show/Hide The Delete Article Alert

  const dispatch = useDispatch(); // dispath : For Dispatching Slice Actions

  // useEffect : For Detect Change Of Showing The Alert After Update Article To Hide It After 5 Seconds
  useEffect(() => {
    setTimeout(() => {
      setShowAlertForUpdate(false);
    }, 5000);
  }, [showAlertForUpdate]);

  // useEffect : For Detect Change Of Showing The Alert After Delete Article To Hide It After 5 Seconds
  useEffect(() => {
    setTimeout(() => {
      setShowAlertForDelete(false);
    }, 5000);
  }, [showAlertForDelete]);

  // For close/Open The Edit Dialog
  // Triggred When Click On Edit Article Button
  // Triggred When Click On The Dialog Close Button
  // Triggred After Submit The New Article Data
  const toggleEditDialog = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  // Function Used For Delete Specific Article When Click On Delete Article Button
  const handleDelete = () => {
    dispatch(deleteArticle(id)); // Dispatching Delete Action By Passing The Article Id To Delete It
    setShowAlertForDelete(true); // Show Delete Alert For Showing Success Of Delete
  };

  return (
    <ActionParent>
      {/* 
        Update Article Alert Component 
        props (
          showAlertForUpdate : Which Is Boolean For close/open the alert
          message : The Alert Message Content
        )
      */}
      <Alert
        showAlert={showAlertForUpdate}
        message={"The Article Updated Successfully"}
      />

      <Alert
        showAlert={showAlertForDelete}
        message={"The Article Deleted Successfully"}
      />

      <ActionInnerParent>
        {/* Delete Article Button */}
        <DeleteBtn onClick={() => handleDelete()}>
          <Trash size={16} className="text-red-700" />
        </DeleteBtn>

        {/* Edit Article Button */}
        <EditBtn onClick={toggleEditDialog}>
          <Pen size={14} color="blue" />
        </EditBtn>

        {/* 
          Show The Edit Article Dialog When isOpenEdit Is True 
          props (
            setShowAlertForUpdate : For Show The Alert After Update The Article
            toggleEditDialog : For Close The Dialog After Update The Data,
            title : Title Of Article
            description : Description Of Article
            id : id Of Article For Using It To Update The Article
          )
        */}
        {isOpenEdit && (
          <EditBlogDialog
            setShowAlertForUpdate={setShowAlertForUpdate}
            toggleEditDialog={toggleEditDialog}
            title={title}
            description={description}
            id={id}
          />
        )}
      </ActionInnerParent>
    </ActionParent>
  );
};

export default ActionBtns;
