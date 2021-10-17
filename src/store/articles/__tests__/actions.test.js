import { API_URL } from "../../../utils/constants.js";
import * as actions from "../actions.js";

describe("Articles actions", () => {
  //   loading
  it("Articles get loading", () => {
    const expected = {
      type: actions.GET_ARTICLES_LOADING,
    };

    const received = actions.getArticlesLoading();

    expect(expected).toEqual(received);
  });

  //   success
  it("Articles get success", () => {
    const expected = {
      type: actions.GET_ARTICLES_LOADING,
    };

    const received = actions.getArticlesLoading();

    expect(expected).toEqual(received);
  });

  //   failure
  it("Articles get failure", () => {
    const expected = {
      type: actions.GET_ARTICLES_FAILURE,
    };

    const received = actions.getArticlesFailure();

    expect(expected).toEqual(received);
  });

  //   get Articles
  describe("Get Articles", () => {
    // success dispathc and loading calls
    it("Dispatch and loading", async () => {
      const mockDispatch = jest.fn();

      fetchMock.mockOnce(
        JSON.stringify(
          "The next call to fetch will always return this as the body"
        )
      );

      await actions.getArticles()(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(actions.getArticlesLoading());
    });

    // success fetch with API_URL
    it("Call fetch with API_URL", async () => {
      const mockDispatch = jest.fn();

      fetchMock.mockOnce(
        JSON.stringify(
          "The next call to fetch will always return this as the body"
        )
      );

      await actions.getArticles()(mockDispatch);

      expect(fetchMock).toHaveBeenCalledWith(API_URL);
    });

    // success result
    it("Call getArticles with success result", async () => {
      const mockDispatch = jest.fn();
      const result = ["article"];

      fetchMock.mockOnce(JSON.stringify(result));

      await actions.getArticles()(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenLastCalledWith(
        actions.getArticlesSuccess(result)
      );
    });
  });
});
