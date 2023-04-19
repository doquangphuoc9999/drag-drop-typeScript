import React, { useCallback } from 'react';

interface DroppableProps {
  onDrop?: (event: React.DragEvent<HTMLDivElement>, item: string) => void,
  children: React.ReactNode,
  className?: string,
}

const Droppable = ({ onDrop, children, className }: DroppableProps) => {
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    const itemId = event.dataTransfer.getData('text/plain');
    if (onDrop) onDrop(event, itemId);
  }, [onDrop]);

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault()
      }}
      onDrop={handleDrop}
      className={className}
    >
      {children}
    </div>
  );
};

export default Droppable;