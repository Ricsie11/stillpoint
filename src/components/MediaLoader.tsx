import React, { useState } from "react";

type MediaImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

export function MediaImage({
  className = "",
  wrapperClassName = "",
  onLoad,
  ...props
}: MediaImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={["relative block overflow-hidden", wrapperClassName].join(" ")}>
      {!isLoaded && (
        <div className="absolute inset-0 overflow-hidden bg-[#F1EAE2]">
          <div className="shimmer-surface absolute inset-0" />
        </div>
      )}
      <img
        {...props}
        loading="lazy"
        className={[
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className,
        ].join(" ")}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
}

type MediaVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  wrapperClassName?: string;
};

export function MediaVideo({
  className = "",
  wrapperClassName = "",
  onLoadedData,
  ...props
}: MediaVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={["relative block overflow-hidden", wrapperClassName].join(" ")}>
      {!isLoaded && (
        <div className="absolute inset-0 overflow-hidden bg-[#F1EAE2]">
          <div className="shimmer-surface absolute inset-0" />
        </div>
      )}
      <video
        {...props}
        preload="metadata"
        className={[
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className,
        ].join(" ")}
        onLoadedData={(event) => {
          setIsLoaded(true);
          onLoadedData?.(event);
        }}
      />
    </div>
  );
}
