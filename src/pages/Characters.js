import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
const Characters = ({ name }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [name, limit, skip]);
  return isLoading ? (
    <p>En chargement...</p>
  ) : (
    <main className="container">
      <div className="character-container">
        {data.results.map((character, index) => {
          return (
            <div className="character-card" key={character._id}>
              <div>
                {character.thumbnail && (
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt="personnage"
                  />
                )}
              </div>

              <div className="character-card-infos">
                {character.name && <span>{character.name}</span>}
                {character.description && <p>{character.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
      <Pagination skip={skip} setSkip={setSkip} limit={limit} />
    </main>
  );
};
export default Characters;
