import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter(); // router는 페이지를 처음 렌더링 할때 즉시 실행된다. 그러므로 url이 무엇인지 아직 모른다.

  const newsId = router.query.newsId;
  return <div>{router.query.newsId}</div>;
};

export default DetailPage;
