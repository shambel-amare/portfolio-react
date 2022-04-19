import React from "react";
import { ReactComponent as CertifIcon } from "../../assets/Certificates.svg";
import Resume from "../../assets/resume.pdf";
function Certificate() {
  return (
    <div className="container">
      <div className="container-cover">
        <div className="titlebar">
          <h1>04: </h1>
          <h1>Certificates</h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <CertifIcon />
          <a
            className="btn"
            href="#header"
            rel="noopener noreferrer"
            style={{
              background: "var(--color-logo)",
              border: "none",
              color: "var(--color-light)",
            }}
          >
            Linkedin learning
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <CertifIcon />
          <a
            className="btn"
            href="#header"
            style={{
              background: "var(--color-logo)",
              border: "none",
              color: "var(--color-light)",
            }}
          >
            Coursera learning
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <CertifIcon />
          <a
            className="btn"
            href="#header"
            style={{
              background: "var(--color-logo)",
              border: "none",
              color: "var(--color-light)",
            }}
          >
            Student Union excutive
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <CertifIcon />
          <a
            className="btn"
            href="#header"
            style={{
              background: "var(--color-logo)",
              border: "none",
              color: "var(--color-light)",
            }}
          >
            BSc Degree Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
