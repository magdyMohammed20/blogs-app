// createSlice For Create State And Required Methods For Articles Delete/Update/create/read
import { createSlice } from "@reduxjs/toolkit";

// Import Fetching Data Function
import { fetchBlogs } from "./actions";

// Fetching Data Statuses Object
export const STATUSES = {
  IDLE: "idle",
  LOADING: "Loading",
  ERROR: "error",
};

const blogSlice = createSlice({
  name: "blogs-slice", // Slice Name
  initialState: {
    blogs: [], // Blogs Array To Contains Articles Data
    status: STATUSES.IDLE, // Status Of Fetching Data With Default Value
  },
  reducers: {
    // Delete Articles Using Filter And The Required Articles Id
    deleteArticle(state, action) {
      state.blogs = state.blogs.filter(
        (item) => item.source.id != action.payload
      );
    },
    // Create New Articles Using Title , Description And Generated New ID
    createArticle(state, action) {
      const { title, description } = action.payload;

      // Get the last element's source ID and increment it by 1 for the new ID
      const newElementId =
        state.blogs.length > 0
          ? state.blogs[state.blogs.length - 1].source.id + 1
          : 1;

      // Create the new element
      const newElement = {
        author: "Magdy Mohammed",
        source: { id: newElementId },
        title,
        description,
        publishedAt: new Date().toISOString(),
      };

      // Add the new element to the front of the array
      state.blogs.push(newElement);
    },

    // Update Article Function Using id And Assign New Title And Description
    updateArticle(state, action) {
      const { id, editedTitle, editedDescription } = action.payload;
      state.blogs = state.blogs.map((item) => {
        if (item.source.id == id) {
          return {
            ...item,
            title: editedTitle, // Corrected property name
            description: editedDescription, // Corrected property name
          };
        }
        return item;
      });
    },
  },

  // Extra Reducers For Control Every Step In Fetching Data
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// Export Create/Update/Delete Action To Use It In Buttons
export const { deleteArticle, updateArticle, createArticle } =
  blogSlice.actions;

// Export The Blog Reducer For Combined Inside rootReducer
export default blogSlice.reducer;
