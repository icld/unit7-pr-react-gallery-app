import React from "react";
import PhotoContainer from "../PhotoContainer/PhotoContainer";

const Home = (props) => {
  return (
    <div>
      <h1> Search Something!</h1>
      <p>
        This app uses the Flickr Api to search for photos of whatever you want
        to see! <br /> Try it in the search bar.
      </p>
      <PhotoContainer
        onSearch={props.onSearch}
        isLoading={props.isLoading}
        data={props.data}
      />
    </div>
  );
};

export default Home;
