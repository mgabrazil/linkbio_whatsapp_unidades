import type { GrupoUnidade } from "@/types";

/**
 * O WhatsApp de cada unidade. É o único arquivo que precisa mudar para
 * incluir, editar, reordenar ou remover uma unidade — a lista da página
 * se ajusta sozinha.
 *
 * Formato do link: https://wa.me/55 + DDD + número com o 9, só dígitos.
 * Ex.: (61) 9 8255-5095 → https://wa.me/5561982555095
 */
export const grupos: GrupoUnidade[] = [
  {
    id: "eptg",
    nome: "EPTG",
    link: "https://wa.me/5561982555095",
  },
  {
    id: "aguas-claras",
    nome: "Águas Claras",
    link: "https://wa.me/5561995742168",
  },
  {
    id: "asa-sul",
    nome: "Asa Sul",
    link: "https://wa.me/5561995767725",
  },
  {
    id: "asa-norte",
    nome: "Asa Norte",
    link: "https://wa.me/5561996781009",
  },
  {
    id: "valparaiso",
    nome: "Valparaíso",
    link: "https://wa.me/5561995724077",
  },
];
