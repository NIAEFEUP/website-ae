import { Feature } from "@/types/feature";
import { Utensils } from 'lucide-react';
import { Printer } from 'lucide-react';
import { ScrollText } from 'lucide-react';



const servicesFeaturesData: Feature[] = [
  {
    id: 1,
    icon: <ScrollText />,
    title: "Secretaria",
    description:
      "A Secretaria e Loja da AEFEUP é uma estrutura de apoio aos estudantes e à direção da AEFEUP. Neste serviço podes efetuar pagamentos de cauções para atividades, pagamento de atividades, compra de bilhetes para os nossos maiores eventos ou merchandising ou ainda secção de perdidos e achados.",
  },
  {
    id: 2,
    icon: <Printer />,
    title: "Reprografia Efeitos Gráficos",
    description:
      "A reprografia Efeitos Gráficos é um serviço que oferece soluções rápidas e práticas para as necessidades de impressão e cópia. Localizada no edifício da AEFEUP, a reprografia conta com uma ampla variedade de serviços, como impressão, encadernação, digitalização e personalização de materiais gráficos nos variados formatos, a preços académicos.",
  },
  {
    id: 3,
    icon: <Utensils />,
    title: "Cafetaria",
    description:
      "O Bar da AEFEUP oferece uma ampla variedade de produtos para atender às necessidades dos estudantes. Além de ser um bom ponto de encontro para socializar e fazer pausas entre as aulas, também oferece uma vasta oferta para alimentação: desde refeições a um preço acessível, a alguns  snacks, como sandes, salgados e bolos.",
  },
];

export default servicesFeaturesData;
