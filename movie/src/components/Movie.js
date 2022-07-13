import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Movie = ({ id, coverImg, title, year, summary, genres }) => {
  return (
    <div>
      <img alt={title} src={coverImg} />
      <div>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3>{year}</h3>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
