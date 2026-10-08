# Orgânica Art & Flora

Landing page em React, Vite, JavaScript, CSS e lucide-react.

## Executar

```bash
npm install
npm run dev
```

O terminal informa o endereço local. Para produção: `npm run build`. Para conferir o build: `npm run preview`.

## Personalizar

- Categorias: `src/data/products.js`.
- Galeria: `src/data/gallery.js`.
- Pinturas: `src/data/paintings.js`, com quatro obras e consulta individual pelo WhatsApp. A seção aparece após Produtos e permite ampliar cada obra sem cortar a fotografia.
- Contatos e mapa: `src/data/business.js` e `src/utils/whatsapp.js`.
- Cores, layout e responsividade: `src/styles.css`.
- A marca está em `src/components/Shared.jsx`. Adicione a logo oficial em `public/images/logo-organica.png`: o cabeçalho e o rodapé passam a exibi-la automaticamente, preservando as proporções. Sem esse arquivo, a marca tipográfica com ícone permanece como alternativa.

O Hero, Sobre, três categorias e a galeria usam as fotos reais de plantas fornecidas pelo usuário. A galeria organiza as onze fotos pelos nomes dos arquivos: **Bromélias** (4), **Marantas** (4) e **Moreias** (3). Os filtros selecionam o grupo; fotos e lightbox mostram o nome correspondente. Apenas a imagem de **Arranjos** permanece ilustrativa, proveniente do Unsplash, até o envio de uma foto real dessa categoria. Nenhuma imagem confirma estoque atual.

Cada foto tem uma versão WebP principal e uma versão `-small.webp`. Para processar novamente os PNGs originais, execute `node scripts/prepare-plant-images.mjs "C:/Users/gusta/Downloads"`. O script preserva proporções e não amplia os originais. As fontes são carregadas pelo Google Fonts, com alternativas locais.

Para processar as pinturas, execute `node scripts/prepare-painting-images.mjs "C:/Users/gusta/Downloads"`. Se reprocessar todas as imagens, rode primeiro o script das plantas e depois o das pinturas para manter todas as dimensões registradas.

Ao definir o domínio, configure o canonical e `og:url` no `index.html` e transforme `og:image` em URL absoluta. Não foi inventado um domínio. Dados estruturados Florist/LocalBusiness estão no HTML.

O mapa depende do Google Maps e os links de contato abrem os serviços externos. O site não coleta nem armazena dados pessoais. A galeria usa diálogo nativo com foco modal, Escape e navegação pelas setas do teclado.
