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
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const dispatch = useDispatch();

  // Function For Set The Search Query In State
  const handleSearchChange = (val) => {
    setSearchQuery(val);

    // If Search Query Is Empty While Typing And Search Button Clicked Fetch The First Chunk Of Data
    if (!val && isSearchClicked) {
      dispatch(fetchBlogs());
      setIsSearchClicked(false);
    }
  };

  // Function For Dispatch The Search Action
  const submitSearch = () => {
    dispatch(searchForArticle(searchQuery));
    setIsSearchClicked(true); // For Mark Search Button Clicked To Control Refetch All News If Input Changed To Empty
  };

  return (
    <SearchParent>
      <InputWrapper>
        <InputIconParent>
          <Search size={16} className="text-gray-500" />
        </InputIconParent>
        <InputField onChange={(e) => handleSearchChange(e.target.value)} />
      </InputWrapper>

      <Button
        onClick={submitSearch}
        disabled={!searchQuery}
        className={`border ${
          !searchQuery
            ? "bg-gray-500"
            : "bg-blue-600  border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        }`}>
        <Search size={18} className="text-white font-bold" />
      </Button>
    </SearchParent>
  );
};

export default SearchComponent;
