import React, { useState, useRef, useEffect } from "react";

const AudioPlayer: React.FC = () => {
  let [showMusicPlayer, setShowMusicPlayer] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  let [audioVol, setAudioVol] = useState<number>(0.5);

  const audioPlayer = useRef<any>(null);
  const progressBar = useRef<any>(null);
  const animationRef = useRef<any>(null);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backFive = () => {
    progressBar.current.value = Number(progressBar.current.value - 5);
    changeRange();
  };

  const forwardFive = () => {
    progressBar.current.value = Number(progressBar.current.value * 1 + 5);
    changeRange();
  };

  const changeVol = (e: any) => {
    setAudioVol((audioVol = e.target.value / 100));
    let target = e.target;
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    // @ts-ignore
    document.getElementById("audio-player").volume = audioVol;
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    // @ts-ignore
    document.getElementById("audio-player").volume = audioVol;
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    audioVol,
  ]);

  return (
    <>
      <div className="bg-myBrown audioPlayer w-full z-[9999999] h-[54px] md:flex hidden items-center -mt-[3.3rem] shadow-lg shadow-black">
        <div className="flex justify-between items-center container mx-auto xl:w-[70%] w-full h-[3.36rem]">
          <audio
            ref={audioPlayer}
            src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
            preload="metadata"
            id="audio-player"
          ></audio>
          <div className="flex">
            <img
              src="/img/prevBtn.png"
              alt=""
              className="w-12 cursor-pointer"
            />
            <button
              onClick={togglePlayPause}
              className="h-12 w-12 flex justify-center items-center"
            >
              {isPlaying ? (
                <img src="/img/pause.png" alt="" />
              ) : (
                <svg
                  className="fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48"
                >
                  <path d="M16 37.85v-28l22 14Z" />
                </svg>
              )}
            </button>
            <img
              src="/img/nextBtn.png"
              alt=""
              className="w-12 cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-5 h-full">
            <div className="w-14">
              <img src="/img/card1.png" alt="" />
            </div>
            <div>
              <div className="flex justify-between w-60">
                <p className="w-44 truncate text-white">
                  Elit sed diam nonummy Elit sed
                </p>
                <div className="text-white">{calculateTime(currentTime)}</div>
              </div>
              <input
                type="range"
                className="progressBar"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
            </div>
            <div className="duration hidden">
              {duration && !isNaN(duration) && calculateTime(duration)}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="/img/trimLeft.png"
              alt=""
              onClick={backFive}
              className="cursor-pointer"
            />
            <img
              src="/img/trimRight.png"
              alt=""
              onClick={forwardFive}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-3 items-center">
            <img src="/img/volume.png" alt="" />
            <input
              type="range"
              value="70"
              min="0"
              max="100"
              id="volumeBar"
              onChange={changeVol}
            />
          </div>
        </div>
      </div>
      {showMusicPlayer === true && (
        <div className="bg-myBrown bottom-0 fixed w-full p-2 z-[9999999] lg:hidden block">
          <div className="w-full">
            <audio
              ref={audioPlayer}
              src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
              preload="metadata"
            ></audio>
            <div className="flex justify-center items-center h-8 mb-3">
              <img
                src="/img/trimLeft.png"
                alt=""
                onClick={backFive}
                className="cursor-pointer mr-3"
              />
              <img src="/img/prevBtn.png" alt="" />
              <button
                onClick={togglePlayPause}
                className="h-12 w-12 flex justify-center items-center"
              >
                {isPlaying ? (
                  <img src="/img/pause.png" alt="" />
                ) : (
                  <svg
                    className="fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                  >
                    <path d="M16 37.85v-28l22 14Z" />
                  </svg>
                )}
              </button>
              <img src="/img/nextBtn.png" alt="" />
              <img
                src="/img/trimRight.png"
                alt=""
                onClick={forwardFive}
                className="cursor-pointer ml-3"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="w-4/5">
                <div>
                  <div className="flex justify-between w-full">
                    <p className="w-44 truncate text-white text-sm">
                      Elit sed diam nonummy Elit sed
                    </p>
                    <div className="text-white">
                      {calculateTime(currentTime)}
                    </div>
                  </div>
                  <input
                    type="range"
                    className="progressBar"
                    defaultValue="0"
                    ref={progressBar}
                    onChange={changeRange}
                  />
                </div>
                <div className="duration hidden">
                  {duration && !isNaN(duration) && calculateTime(duration)}
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/img/volume.png" alt="" />
                <input type="range" className="hidden" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setShowMusicPlayer(!showMusicPlayer)}
        className="md:hidden fixed bottom-10 flex justify-center w-full"
      >
        <button className="h-12 w-48 bg-red-600 flex justify-center items-center gap-3 rounded-lg text-white z-[99999!important]">
          <p>Escuchar ahora</p>
          <img src="/img/fillPlayBtn.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;
