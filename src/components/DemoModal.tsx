import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function DemoModal({ isOpen, onClose, children }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-brand-dark border border-brand-indigo/30 rounded-2xl shadow-2xl shadow-brand-indigo/20 max-w-3xl w-full relative">
        <button
          className="absolute right-4 top-4 text-brand-ice/70 hover:text-white transition-colors"
          onClick={onClose}
          aria-label="Close demo modal"
        >
          <X size={20} />
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
