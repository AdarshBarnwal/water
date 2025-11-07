
import "./Videosection.css";
function Videosection() {
  return (
    <div className="video-container">
      <h1 className="video-title">How Water Purification Works?</h1>
      <video
        className="video-player"
        src="https://waterjetpurifier.com/animation.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}

export default Videosection;
