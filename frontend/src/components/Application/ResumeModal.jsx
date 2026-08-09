// import React from "react";

// const ResumeModal = ({ imageUrl, onClose }) => {
//   const isPdf =
//     imageUrl?.toLowerCase().includes(".pdf") ||
//     imageUrl?.toLowerCase().includes("pdf");
//   const isDoc =
//     imageUrl?.match(/\.(doc|docx)$/i) ||
//     imageUrl?.toLowerCase().includes("word");
//   const isImage = imageUrl?.match(/\.(png|jpg|jpeg|gif|webp|bmp|svg)$/i);
//   const viewerUrl = isPdf || isDoc
//     ? `https://docs.google.com/gview?url=${encodeURIComponent(imageUrl)}&embedded=true`
//     : imageUrl;

//   return (
//     <div className="resume-modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>

//         {isImage ? (
//           <img src={imageUrl} alt="resume preview" />
//         ) : isPdf || isDoc ? (
//           <iframe
//             src={viewerUrl}
//             title="Resume Preview"
//             style={{ width: "100%", height: "70vh", border: "none" }}
//           />
//         ) : (
//           <div className="resume-file-card">
//             <p>Unable to preview this resume directly.</p>
//             {/* Resume document is available for download. */}
//             <a href={imageUrl} target="_blank" rel="noopener noreferrer">
//               Open Resume
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumeModal;


import React from "react";

const ResumeModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) {
    return null;
  }

  const lowerUrl = imageUrl.toLowerCase();

  const isPdf =
    lowerUrl.includes(".pdf") ||
    lowerUrl.includes("application/pdf");

  const isImage =
    lowerUrl.includes(".png") ||
    lowerUrl.includes(".jpg") ||
    lowerUrl.includes(".jpeg") ||
    lowerUrl.includes(".gif") ||
    lowerUrl.includes(".webp");

  return (
    <div className="resume-modal">
      <div className="modal-content">

        <span className="close" onClick={onClose}>
          &times;
        </span>

        {isPdf ? (
          <iframe
            src={imageUrl}
            title="Resume Preview"
            style={{
              width: "100%",
              height: "90vh",
              border: "none",
            }}
          />
        ) : isImage ? (
          <img
            src={imageUrl}
            alt="Resume"
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        ) : (
          <div className="resume-file-card">
            <p>
              This resume cannot be previewed in the browser.
            </p>

            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open / Download Resume
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default ResumeModal;