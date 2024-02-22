import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Card from "../../components/Card/Card"; // Blog Card
import FixedAlert from "../../components/FixedAlert/FixedAlert";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/blogs/actions"; // Fetch Blogs Action
import { STATUSES } from "../../store/blogs/blogSlice"; // Fetching Data Statues Object
import {
  BlogsTitleParent,
  BlogsTitle,
  BlogsParagraph,
  CreateBtn,
  BlogsGrid,
} from "./elements"; // Blogs Reusable Styled Components Elements
import CreateBlogDialog from "../../components/CreateBlogDialog/CreateBlogDialog"; // Create New Blog Dialog
import Alert from "../../components/Alert/Alert"; // Alert Component For Show After Create New Article
import Loader from "../../components/Loader/Loader"; // Loader Spinner For Show While Fetching Data
import ErrorComponent from "../../components/Error/ErrorComponent"; // Error Component For Show If Fetching Data Not Success
const Blogs = () => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false); // State For Open/Close Create Article Dialog
  const [showAlert, setShowAlert] = useState(false); // State For Show Create New Article Alert Message

  // Access Articles Array Data And Fetching status
  const {
    blogs: { blogs, status },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  // For Hide The Create New Article Alert After 10 Seconds Depending On Alert Show
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 10000);
  }, [showAlert]);

  useEffect(() => {
    // Fetch Articles Data
    dispatch(fetchBlogs());
  }, []);

  // For Toggle Create New Article Dialog Form
  const toggleCreateDialog = () => {
    setOpenCreateDialog(!openCreateDialog);
  };

  // For Mapping Blogs And Pass Data To Card Component
  // Data Reveresed For Show The New Articles At First
  // IF No Blogs Show Error Alert
  const mapBlogs =
    blogs.length > 0 ? (
      blogs
        .slice()
        .reverse()
        .map((blog, index) => <Card blog={blog} key={index} />)
    ) : (
      <FixedAlert />
    );

  // If Fetching Data Show Loader Spinner
  if (status == STATUSES.LOADING) {
    return <Loader />;
  }

  // If There Are Error In Fetching Data Show ErrorComponent
  if (status == STATUSES.ERROR) {
    return <ErrorComponent />;
  }
  return (
    <div>
      <div className="share-route-parent">
        <Alert
          showAlert={showAlert}
          message={"The Article Created Successfully"}
        />
        <BlogsTitleParent>
          <BlogsTitle>Our Blogs</BlogsTitle>
          <BlogsParagraph>
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </BlogsParagraph>
        </BlogsTitleParent>
        <div>
          <CreateBtn onClick={toggleCreateDialog}>
            Create New Article
            <Plus size={16} />
          </CreateBtn>

          {openCreateDialog && (
            <CreateBlogDialog
              toggleCreateDialog={toggleCreateDialog}
              setShowAlert={setShowAlert}
            />
          )}
        </div>
        <BlogsGrid
          className={`grid-cols-1  ${
            blogs.length == 0 ? "`lg:grid-cols-1" : "lg:grid-cols-2"
          }`}>
          {mapBlogs}
        </BlogsGrid>
      </div>
    </div>
  );
};

export default Blogs;
