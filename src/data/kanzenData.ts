export interface UnitInfo {
  id: string;
  name: string;
  shortName: string;
  neighborhood: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  whatsappRaw: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
  mapsUrl: string;
  badge?: string;
  servicesAvailable: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  highlights: string[];
  included: string[];
  tag: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Dados oficiais verificados diretamente no site kanzenpetcenter.com.br e canais oficiais
export const KANZEN_CONTACT = {
  brandName: 'Kanzen Pet Center',
  tradeName: 'Kanzen Pet Center',
  legalName: 'Kanzen Pet Center Ltda',
  cnpj: '39.300.922/0001-50',
  primaryPhone: '(11) 3731-3275',
  primaryWhatsApp: '(11) 3731-3275',
  primaryWhatsAppRaw: '551137313275',
  officialWebsite: 'https://www.kanzenpetcenter.com.br',
  farmaciaUrl: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/categorias/farmacia',
  instagram: 'https://instagram.com/kanzenpetcenter',
  facebook: 'https://facebook.com/kanzenpetcenter',
  email: 'contato@kanzenpetcenter.com.br',
};

// Diferenciais reais de compra e atendimento verificados no site oficial da Kanzen
export const STORE_HIGHLIGHTS = [
  { label: 'Receba em Horas*', desc: 'Entrega rápida para o seu pet no conforto de casa' },
  { label: 'Retire na Loja com Desconto', desc: 'Compre online ou no WhatsApp e retire na loja' },
  { label: 'Frete Grátis*', desc: 'Condições especiais de frete para a região' },
  { label: 'Parcelado sem Juros', desc: 'Facilidade no pagamento de rações e medicamentos' },
];

// Unidades verificadas
export const UNITS_DATA: UnitInfo[] = [
  {
    id: 'butanta',
    name: 'Kanzen Pet Center - Butantã',
    shortName: 'Butantã',
    neighborhood: 'Jardim Bonfiglioli / Butantã',
    city: 'São Paulo - SP',
    address: 'Av. Comendador Alberto Bonfiglioli, 587 - Jardim Bonfiglioli',
    phone: '(11) 3731-3275',
    whatsapp: '(11) 3731-3275',
    whatsappRaw: '551137313275',
    hoursWeekday: 'Segunda a Sexta: 08h30 às 19h00',
    hoursSaturday: 'Sábado: 08h30 às 18h00',
    hoursSunday: 'Domingo: Fechado',
    mapsUrl: 'https://maps.google.com/?q=Av.+Comendador+Alberto+Bonfiglioli,+587+-+Jardim+Bonfiglioli,+São+Paulo+-+SP',
    badge: 'Loja & Centro de Cuidados',
    servicesAvailable: ['Pet Shop Completo', 'Farmácia Veterinária', 'Banho e Tosa', 'Retirada na Loja', 'Delivery'],
  },
];

// Categorias oficiais extraídas do catálogo kanzenpetcenter.com.br
export const FARMACIA_SUBCATEGORIES = [
  {
    id: 'antipulgas',
    name: 'Anti-pulgas e Carrapatos',
    desc: 'Comprimidos mastigáveis, pipetas e coleiras de proteção contínua',
    examples: 'WellPet, Simparic, Bravecto, NexGard',
    link: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/sub-categorias/antipulgas-e-carrapatos',
  },
  {
    id: 'antibioticos',
    name: 'Antibióticos e Anti-inflamatórios',
    desc: 'Tratamentos bacterianos, pós-operatórios e alívio da dor sob prescrição',
    examples: 'Comprimidos, injetáveis e soluções palatáveis',
    link: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/categorias/farmacia',
  },
  {
    id: 'dermatologicos',
    name: 'Cuidados Dermatológicos',
    desc: 'Sprays cicatrizantes, pomadas, loções e shampoos terapêuticos',
    examples: 'Furanil Spray, sprays antissépticos e hidratantes tópicos',
    link: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/categorias/farmacia',
  },
  {
    id: 'oftalmologicos',
    name: 'Cuidados Oftalmológicos & Gerais',
    desc: 'Colírios, higienizadores de olhos e condroprotetores articulares',
    examples: 'Soluções higienizadoras, colírios e suplementos vitamínicos',
    link: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/categorias/farmacia',
  },
];

// Serviços prestados no centro pet
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'banho-tosa',
    title: 'Banho & Tosa Especializado',
    shortDesc: 'Higienização completa com toalhas 100% esterilizadas e produtos hipoalergênicos.',
    highlights: [
      'Toalhas esterilizadas e lacradas individualmente para cada pet',
      'Shampoos suaves e cosméticos dermatológicos',
      'Secagem cuidadosa em ambiente climatizado',
      'Vidro panorâmico para o tutor acompanhar o atendimento',
    ],
    included: ['Limpeza auricular', 'Corte de unhas', 'Escovação de pelos', 'Finalização suave'],
    tag: 'Estética Pet',
    badge: 'Mais Procurado',
  },
  {
    id: 'farmacia-veterinaria',
    title: 'Farmácia Veterinária Completa',
    shortDesc: 'Catálogo de medicamentos, antipulgas e cuidados dermatológicos originais.',
    highlights: [
      'Anti-pulgas e carrapatos de referência nacional',
      'Antibióticos, anti-inflamatórios e cicatrizantes tópicos',
      'Medicamentos para cães e gatos com controle de validade e lote',
      'Orientações claras para administração ao seu pet',
    ],
    included: ['Lotes novos e frescos', 'Armazenamento refrigerado controlado'],
    tag: 'Farmácia Pet',
    badge: 'Catálogo Oficial',
  },
  {
    id: 'racoes-petshop',
    title: 'Rações, Petiscos & Nutrição',
    shortDesc: 'Alimentos secos e úmidos super premium, petiscos e biscoitos saudáveis.',
    highlights: [
      'Rações para filhotes, adultos e idosos de todas as raças',
      'Petiscos naturais, cookies funcionais e sachês úmidos',
      'Retire na loja com desconto ou receba em casa',
    ],
    included: ['Marcas de alta digestibilidade', 'Embalagens originais lacradas'],
    tag: 'Nutrição Animal',
  },
  {
    id: 'higiene-acessorios',
    title: 'Tapetes, Higiene & Areias',
    shortDesc: 'Tapetinhos higiênicos, areias e sílicas antiodor para cães e gatos.',
    highlights: [
      'Tapetes higiênicos de alta absorção para cães',
      'Areias e sílicas antiodor para gatos',
      'Brinquedos e acessórios selecionados para o bem-estar',
    ],
    included: ['Produtos com qualidade testada', 'Pronta-entrega no delivery'],
    tag: 'Higiene & Bem-estar',
  },
];

export const DIFFERENTIALS_DATA = [
  {
    icon: 'shield',
    title: 'Toalhas Esterilizadas',
    desc: 'Esterilizadas em processo hospitalar e lacradas individualmente para proteger a pele do seu pet.',
    badge: '100% Seguro',
  },
  {
    icon: 'sparkles',
    title: 'Farmácia com Procedência',
    desc: 'Medicamentos e antipulgas originais direto dos laboratórios certificados para saúde do seu pet.',
    badge: 'Garantia de Origem',
  },
  {
    icon: 'eye',
    title: 'Vidro Panorâmico',
    desc: 'Transparência total para você acompanhar a higienização do seu melhor amigo sem barreiras.',
    badge: 'Transparência',
  },
  {
    icon: 'heart',
    title: 'Receba em Horas ou Retire',
    desc: 'Facilidade para pedir por WhatsApp e receber no mesmo dia ou retirar na loja com desconto.',
    badge: 'Comodidade',
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'f1',
    question: 'Como faço para pedir medicamentos da farmácia ou ração?',
    answer: 'Você pode pedir diretamente pelo nosso WhatsApp oficial no (11) 3731-3275 ou pelo site oficial kanzenpetcenter.com.br, com entrega rápida para a sua casa ou opção de retirada na loja com desconto.',
  },
  {
    id: 'f2',
    question: 'Por que o banho da Kanzen usa toalhas lacradas individualmente?',
    answer: 'A reutilização de toalhas é uma das maiores causas de transmissão de fungos e dermatites. Na Kanzen, cada atendimento utiliza uma toalha esterilizada em lavanderia hospitalar com laudo e aberta na hora.',
  },
  {
    id: 'f3',
    question: 'Quais tipos de medicamentos estão disponíveis na farmácia pet?',
    answer: 'Temos catálogo com antipulgas e carrapaticidas, vermífugos, antibióticos, anti-inflamatórios, cuidados dermatológicos (como sprays e pomadas cicatrizantes) e cuidados oftalmológicos para cães e gatos.',
  },
  {
    id: 'f4',
    question: 'Qual é o endereço e horário da loja física?',
    answer: 'Nossa loja fica na Av. Comendador Alberto Bonfiglioli, 587 - Jardim Bonfiglioli / Butantã, São Paulo - SP. Atendemos de segunda a sexta das 08h30 às 19h e sábados das 08h30 às 18h.',
  },
];

export interface TestimonialItem {
  id: string;
  tutorName: string;
  petInfo: string;
  unit: string;
  text: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    tutorName: 'Mariana S.',
    petInfo: 'Bento · Golden Retriever',
    unit: 'Butantã',
    text: 'Atendimento nota 10! Produtos de primeira linha e o Bento sempre volta calmo, cheiroso e com o pelo macio.',
  },
  {
    id: 't2',
    tutorName: 'Rodrigo F.',
    petInfo: 'Mel · Spitz Alemão',
    unit: 'Delivery & Butantã',
    text: 'A entrega dos medicamentos e da ração é rápida demais. Atendimento atencioso pelo WhatsApp.',
  },
  {
    id: 't3',
    tutorName: 'Camila N.',
    petInfo: 'Mimi · Gata Persa',
    unit: 'Butantã',
    text: 'Ambiente tranquilo e profissionais com muita paciência. Encontro tudo da farmácia em um só lugar.',
  },
];

// Categorias do e-commerce oficial da Kanzen
export const PRODUCT_CATEGORIES = [
  {
    id: 'farmacia',
    name: 'Medicamentos & Farmácia',
    desc: 'Antipulgas, antibióticos, cuidados dermatológicos e oftalmológicos',
    link: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/categorias/farmacia',
  },
  {
    id: 'racoes',
    name: 'Rações Secas & Úmidas',
    desc: 'Alimentos completos para cães e gatos de todas as raças e portes',
    link: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/categorias/racoes/sub-categorias/seca',
  },
  {
    id: 'petiscos',
    name: 'Petiscos & Cookies',
    desc: 'Cookies Premier, bifinhos naturais e snacks saudáveis',
    link: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/categorias/racoes/sub-categorias/petiscos/sub-categorias/umida',
  },
  {
    id: 'higiene',
    name: 'Tapetinhos, Areias & Higiene',
    desc: 'Tapetes higiênicos absorventes e areias sanitárias antiodor',
    link: 'https://www.kanzenpetcenter.com.br/produtos/especies/cachorro/categorias/higiene',
  },
];
