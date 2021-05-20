import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from '../styles/index.module.scss';

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Image
        src='/Logo.svg'
        width={150}
        height={150}
      />
    </main>
  );
}
