import React, { useState, useEffect, useCallback } from 'react';
import inviteImg from '../assets/Rsg_invite2.webp';
import './InviteModal.css';

function InviteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.src = inviteImg;

    const showModal = () => {
      if (isMounted) {
        setIsOpen(true);
      }
    };

    if (img.complete) {
      showModal();
    } else {
      img.onload = showModal;
      img.onerror = showModal;
    }

    return () => {
      isMounted = false;
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  }, [isClosing]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`invite-modal-overlay ${isClosing ? 'is-closing' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`invite-modal-container ${isClosing ? 'is-closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="invite-modal-close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className="invite-modal-content">
          <img
            src={inviteImg}
            alt="The Saudi Food Show Exhibition Invitation - RSG Exports"
            className="invite-modal-img"
          />
        </div>
      </div>
    </div>
  );
}

export default InviteModal;
