import { Check } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div
      key={message}
      role="status"
      className="fixed bottom-6 left-1/2 z-[60] flex animate-toast-in items-center gap-3 rounded-full bg-pine-900 px-5 py-3 text-sm font-medium text-white shadow-2xl"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-cocoa">
        <Check size={14} strokeWidth={3} />
      </span>
      {message}
    </div>
  );
}
