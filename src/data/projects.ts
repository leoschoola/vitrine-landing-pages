export type Category = 'comercio' | 'autonomo' | 'ferramenta' | 'arte';

export interface Project {
  href: string;
  image: string;
  imageAlt: string;
  tag: string;
  name: string;
  description: string;
  category: Category;
  hero?: boolean;
  imagePosition?: string;
}

export const projects: Project[] = [
  {
    href: '/barbearia/',
    image: '/images/barbearia.webp',
    imageAlt: 'Dom Cortes Barbearia',
    tag: 'Barbearia',
    name: 'Dom Cortes',
    description: 'Site institucional com agenda direto pro WhatsApp e prova social (+5.000 clientes, 15 anos).',
    category: 'comercio',
  },
  {
    href: '/petshop/',
    image: '/images/petshop.webp',
    imageAlt: 'PetLux pet shop e clínica',
    tag: 'Pet shop & clínica',
    name: 'PetLux',
    description: 'Página híbrida loja + clínica, com selo de confiança (+500 famílias, nota 4.9).',
    category: 'comercio',
  },
  {
    href: '/estetica-automotiva/',
    image: '/images/estetica.webp',
    imageAlt: 'F.N.D estética automotiva premium',
    tag: 'Estética automotiva',
    name: 'F.N.D Acessórios',
    description: 'Tom premium/tech pra justificar ticket alto — garantia de 5 anos em destaque.',
    category: 'comercio',
  },
  {
    href: '/almoco-ja/',
    image: '/images/almoco.webp',
    imageAlt: 'Almoço Já marmitaria e delivery',
    tag: 'Marmitaria & delivery',
    name: 'Almoço Já!',
    description: 'Cardápio com preço visível e CTA de pedido — feita pra converter no impulso.',
    category: 'comercio',
  },
  {
    href: '/fotografa/',
    image: '/images/fotografa.webp',
    imageAlt: 'Isabela Moura fotógrafa',
    tag: 'Fotografia',
    name: 'Isabela Moura',
    description: 'Estética editorial — a página vende o olhar da fotógrafa, não só o serviço.',
    category: 'autonomo',
    imagePosition: 'center top',
  },
  {
    href: '/vet-camila-duarte/',
    image: '/images/vet.webp',
    imageAlt: 'Dra. Camila Duarte veterinária domiciliar',
    tag: 'Medicina veterinária',
    name: 'Dra. Camila Duarte',
    description: 'Autoridade (CRMV) + cobertura por bairro + depoimentos com nome do pet.',
    category: 'autonomo',
  },
  {
    href: '/calculadora-leilao/',
    image: '/images/calculadora.webp',
    imageAlt: 'Calculadora do Arrematador leilão de imóveis',
    tag: 'Ferramenta & lead magnet',
    name: 'Calculadora do Arrematador',
    description: 'Não é uma hero page — é uma ferramenta que resolve uma dúvida real e captura o contato no processo.',
    category: 'ferramenta',
  },
  {
    href: '/portfolio-topolski/',
    image: '/images/atopolski.webp',
    imageAlt: '@atopolski portfólio direção de arte urbana',
    tag: 'Portfólio & direção de arte',
    name: '@atopolski',
    description: 'Hip-hop · cultura urbana · São Paulo, BR. Prova de que a mesma mão que resolve o site de um petshop também entrega estética de capa de disco quando o cliente pede.',
    category: 'arte',
    hero: true,
  },
];
