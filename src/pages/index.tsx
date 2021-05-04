import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login/home');
  }, []);

  return (
  <>
    <h1>Shark</h1>
  </>
  );
}
