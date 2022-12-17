import React from 'react'

import projectStyles from '.style.module.css'
import styles from './mac-book-pro141.module.css'

const MacBookPro141 = (props) => {
  return (
    <div>
      <div className={styles['mac-book-pro141']}>
        <div className={styles['navbar8']}>
          <div className={styles['frame28']}>
            <div className={styles['group4']}>
              <span className={` ${styles['text']} ${projectStyles['text']} `}>
                <span>How it works</span>
              </span>
            </div>
            <span className={` ${styles['text02']} ${projectStyles['text']} `}>
              <span>About Us</span>
            </span>
          </div>
          <div className={styles['frame175']}>
            <button className={styles['button']}>
              <span
                className={` ${styles['text04']} ${projectStyles['button']} `}
              >
                <span>Login</span>
              </span>
            </button>
            <button className={styles['button1']}>
              <span
                className={` ${styles['text06']} ${projectStyles['button']} `}
              >
                <span>Connect</span>
              </span>
            </button>
          </div>
        </div>
        <img
          src="/playground_assets/cli212283-bg38-200h.png"
          alt="cli212283"
          className={styles['cli21']}
        />
        <img
          src="/playground_assets/rectangle59285-374.svg"
          alt="Rectangle59285"
          className={styles['rectangle5']}
        />
        <img
          src="/playground_assets/ellipse41429-fjv-200w.png"
          alt="Ellipse41429"
          className={styles['ellipse4']}
        />
        <img
          src="/playground_assets/ellipse51429-y4wv-200w.png"
          alt="Ellipse51429"
          className={styles['ellipse5']}
        />
        <img
          src="/playground_assets/ellipse61429-uj9o-200w.png"
          alt="Ellipse61429"
          className={styles['ellipse6']}
        />
        <span className={styles['text08']}>
          <span>Confused about CLI commands?</span>
        </span>
        <span className={styles['text10']}>
          <span>
            <span>
              Struggling to get familiar with CLI commands?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Confused what it does or where should you use it?</span>
            <br></br>
            <span>Don’t worry, we got you all covered!</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default MacBookPro141
