import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BaseLayout from "../../components/BaseLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchYogaCategories } from "../../redux/services";
import axios from "axios";

const PoseComponent = () => {
  const router = useRouter();
  const id = router.query.id;
  const { yogaCategories } = useSelector((state) => state.yoga);
  const [yogaPoses, setYogaPoses] = useState(undefined);
  const dispatch = useDispatch();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedPoseLevel, setSelectedPoseLevel] = useState(null);
  const [displaData, setDisplayData] = useState(null);

  useEffect(() => {
    dispatch(fetchYogaCategories());
  }, [dispatch]);

  useEffect(() => {
    let data = yogaCategories.filter((item) => item.id.toString() === id);
    setYogaPoses(data);
  }, [yogaCategories, id]);

  const handleChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  useEffect(() => {
    if (selectedLevel != null) {
      axios
        .get(
          `https://yoga-api-nzy4.onrender.com/v1/categories?id=${id}&level=${selectedLevel}`
        )
        .then(function (response) {
          setSelectedPoseLevel(response.data)
        });
    }
  }, [selectedLevel]);

  
  useEffect(() => {
    if(selectedPoseLevel != null) {
        setDisplayData(selectedPoseLevel.poses)
    }else {
      setDisplayData(yogaPoses && yogaPoses[0]?.poses)
    }
  },[selectedPoseLevel, yogaPoses])

  return (
    <BaseLayout>
      <div class="sales-products-filter">
        <select class="filter-brand" onChange={handleChange}>
          <option value="0" selected>
            Select Level
          </option>
          <option value="beginner">Beginners</option>
          <option value="intermediate">Intermediate</option>
        </select>
      </div>
      <section className="articles">
        {displaData?.length > 0 &&
          displaData.map((item, index) => (
            <article key={item + "-" + index}>
              <div className="article-wrapper">
                <figure>
                  <img src={item.url_svg} alt="" />
                </figure>
                <div className="article-body">
                  <h2>{item.english_name}</h2>
                  <p>{item.pose_benefits}</p>
                </div>
              </div>
            </article>
          ))}
      </section>
    </BaseLayout>
  );
};

export default PoseComponent;
