'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Redirecting to homepage...</p>
    </div>
  );
};
export default Custom404;
