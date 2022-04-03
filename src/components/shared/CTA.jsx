import React from "react";

const CTA = ({ text, link, className, downloadable }) => {
  return (
    <div>
      <a href={link} download={downloadable} className={className}>
        {text}
      </a>
    </div>
  );
};

export default CTA;
