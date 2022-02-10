import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadSearchResults, loadSearchSubreddit, testAPI} from "../../App/Reddit";


export const getSearchResults = createAsyncThunk(
  'search/getSearchResults',
  async(searchTerm, sort) => {
    const newSearchTerm = searchTerm.replace(' ', '');
    const results = await loadSearchResults(newSearchTerm, sort)

    return results
  }
)

export const getSearchSubreddit = createAsyncThunk(
  'search/getSearchSubreddit',
  async(searchTerm, subreddit) => {
    console.log(subreddit)
    // const newSearchTerm = searchTerm.replace(' ', '');
    const results = await loadSearchSubreddit(searchTerm, subreddit)

    return results
  }
)

// export const getSearchSubreddit = createAsyncThunk(
//   'search/getSearchSubreddit',
//   async(searchTerm, subreddit) => {
//     const results = await loadSearchSubreddit(searchTerm, subreddit)
//     console.log(results)

//     return results
//   }
// )


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    localSearchTerm: '',
    isSearchingSub: false,
    searchResults: [],
    isLoadingResults: false,
    hasError: false
  },
  reducers:  {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setLocalSearchTerm: (state, action) => {
      state.localSearchTerm = action.payload
    },
    setIsSearchingSub: (state, action ) => {
      state.isSearchingSub = action.payload
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
      .addCase(getSearchSubreddit.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(getSearchSubreddit.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = false;
        state.searchResults = action.payload;
      })
      .addCase(getSearchSubreddit.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
        state.searchResults = [];
      })
  }
})

export const initializeSearch = (term, sort) => {
  return (dispatch) => {
    dispatch(searchSlice.actions.clearSearchResults())
    dispatch(searchSlice.actions.setSearchTerm(term))
    dispatch(getSearchResults(term, sort))
  }
}

export const initializeSubredditSearch = (term, subreddit, sort) => {
  console.log(subreddit)
  return (dispatch) => {
    dispatch(searchSlice.actions.setIsSearchingSub(true))
    console.log(subreddit)
    dispatch(searchSlice.actions.setSearchTerm(term))
    dispatch(getSearchSubreddit(term,subreddit,sort))
  }
}

export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchTerm = (state) => state.search.searchTerm;
export const selectLocalSearchTerm = (state) => state.search.localSearchTerm;
export const selectIsSearchingSub = (state) => state.search.isSearchingSub;

export const { setSearchTerm, clearSearchResults, setLocalSearchTerm, setIsSearchingSub } = searchSlice.actions

export default searchSlice.reducer

