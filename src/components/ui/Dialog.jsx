import * as React from "react";
import { Dialog as RadixDialog } from "@radix-ui/react-dialog";

export function Dialog({ open, onOpenChange, children }) {
  return (
    <RadixDialog open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog>
  );
}

export function DialogContent({ children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">{children}</div>
    </div>
  );
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-bold mb-4">{children}</h2>;
}
