import { useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const {
    sendRequest,
    data: loadedQuote,
    error,
    status,
  } = useHttp(getSingleQuote, true);

  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        {/* <Route path="/quotes/:quoteId/comments"> */}
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
