import React from "react";

const ResumeModal = ({ imageUrl, onClose }) => {
  const isPdf =
    imageUrl?.toLowerCase().includes(".pdf") ||
    imageUrl?.toLowerCase().includes("pdf");
  const isDoc =
    imageUrl?.match(/\.(doc|docx)$/i) ||
    imageUrl?.toLowerCase().includes("word");
  const isImage = imageUrl?.match(/\.(png|jpg|jpeg|gif|webp|bmp|svg)$/i);
  const viewerUrl = isPdf || isDoc
    ? `https://docs.google.com/gview?url=${encodeURIComponent(imageUrl)}&embedded=true`
    : imageUrl;

  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        {isImage ? (
          <img src={imageUrl} alt="resume preview" />
        ) : isPdf || isDoc ? (
          <iframe
            src={viewerUrl}
            title="Resume Preview"
            style={{ width: "100%", height: "70vh", border: "none" }}
          />
        ) : (
          <div className="resume-file-card">
            <p>Resume document is available for download.</p>
            <a href={imageUrl} target="_blank" rel="noreferrer">
              Open Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeModal;
