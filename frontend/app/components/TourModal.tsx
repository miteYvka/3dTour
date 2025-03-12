// TourModal.tsx
import React from "react";

// Определяем интерфейс для пропсов компонента
interface TourModalProps {
  onClose: () => void; // Тип для функции закрытия модального окна
}

const embedUrl = "https://kuula.co/share/collection/7cyxy?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"

const TourModal: React.FC<TourModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={embedUrl}
              className="modal-content-360"
              allow="fullscreen"
              
            ></iframe>
      </div>
    </div>
  );
};

export default TourModal