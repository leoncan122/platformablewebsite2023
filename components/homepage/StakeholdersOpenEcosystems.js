import React, { useEffect, useState } from "react";
import styles from "@/styles/Homepage.module.css";
export default function StakeholdersOpenEcosystems({ videos, title }) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]?.data?.attributes?.url);
  const [sourceError, setSourceError] = useState(false);


  const changeVideo = ( new_video_src) => {
    if (!new_video_src) return setSourceError(true);
    
    const videoElement = document.getElementById('video')
    videoElement.pause();
    setSelectedVideo(new_video_src);
    videoElement.load();
    videoElement.play();

  };

  const arrayOfVideos = [
    {
      label: "For governments and regulators",
      video_src: videos[0]?.data?.attributes?.url,
    },
    {
      label: "For bussineses and organizations",
      video_src: videos[1]?.data?.attributes?.url,
    },
    {
      label: "For citizens",
      video_src: '',
    },
  ];


  return (
    <section className="py-10">
      <div className="flex gap-10  mb-10">
        <img src="" alt="plat logo" width={100} />
        <h2 className="text-[#5B24EC] font-bold font-karla ">{title}</h2>
      </div>
      <div className="px-5 lg:px-32 md:flex flex-col  gap-10 hidden ">
        <div className="flex items-center px-7 justify-between gap-10">
          {arrayOfVideos?.map((video, i) => (
            <label className="flex items-center gap-5" key={i}>
              <input
                type="radio"
                className={styles.custom_radio_button}
                name="stakeholder_flow"
                onChange={(e) => changeVideo(video.video_src)}
                defaultChecked={i === 0}
              />
              <p className="font-bold">{video.label}</p>
            </label>
          ))}
        </div>
        {!sourceError ? (
          <video autoPlay muted loop id="video">
          <source src={selectedVideo} type="video/mp4" />
        </video>
        ) : (
          <div className="h-[600px] flex items-center justify-center">
              <p className="opacity-80">Video not found</p>
          </div>
        )}
      </div>
    </section>
  );
}
