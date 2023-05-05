import React, { useEffect, useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchYogaCategories } from "../../redux/services";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { yogaCategories } = useSelector((state) => state.yoga);

  useEffect(() => {
    dispatch(fetchYogaCategories());
  }, [dispatch]);

  const handleOnClick = (id) => {
    router.push(`/yoga/${id}`);
  };

  return (
    <BaseLayout>
      <section className="articles">
        {yogaCategories.map((item, index) => (
          <article>
            <div className="article-wrapper">
              <div className="article-body">
                <h2>{item.category_name}</h2>
                <p>
                 {item.category_description}
                </p>
                <a className="read-more" onClick={() => handleOnClick(item.id)}>
                  Read more{" "}
                  <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </BaseLayout>
  );
};

export default About;
