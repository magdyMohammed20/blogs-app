import {
  Parent,
  HeaderParent,
  HeaderSvg,
  HeaderSpan,
  HeaderTitle,
  HeaderDesc,
  HeaderDateSpan,
  CardFooter,
  AuthorParent,
  AuthorImg,
  AuthorSpan,
  ReadMoreLink,
  ReadMoreLinkSvg,
} from "./elements"; // Reusable Styled Components Elements
import { formatDateDifference } from "../../utils/functions"; // Import (formatDateDifference) For Format publishedAt Date Of The Article
import ActionBtns from "../actionsBtns/ActionBtns"; // Import (Delete - Edit) Actions Buttons
import ViewBlogDialog from "../ViewBlogDialog/ViewBlogDialog";
import { useState } from "react";
/* 
  - Card Component 
  props(
    Blog : Is Object That Contains Required Data To Be Showed In Blog Card Component
  )  
*/
const Card = ({ blog }) => {
  /*
    Title : Is Article Title
    description : Is Article Description
    author : Is Article Author
    url : Link Of Article
    publishedAt : Article Publish Date 
    source : Object That Contains Article ID
  */
  const { title, description, author, url, publishedAt, source } = blog;
  const [openViewDialog, setOpenViewDialog] = useState(false); // For close/open Article Data Dialog
  const [currentViewed, setCurrentViewed] = useState({}); // Object For Store Data Of The Current Viewed Article

  // Function For Open View Article Data Dialog
  // And Fetch The Data Of The Current Viewed Article
  const toggleViewDialog = () => {
    setCurrentViewed({
      title,
      description,
    });
    setOpenViewDialog(!openViewDialog);
  };

  return (
    <Parent>
      {openViewDialog && (
        <ViewBlogDialog
          currentViewed={currentViewed}
          toggleViewDialog={toggleViewDialog}
        />
      )}

      {/* 
        Component For Delete/Edit Buttons
        props(
          title : For Show Title Inside Edit Article Data Form
          description : For Show description Inside Edit Article Data Form
          id: For Use It To Delete/Update Specific Article 
        )
      */}
      <ActionBtns title={title} description={description} id={source.id} />
      <HeaderParent>
        <HeaderSpan>
          <HeaderSvg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
          </HeaderSvg>
          Blog
        </HeaderSpan>
        {/* Format the PublishAt Date */}
        <HeaderDateSpan>{formatDateDifference(publishedAt)}</HeaderDateSpan>
      </HeaderParent>
      <HeaderTitle>
        {/* Slice The First 50 characters Of Title To Be Pretty */}
        <a href={url}>
          {title?.length > 50 ? title?.slice(0, 50) : title}{" "}
          {title?.length > 50 && "..."}
        </a>
      </HeaderTitle>
      <HeaderDesc>
        {description?.length > 180 ? description?.slice(0, 180) : description}{" "}
        {description?.length > 180 && "..."}
      </HeaderDesc>
      <CardFooter>
        <AuthorParent>
          <AuthorImg />
          {/* If Article Author Exists Show It Else Show 'N/A' */}
          <AuthorSpan>{author ? author : "N/A"}</AuthorSpan>
        </AuthorParent>

        <ReadMoreLink onClick={toggleViewDialog}>
          Read more
          <ReadMoreLinkSvg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </ReadMoreLinkSvg>
        </ReadMoreLink>
      </CardFooter>
    </Parent>
  );
};

export default Card;
