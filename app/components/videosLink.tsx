import React from "react";

export default function VideosLink(props: any) {
  const {
    setOpen,
    setUrl,
    isInterlude,
    isExplanation,
    isMeditation,
    interludeUrl,
    explanationUrl,
    meditationUrl,
  } = props;
  return (
    <div className="flex flex-col items-stretch gap-y-2 px-20 sm:p-0 sm:flex-row">
      {isInterlude && (
        <button
          className="bg-orange-600 hover:bg-orange-600 text-white p-4 sm:py-2 sm:px-4 rounded mr-4 "
          onClick={() => {
            // setUrl("https://www.youtube.com/embed/a2Hi80hGV04");
            setUrl(interludeUrl);
            setOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline-block"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          <span className="ml-1">Interlude</span>
        </button>
      )}
      {isExplanation && (
        <button
          className="bg-orange-600 hover:bg-orange-600 text-white p-4 sm:py-2 sm:px-4 rounded mr-4"
          onClick={() => {
            // setUrl("https://www.youtube.com/embed/qPVqe4qjkms");
            setUrl(explanationUrl);
            setOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline-block"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          <span className="ml-1">Explanation</span>
        </button>
      )}
      {isMeditation && (
        <button
          className="bg-orange-600 hover:bg-orange-600 text-white p-4 sm:py-2 sm:px-4 rounded mr-4"
          onClick={() => {
            // setUrl("https://www.youtube.com/embed/V4neg7SVDKc");
            setUrl(meditationUrl);
            setOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline-block"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          <span className="ml-1">Meditation</span>
        </button>
      )}
    </div>
  );
}
