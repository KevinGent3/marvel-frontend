import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";

const Comics = ({ title }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const [comics, setComics] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?${limit}&skip=${skip}&title=${title}`
        );
        setIsLoading(false);
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [limit, skip, title]);

  return isLoading ? (
    <span>en cours de chargement...</span>
  ) : (
    <main className="container">
      <div className="comic-container">
        {data.results.map((comic, index) => {
          return (
            <div className="comic-card" key={comic._id}>
              <div>
                {comic.thumbnail && (
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt=" comics"
                  />
                )}
              </div>
              <div className="comic-card-infos">
                {comic.title && <span>{comic.title}</span>}
                {comic.description && <p>{comic.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
      <Pagination skip={skip} setSkip={setSkip} limit={limit} />
    </main>
  );
};

export default Comics;
