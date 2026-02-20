/**
 * WhatsAppButton - Botão Flutuante
 * 
 * Componente que exibe um botão flutuante no canto inferior direito
 * com link para WhatsApp e animação suave.
 * 
 * Design: Minimalismo Elegante
 * - Posicionamento fixo no canto inferior direito
 * - Animação de entrada suave (fade + slide)
 * - Hover com efeito sutil de elevação
 * - Ícone lucide-react integrado
 */

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { pageConfig } from '@/data/config';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={pageConfig.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
