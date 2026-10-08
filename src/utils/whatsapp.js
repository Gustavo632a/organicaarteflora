export const WHATSAPP_URL = 'https://wa.me/558386980160';
export const PRODUCT_MESSAGE = 'Olá! Conheci a Orgânica Art & Flora pelo site e gostaria de conhecer as opções disponíveis.';
export const CONTACT_MESSAGE = 'Olá! Conheci a Orgânica Art & Flora pelo site e gostaria de saber mais sobre as plantas e produtos disponíveis.';
export function createWhatsAppUrl(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
