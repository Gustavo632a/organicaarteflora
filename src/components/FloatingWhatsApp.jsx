import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/whatsapp';
import { ExternalLink } from './Shared';
export default function FloatingWhatsApp() { return <div className="floating-dock"><ExternalLink className="floating-whatsapp" href={WHATSAPP_URL} aria-label="Falar com a gente no WhatsApp"><MessageCircle size={20} /><span className="desktop-label">Falar com a gente</span><span className="mobile-label">WhatsApp</span></ExternalLink></div>; }
