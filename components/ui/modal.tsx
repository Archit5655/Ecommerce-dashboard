"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import React from "react";

interface modalprops {
  title: string;
  descriiption: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

 export const Modal: React.FC<modalprops> = ({
  title,
  descriiption,
  isOpen,
  onClose,
  children,
}) => {
  const onChange = () => {
    if (!isOpen) {
      onClose();
    }
  };

  return (
  <Dialog open={isOpen} onOpenChange={onChange}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogDescription>
                {descriiption}
            </DialogDescription>
        </DialogHeader>
        <div>
            {children}
        </div>
    </DialogContent>

  </Dialog>
  )
};


