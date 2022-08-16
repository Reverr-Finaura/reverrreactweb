import React, { useState } from "react";
import Filter from "../../components/Book filter menu/Filter";
import styles from "./Knowledge.module.css";

const Knowledge = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.book_section}>
      <div>
        <p className={styles.book_para}>
          Most Important and Trending books that will help you in your Start-up
          Journey.
        </p>
        <div className={styles.book_filter_btn}>
          <img
            src="/images/Vector.svg"
            alt=""
            onClick={() => setIsVisible(!isVisible)}
          />
        </div>
        <Filter visible={isVisible} />
        <div className={styles.books}>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
          <div className={styles.book}>
            <img src="/images/book_dummy.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ut soluta perspiciatis dicta voluptatibus totam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
