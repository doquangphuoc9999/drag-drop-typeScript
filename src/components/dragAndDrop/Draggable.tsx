import React, { useRef } from 'react';
import ContentDrop from '../layout/LayoutDragDrop/dropLayout/contentDrop/ContentDropForm';

interface DraggableProps {
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void,
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void,
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void,
  children: React.ReactNode,
  id: string,
  className?: string,
}

const Draggable = ({ onDragStart, onDragOver, onDrop, children, id, className }: DraggableProps) => {
  const dragRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (dragRef.current) {
      event.dataTransfer.setData("text/plain", dragRef.current.id);
      event.dataTransfer.dropEffect = "move";
    }
    if (onDragStart) {
      onDragStart(event);
    }
  };


  const hello = () => {
    
  }
  return (
    <div
      id={id}
      ref={dragRef}
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={(event) => {
        event.preventDefault();
        if (onDragOver) onDragOver(event);
      }}
      onDrop={(event) => {
        event.preventDefault();
        if (onDrop) onDrop(event);
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Draggable;