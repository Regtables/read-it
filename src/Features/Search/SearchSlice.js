import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadSearchResults } from "../../App/Reddit";

export const getSearchResults = createAsyncThunk(
  'searchResults/getSearchResults',
  async(searchTerm) => {
    const newSearchTerm = searchTerm.replace(' ', '');
    const results = await loadSearchResults(newSearchTerm)

    return results
  }
)

export const searchSlice = createSlice({
  name: 'searchResults',
  initialState: {
    searchTerm: '',
    searchResults: [],
    isLoadingResults: false,
    hasError: false
  },
  reducers:  {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    clearSearchResults: (state, action) => {
      state.searchResults = []
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

export const initializeSearch = (term) => {
  return (dispatch) => {
    dispatch(searchSlice.actions.clearSearchResults())
    dispatch(searchSlice.actions.setSearchTerm(term))
    dispatch(getSearchResults(term))
  }
}

export const selectSearchResults = (state) => state.searchResults.searchResults;
export const selectSearchTerm = (state) => state.searchResults.searchTerm;

export const { setSearchTerm, clearSearchResults } = searchSlice.actions

export default searchSlice.reducer

