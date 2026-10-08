// Nomes de plantas fornecidos pelo usuário nos arquivos originais.
export const plantGroups = [
  { id: 'bromelias', name: 'Bromélias' },
  { id: 'marantas', name: 'Marantas' },
  { id: 'moreia', name: 'Moreias' },
];
export const gallery = [
  { src: '/images/moreia1.webp', alt: 'Planta com flores brancas em vaso, ao lado de uma estante com plantas' },
  { src: '/images/bromelias4.webp', alt: 'Bromélia vista de cima, com folhas em tons de cobre e verde' },
  { src: '/images/marantas1.webp', alt: 'Folhagem verde com nervuras rosadas em vaso sobre uma mesa' },
  { src: '/images/bromelias.webp', alt: 'Bromélia de folhas verdes com manchas e pontas avermelhadas' },
  { src: '/images/marantas3.webp', alt: 'Planta em vaso com folhas verdes e bordas rosadas' },
  { src: '/images/moreia3.webp', alt: 'Detalhe das flores brancas entre folhas longas e verdes' },
  { src: '/images/bromelias3.webp', alt: 'Bromélia de folhas verde-limão vista de cima' },
  { src: '/images/bromelias2.webp', alt: 'Bromélia com folhas longas em tons de vermelho e laranja' },
  { src: '/images/marantas4.webp', alt: 'Planta em vaso preto com folhas verdes e manchas rosadas' },
  { src: '/images/marantas2.webp', alt: 'Folhagem com manchas verdes e rosadas em vaso sobre uma mesa' },
  { src: '/images/moreia2.webp', alt: 'Planta com flores brancas e folhas compridas em vaso preto' },
].map(image => {
  const group = plantGroups.find(group => image.src.split('/').pop().startsWith(group.id));
  return { ...image, group: group.id, title: group.name };
});
