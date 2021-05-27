import React from "react";
import { withRouter } from "react-router-dom";
import PhotoCard from "../PhotoCard/PhotoCard";
import NotFound from "../NotFound/NotFound";
import "./PhotoContainer.css";

const PhotoContainer = (props) => {
  const results = props.data;
  let title = props.title;
  const searchQuery = props.query;
  const loading = props.isLoading;

  if (title !== searchQuery) {
    props.onSearch(searchQuery);
    title = searchQuery;
  }

  let photos = results.map((photo) => (
    <PhotoCard
      server={photo.server}
      secret={photo.secret}
      id={photo.id}
      key={photo.id}
    />
  ));

  console.log(loading);

  return props.isLoading ? (
    <h2>loading...</h2>
  ) : results.length < 1 ? (
    <NotFound />
  ) : (
    <div className="photo-container">
      <div>
        <h2>
          Showing your search results for <br /> <strong>{title}</strong>
        </h2>
        <ul> {photos}</ul>
      </div>
    </div>
  );
};

export default withRouter(PhotoContainer);
