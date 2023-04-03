import React from "react";
import AudioPlayer from "@/components/Podcast/AudioPlayer";
import PodcastBanner from "@/components/Podcast/PodcastBanner";
import PodcastVision from "@/components/Podcast/PodcastVision";

const RadioCenter: React.FC = () => {
  return (
    <>
      <div className="h-full w-full">
        <PodcastBanner />
        <AudioPlayer />
        <PodcastVision />
      </div>
    </>
  );
};

export default RadioCenter;
