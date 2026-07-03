import type { IconName } from './features';

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export const howItWorksSteps: Step[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Conoce la red',
    description:
      'Explora recursos, proyectos, centros innovadores y experiencias de ajedrez educativo.',
    icon: 'Plug',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Comparte tu proyecto',
    description:
      'Envía materiales, actividades, talleres, comunicaciones o iniciativas de tu centro.',
    icon: 'Sparkles',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Conecta con ajEdus',
    description:
      'Participa en encuentros, congresos, colaboraciones y espacios de intercambio.',
    icon: 'Workflow',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Lleva el ajedrez al aula',
    description:
      'Aplica propuestas educativas que trabajan estrategia, valores, pensamiento y convivencia.',
    icon: 'Rocket',
  },
];
