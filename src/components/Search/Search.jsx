import { useState } from "react";
import { Search } from "lucide-react"; // Search Icon
import { useDispatch } from "react-redux";
import { searchForArticle } from "../../store/blogs/blogSlice"; // Import Search Action From Blog Slice
import { fetchBlogs } from "../../store/blogs/actions"; // Import Fetch Blogs For Fetch All Blogs If Search Is Empty
import {
  SearchParent,
  InputWrapper,
  InputIconParent,
  InputField,
  Button,
} from "./elements"; // elements Of Styled-component And Tailwind

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState(null); // State For Store The Current Search Query
  const dispatch = useDispatch();

  // Function For Set The Search Query In State
  const handleSearchChange = (val) => {
    setSearchQuery(val);

    // If Search Query Is Empty While Typing Fetch The First Chunk Of Data
    if (!val) {
      dispatch(fetchBlogs());
    }
  };

  // Function For Dispatch The Search Action
  const submitSearch = () => {
    dispatch(searchForArticle(searchQuery));
  };

  return (
    <SearchParent>
      <InputWrapper>
        <InputIconParent>
          <Search size={16} className="text-gray-500" />
        </InputIconParent>
        <InputField onChange={(e) => handleSearchChange(e.target.value)} />
      </InputWrapper>

      <Button onClick={submitSearch}>
        <Search size={18} className="text-white font-bold" />
      </Button>
    </SearchParent>
  );
};

export default SearchComponent;
