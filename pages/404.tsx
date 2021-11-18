import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ButtonTheme from '../components/organisms/Navbar/ButtonTheme';

export default function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  });

  return (
    <div className="not-found">
      <div className="text-center">
        <Image src="/image/404-not-found.svg" width={500} height={250} />
        <h1 className="my-3">Page Not Found</h1>
        <Link href="/">
          <a className="btn btn-outline-primary">
            Homepage
          </a>
        </Link>
      </div>
      <div className="d-none">
        <ButtonTheme />
      </div>
    </div>
  );
}
