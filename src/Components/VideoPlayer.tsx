import { memo } from "react";

type Props = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: Props) => {
  return (
    <section className="max-w-[75%] px-4 py-4 min-w-[25rem]">
      <div className="relative">
        <span
          className="block w-full h-auto"
          style={{ display: "block", paddingTop: "57%" }}
        ></span>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
};

export default memo(VideoPlayer);
