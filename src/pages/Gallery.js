import React, { useState, useEffect } from "react";
import photoUrls from "../data/photoUrls.json"; // Import the list of photo URLs

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (lightboxOpen) {
      // Add event listener to listen for clicks outside of the lightbox
      const handleClickOutside = (event) => {
        if (
          event.target.classList.contains("lightbox") ||
          event.target.classList.contains("gallery-container")
        ) {
          setLightboxOpen(false);
        }
      };

      window.addEventListener("click", handleClickOutside);

      return () => {
        // Cleanup function to remove event listener when component unmounts
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigateToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photoUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="container py-4">
        <div className="row">
          {photoUrls.map((url, index) => (
            <div className="col-sm-3 margin30" key={index}>
              <div className="item-img-wrap">
                <img
                  src={url}
                  className="img-responsive"
                  alt={`workimg${index}`}
                  onClick={() => openLightbox(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <span className="close-btn" onClick={closeLightbox}>
            ×
          </span>
          <img
            src={photoUrls[currentImageIndex]}
            className="lightbox-image"
            alt={`workimg${currentImageIndex}`}
          />
          <button className="prev-btn" onClick={navigateToPrevious}>
            &#10094;
          </button>
          <button className="next-btn" onClick={navigateToNext}>
            &#10095;
          </button>
        </div>
      )}

      <style>{`
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 30px;
          cursor: pointer;
          color: #fff;
          z-index: 1;
        }

        .lightbox-image {
          max-width: 90%;
          max-height: 90%;
        }

        .prev-btn,
        .next-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: transparent;
          color: #fff;
          border: none;
          font-size: 24px;
          cursor: pointer;
          z-index: 1;
        }

        .prev-btn {
          left: 20px;
        }

        .next-btn {
          right: 20px;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
