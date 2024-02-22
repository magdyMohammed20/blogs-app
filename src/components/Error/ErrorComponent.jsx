import { ErrorParent, ErrorInnerParent } from "./elements";

// Error Component For Show If Fetching Articles Data Not Success
const ErrorComponent = () => {
  return (
    <ErrorParent>
      <ErrorInnerParent>
        <span className="font-bold">Error :</span> Can't Fetch Blogs
      </ErrorInnerParent>
    </ErrorParent>
  );
};

export default ErrorComponent;
