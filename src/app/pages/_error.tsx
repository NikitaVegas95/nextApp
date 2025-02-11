import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ErrorPage: NextPage = () => {
  const router = useRouter();
  const { status } = router.query;

  return (
    <div>
      <h1>Error {status}</h1>
      <p>Something went wrong.</p>
    </div>
  );
};

export default ErrorPage;
