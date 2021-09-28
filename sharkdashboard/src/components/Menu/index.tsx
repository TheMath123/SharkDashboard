import React from 'react';
import styles from './menu.module.scss';

export default function Menu(){
  return(
    <div className={styles.menu}>
      {/* <header>
        <Image
          src='/Logo.svg'
          width={78}
          height={68.35}
        />
        <div className={styles.line}/>
      </header> */}

      <main>
      {/* other buttons */}
      </main>

      <footer>
        <button type="button" className={styles.settings} onClick={() => {}} >
          {/* <Image
            className={styles.imgSettings}
            src='/images/settings.svg'
            width={50}
            height={50}
          /> */}
        </button>
      </footer>
    </div>
  )
}
