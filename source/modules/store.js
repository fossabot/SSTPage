import { combineReducers } from 'redux'

const createInitState = (initState = null) => ({
  pageData: initState,
  isFetchingPageData: false,
  pageDataDidFetched: false,
  pageDataErrorMessage: '',
  currentCardMember: 'wtf',
  memberDetail: [],
});

const replaceState = (state, newState) =>  Object.assign({}, state, newState);

const reducer = (state = createInitState(), action = {}) => {
  console.log(action.type);
  switch(action.type) {
    case 'startFetchingApi':
      return replaceState(state, {isFetchingPageData: true, pageDataDidFetched: true, pageDataErrorMessage: ''})
    case 'fetchingSuccess':
      return replaceState(state, {pageData: action.pageData, isFetchingPageData: false,  pageDataDidFetched: true})
    case 'fetchingFailed':
      return replaceState(state, {isFetchingPageData: false, pageDataDidFetched: false, pageDataErrorMessage: action.msg})
    case 'emptyPageData':
      return replaceState(state, {isFetchingPageData: false, pageDataDidFetched: false, pageData: null, pageDataErrorMessage: ''})
    default: 
      return state
  }
};

export { createInitState, reducer }