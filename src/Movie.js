// import PropTypes from "props-type";
import { Link } from "react-router-dom";

const Movie = ({ id, medium_cover_image, title, summary, genres }) => {
  return (
    <div>
      <img src={medium_cover_image} alt="movie"></img>
      <h2>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

// Movie.PropsType = {
//   medium_cover_image: PropTypes.string,
//   title: PropTypes.string,
//   summary: PropTypes.string,
//   genres: PropTypes.arrayOf(PropTypes.string),
// };

export default Movie;
