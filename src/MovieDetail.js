import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieDetail = () => {
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div></div>;
};
export default MovieDetail;
