import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useParams } from "react-router-dom";
import Categories from "./components/categories";
import CatsBlok from "./components/cats";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { getHomeData, getMorePhoto } = useActions();
  const { categories, cats, page } = useSelector((state) => state.cat);

  useEffect(() => {
    setLoading(true);
    if (id) {
      getHomeData(id);
    } else {
      getHomeData("random");
    }
  }, [id]);

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
    }
  }, [categories]);

  const seeMore = () => {
    console.log(id, page);
    getMorePhoto(id, page);
  };

  const catsPhotos = useMemo(() => {
    console.log("samuel");
    return loading ? null : <CatsBlok cats={cats} />;
  }, [loading, cats, page]);

  return (
    <>
      {loading ? (
        <div style={{ fontSize: "130%", marginTop: "15%" }}>...loading</div>
      ) : (
        <>
          <Categories categories={categories} />
          <div>
            {catsPhotos}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="button_see_more" onClick={() => seeMore()}>
                see more
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
