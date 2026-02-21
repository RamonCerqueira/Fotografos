/**
 * Tipos TypeScript para a Landing Page do Fotógrafo
 * Define interfaces e tipos reutilizáveis em toda a aplicação
 */

// ============================================
// Tipos de Portfólio
// ============================================

/**
 * Representa uma imagem no portfólio do fotógrafo
 */
export interface PortfolioImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'ensaios' | 'casamentos' | 'eventos' | 'casal' | 'corporativo' | 'artistico' | 'minimalista' | 'natureza';
  alt?: string;
}

// ============================================
// Tipos de Serviços
// ============================================

/**
 * Representa um serviço oferecido pelo fotógrafo
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Nome do ícone lucide-react
  features: string[];
}

// ============================================
// Tipos de Depoimentos
// ============================================

/**
 * Representa um depoimento de cliente
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string; // Ex: "Noiva", "Empresária", "Casal"
  content: string;
  rating: number; // 1-5
  imageUrl?: string;
}

// ============================================
// Tipos de Formulário de Contato
// ============================================

/**
 * Dados do formulário de contato
 */
export interface ContactFormData {
  name: string;
  whatsapp: string;
  message: string;
  plan?: string;
  layoutModel?: string;
  currentSite?: string;
  instagram?: string;
}

/**
 * Estado de envio do formulário
 */
export interface FormSubmissionState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

// ============================================
// Tipos de Configuração
// ============================================

/**
 * Configurações de contato do fotógrafo
 */
export interface ContactConfig {
  whatsappUrl: string;
  whatsappNumber: string;
  email: string;
  instagramHandle?: string;
}

/**
 * Configurações gerais da página
 */
export interface PageConfig {
  photographerName: string;
  tagline: string;
  description: string;
  contact: ContactConfig;
}

// ============================================
// Tipos de Animação
// ============================================

/**
 * Variantes de animação Framer Motion
 */
export interface AnimationVariants {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

// ============================================
// Tipos de Seções
// ============================================

/**
 * Ponto de dor do cliente
 */
export interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: string; // Nome do ícone lucide-react
}

/**
 * Benefício da landing page
 */
export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string; // Nome do ícone lucide-react
}
