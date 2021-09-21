import { REQUEST_STATUS } from "../../utils/constants";

export const selectArticlesLoading = (state) =>
  state.articles.request.status === REQUEST_STATUS.LOADING;

export const selectArticlesError = (state) => state.articles.request.error;

export const selectArticles = (state) => state.articles.list;
