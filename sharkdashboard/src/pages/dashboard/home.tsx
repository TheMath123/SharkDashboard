import React from 'react';
import Menu from '../../components/Menu';
import styles from './styles.module.scss';
import Terminal from '../../components/Terminal';

export default function Home(){
  return (
    <div className={styles.app}>
      <Menu />

      <main>
        <Terminal />
      </main>
    </div>
  )
}