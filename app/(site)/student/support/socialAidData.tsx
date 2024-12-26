import { Feature } from "@/types/feature";
import { AlertCircle, HelpCircle } from "lucide-react"; // Example icons from a library

const socialAidData: Feature[] = [
  {
    id: 1,
    icon: <AlertCircle />, // Icon for the first feature (you can use any icon library)
    title: "Fundo de Apoio Extraordinário de Emergência Social (FAEES)",
    description:
      "O FAEES é uma medida de caráter pontual e extraordinário de emergência social resultante de ocorrências imprevistas e não enquadráveis nos mecanismos de apoio já estabelecidos e regulamentados.",
  },
  {
    id: 2,
    icon: <HelpCircle />, // Icon for the second feature
    title: "Fundo de Apoio Social",
    description:
      "O Fundo de Apoio Social da Universidade do Porto (FAS) é um programa de apoio aos estudantes em situação de comprovado estado de necessidade económica, que visa contribuir para o combate ao abandono e insucesso escolar.",
  },
];
export default socialAidData;
