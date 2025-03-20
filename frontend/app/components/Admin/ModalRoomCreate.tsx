import React from 'react'

interface ModalRoomCreateProps {
  isOpen: boolean
  onClose: () => void
}

export const ModalRoomCreate = ({ isOpen, onClose }: ModalRoomCreateProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-top">
          <input 
            className="admin-modal-top-inp" 
            placeholder="Название проекта"
          />
        </div>
      </div>
    </div>
  )
}

export default ModalRoomCreate