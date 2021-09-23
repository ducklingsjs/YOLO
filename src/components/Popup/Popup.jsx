import React from 'react';
import './Popup.css';

import { Button } from '../Button/Button';

export const Popup = ({
  title,
  description,
  confirmText,
  cancelText,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-window">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <div className="popup-window-buttons">
          <Button variant="primary" onClick={onConfirm}>
            {confirmText}
          </Button>
          {cancelText && (
            <Button variant="danger" onClick={onCancel}>
              {cancelText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
