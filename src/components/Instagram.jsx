import React, { Component } from "react";
import { InstagramMedia } from "react-instagram-media";
import { instagramMediaParser } from "react-instagram-media";
function Instagram() {
  return instagramMediaParser({
    uri: "https://www.instagram.com/foodieland555/",
  }).then((post) => console.log(post));
  //       <InstagramMedia
  //         uri="https://www.instagram.com/foodieland555/"
  //         renderItem={({ display_url, video_url, type, caption }) => {
  //           if (type === "video") {
  //             return (
  //               <video poster={display_url} controls>
  //                 <source src={video_url} type="video/mp4" />
  //               </video>
  //             );
  //           }

  //           return <img src={display_url} alt={caption} />;
  //         }}
  //         renderMediaList={(children) => <div className="swiper">{children}</div>}
  //         renderError={() => <div>I have failed to parse it</div>}
  //         renderLoading={() => <div>Loading</div>}
  //       />
}

export default Instagram;
