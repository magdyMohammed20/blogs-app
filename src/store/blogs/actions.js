import { createAsyncThunk } from "@reduxjs/toolkit"; // createAsyncThunk : For Async Actions Or Fetching Data From Api
import axios from "axios"; // axios Lib For Used In Fetching Data


// Function For Fetch Articles Data And Takes (page) As Parameter For Pagination
export const fetchBlogs = createAsyncThunk("fetch/blogs", async (page) => {
    const now = new Date(); // Get Current Date For Assign To Publish Date
    const day = String(now.getDate()).padStart(2, "0"); // Get Currenmt Day To Pass To Api To Fetch Right Data
  
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2024-01-${day}&sortBy=publishedAt&apiKey=b4aef25c131a4e6fa4402e3f791b2368&pageSize=10&page=${page}`
      );
  
      const updatedData = response.data.articles.map((item, index) => {
        return {
          ...item,
          source: {
            ...item.source,
            id: index + 1, // Assigning values based on index + 1
          },
        };
      });
  
      return updatedData;
    } catch (error) {
      throw error;
    }
  });
  