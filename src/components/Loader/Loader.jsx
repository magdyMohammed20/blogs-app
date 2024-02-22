import {
  LoadingParent,
  LoadingFirstChild,
  LoadingSecondChild,
  LoadingThirdChild,
} from "./elements";

// Reusable Loader For Show Untill Articles Data Fetched
const Loader = () => {
  return (
    <LoadingParent>
      <LoadingFirstChild />
      <LoadingSecondChild />
      <LoadingThirdChild />
    </LoadingParent>
  );
};

export default Loader;
