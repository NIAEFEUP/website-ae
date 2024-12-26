import { Feature } from "@/types/feature";
import { Heart, Users } from "lucide-react";

const workshopData: Feature[] = [
   {
      id: 1,
      icon: <Heart />,
      title: "Cursos de Idiomas",
      description:
         "A AEFEUP em parceria com o Instituto de Línguas Núcleo disponibiliza à sua comunidade um vasto conjunto de formações em línguas importantes para o contínuo desenvolvimento de competências. A formação é realizada nas instalações da FEUP ou em formato LiveTraining (formação on-line).\n O Núcleo FCL oferece uma vasta gama de cursos de línguas mediante a necessidade ou objetivo dos estudantes, permitindo obter certificação nas línguas Português, Italiano, Alemão, Inglês e Francês.\nTodos os cursos são certificados.\nTodos os níveis têm a duração de 30h, com o valor total de 85€.",
      details: [
         "1. Preencher a ficha de inscrição que se encontra em anexo e devolver para fcl.nucleo@gmail.com.",
         "2. Solicitar NIB para efetuar transferência para validar inscrição.",
         "3. Solicitar teste de nível para fcl.nucleo@gmail.com.",
         "4. Aguardar colocação na turma."
      ],
   },
   {
      id: 2,
      icon: <Users />,
      title: "Cursos de Formação Técnica",
      description: "A AEFEUP em parceria com Ciências e Letras disponibiliza à sua comunidade um vasto conjunto de formações importantes para o contínuo desenvolvimento de competências e conhecimento. A formação é realizada nas instalações da FEUP ou em formato LiveTraining (formação on-line).\nCiência e Letras oferece uma ampla variedade de cursos técnicos para atender às necessidades dos nossos estudantes,  estando certificados em várias áreas incluindo Criação de Plantas de Emergência, Qgis, HL7 Fhir, Photoshop, AutoCad 2D, Revit Architecture, Revit MEP, Solidworks, Excel Avançado, MS Project, MS Word, VBA entre outros.\nCertificado SIGO no final da formação.\nTodos os semestres são partilhadas as formações e os horários disponíveis para os estudantes se inscreverem.\nAs inscrições devem ser feitas presencialmente na secretaria da AEFEUP e fecham até 3 dias antes do início das formações.\n",
      details: [
         "Email: secretaria@aefeup.pt",
         "Telefone: 225 081 556",
      ],
      href: "www.ciencia-letras.pt",
   },
];

export default workshopData;
