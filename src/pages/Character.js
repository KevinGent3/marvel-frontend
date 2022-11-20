import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Character = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${params.id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [params.id]);
  return isLoading ? (
    <span>En chargement</span>
  ) : (
    <div className="container-character-comics">
      <div className="container-character">
        {data.name && <h2>{data.name}</h2>}
        {data.thumbnail && (
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="personnage"
          />
        )}
      </div>
      <div className="container-comics">
        {data.comics.map((comic, index) => {
          return (
            <div key={index} className="comics-infos">
              <div>
                {comic.title && <h3>{comic.title}</h3>}
                {comic.description && <p>{comic.description}</p>}
              </div>

              {comic.thumbnail && (
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt="comic"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Character;
