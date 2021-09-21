import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import {
  selectArticles,
  selectArticlesError,
  selectArticlesLoading,
} from "../../store/articles/selectors";

export default function News() {
  const dispatch = useDispatch();

  const error = useSelector(selectArticlesError);
  const loading = useSelector(selectArticlesLoading);
  const articles = useSelector(selectArticles);

  const reload = () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <h2>News:</h2>
      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}
      {error ? (
        <div>Error! {error}</div>
      ) : (
        articles.map((elem) => <div>{elem.title}</div>)
      )}
      <button onClick={reload}>Refresh</button>
    </div>
  );
}
