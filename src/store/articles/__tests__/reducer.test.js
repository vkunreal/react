import { ArticlesReducer } from "../reducer";
import { REQUEST_STATUS } from "../../../utils/constants";
import {
  getArticlesFailure,
  getArticlesLoading,
  getArticlesSuccess,
} from "../actions";

describe("Articles reducer", () => {
  // set loading
  it("Set loading status", () => {
    const expected = {
      list: [],

      request: {
        error: "",
        status: REQUEST_STATUS.LOADING,
      },
    };

    const received = ArticlesReducer(undefined, getArticlesLoading());
    expect(received).toEqual(expected);
  });

  //   set success
  it("Set success status", () => {
    const value = ["article"];

    const expected = {
      list: value,

      request: {
        error: "",
        status: REQUEST_STATUS.SUCCESS,
      },
    };

    const received = ArticlesReducer(undefined, getArticlesSuccess(value));
    expect(received).toEqual(expected);
  });

  //   set failure
  it("Set failure status", () => {
    const error = "not found";

    const expected = {
      list: [],

      request: {
        error,
        status: REQUEST_STATUS.FAILURE,
      },
    };

    const received = ArticlesReducer(undefined, getArticlesFailure(error));
    expect(received).toEqual(expected);
  });
});
