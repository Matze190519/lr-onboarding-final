import { X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

interface LiveAvatarPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveAvatarPopup({ isOpen, onClose }: LiveAvatarPopupProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-lg bg-[#0a0a0a] rounded-2xl border border-[#C9A86C]/30 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#C9A86C]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-red-500/50">
                <img 
                  src="/images/santa-button.jpg" 
                  alt="Santa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-white">Santa Claus</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online - Vertretung für Mathias
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Avatar Container - IFRAME */}
          <div className="w-full aspect-video bg-gradient-to-b from-black to-gray-900">
            <iframe 
              src="https://embed.liveavatar.com/v1/965406e8-d420-456c-b353-959b6798b5cf" 
              allow="microphone" 
              title="Santa Avatar"
              className="w-full h-full border-none"
            />
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-[#C9A86C]/20 text-center">
            <p className="text-xs text-white/60">
              🎄 Ho ho ho! Frag mich alles zum Onboarding!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
   );
}
