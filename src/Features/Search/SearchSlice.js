import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadSearchResults } from "../../App/Reddit";

export const getSearchResults = createAsyncThunk(
  'search/getSearchResults',
  async(searchTerm) => {
    const results = await loadSearchResults(searchTerm)

    return results
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    searchResults: [],
    isLoadingResults: false,
    hasError: false
  },
  reducers:  {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoadingResults = true
        state.hasError = false
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.isLoadingResults = false
        state.hasError = false
        state.searchResults = action.payload
      })
      .addCase(getSearchResults.rejected, (state) => {
        state.isLoadingResults = false
        state.searchResults = []
        state.hasError = true
      })
  }
})

export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchTerm = (state) => state.search.searchTerm;

export const { setSearchTerm } = searchSlice.actions

export default searchSlice.reducer

