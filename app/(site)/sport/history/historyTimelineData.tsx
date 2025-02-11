import React from "react";
import SportHistoryTable from "@/components/SportHistoryTable";

export const historyTimelineData = [
  {
    title: "2023/2024",
    content: (
      <SportHistoryTable
        data={[
          { label: "Taça CAP", value: "Andebol", classification: "Vencedor" },
          { label: "Supertaça", value: "Voleibol Masculino", classification: "Vencedor" },
          { label: "Supertaça", value: "Futsal Masculino", classification: "Vencedor" },
          { label: "Supertaça", value: "Basquetebol Feminino", classification: "Vencedor" },
          { label: "Supertaça", value: "Andebol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Basquetebol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Basquetebol Feminino", classification: "Vencedor" },
          { label: "CAP", value: "Futebol 11", classification: "Vencedor" },
          { label: "CAP", value: "Voleibol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Counter-Strike", classification: "Vencedor" },
          { label: "CNU", value: "Rugby 7", classification: "3º Lugar" },
          { label: "CNU", value: "Andebol Masculino", classification: "3º Lugar" },
          { label: "European Universities Games 2024", value: "Andebol Masculino", classification: "5º Lugar" },
        ]}
      />
    ),
  },
  {
    title: "2022/2023",
    content: (
      <SportHistoryTable
        data={[
          { label: "Taça CAP", value: "Andebol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Basquetebol Feminino", classification: "Vencedor" },
          { label: "CAP", value: "Futebol 11", classification: "Vencedor" },
          { label: "CNU", value: "Futebol 11", classification: "3º Lugar" },
        ]}
      />
    ),
  },
  {
    title: "2021/2022",
    content: (
      <SportHistoryTable
        data={[
          { label: "Taça CAP", value: "Basquetebol Masculino", classification: "Vencedor" },
          { label: "Taça CAP", value: "Basquetebol Feminino", classification: "Vencedor" },
          { label: "Taça CAP", value: "Voleibol Feminino", classification: "Vencedor" },
          { label: "CAP", value: "Basquetebol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Basquetebol Feminino", classification: "Vencedor" },
          { label: "CAP", value: "Valorant", classification: "Vencedor" },
          { label: "CAP", value: "League of Legends", classification: "Vencedor" },
          { label: "CNU", value: "Rugby 7", classification: "Vencedor" },
        ]}
      />
    ),
  },
  {
    title: "2020/2021",
    content: (
      <SportHistoryTable
        data={[
          { label: "CAP", value: "League of Legends", classification: "Vencedor" },
        ]}
      />
    ),
  },
  {
    title: "2018/2019",
    content: (
      <SportHistoryTable
        data={[
          { label: "Taça CAP", value: "Futsal Feminino", classification: "Vencedor" },
          { label: "Taça CAP", value: "Basquetebol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Basquetebol Masculino", classification: "Vencedor" },
        ]}
      />
    ),
  },
  {
    title: "2017/2018",
    content: (
      <SportHistoryTable
        data={[
          { label: "Taça CAP", value: "Basquetebol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Voleibol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Basquetebol Feminino", classification: "Vencedor" },
          { label: "CNU", value: "Counter-Strike: Global Offensive", classification: "Vencedor" },
          { label: "European University Games", value: "League of Legends", classification: "Vencedor" },
        ]}
      />
    ),
  },
  {
    title: "2016/2017",
    content: (
      <SportHistoryTable
        data={[
          { label: "Supertaça", value: "Andebol Masculino", classification: "Vencedor" },
          { label: "Supertaça", value: "Futsal Masculino", classification: "Vencedor" },
          { label: "Taça CAP", value: "Basquetebol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Futsal Masculino", classification: "Vencedor" },
           { label: "CNU", value: "Counter-Strike: Global Offensive", classification: "Vencedor" },
           { label: "CNU", value: "Voleibol Masculino", classification: "2º Lugar" },
         
        ]}
      />
    ),
  },
  {
    title: "2015/2016",
    content: (
      <SportHistoryTable
        data={[
          { label: "Taça CAP", value: "Futebol 11", classification: "Vencedor" },
          { label: "CAP", value: "Basquetebol Feminino", classification: "Vencedor" },
          { label: "CNU", value: "Voleibol Masculino", classification: "Vencedor" },
          { label: "CNU", value: "Basquetebol Feminino", classification: "3º Lugar" },
        ]}
      />
    ),
  },
  {
    title: "2014/2015",
    content: (
      <SportHistoryTable
        data={[
          { label: "CAP", value: "Voleibol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Voleibol Feminino", classification: "Vencedor" },
          { label: "CNU", value: "Rugby 7", classification: "3º Lugar" },
          { label: "CNU", value: "Voleibol Masculino", classification: "2º Lugar" },
        ]}
      />
    ),
  },
  {
    title: "2013/2014",
    content: (
      <SportHistoryTable
        data={[
          { label: "Taça CAP", value: "Futebol 11", classification: "Vencedor" },
          { label: "CAP", value: "Andebol Masculino", classification: "Vencedor" },
          { label: "CAP", value: "Voleibol Feminino", classification: "Vencedor" },
          { label: "CNU", value: "Basquetebol Masculino", classification: "3º Lugar" },
          { label: "CNU", value: "Voleibol Feminino", classification: "3º Lugar" },
        ]}
      />
    ),
  },
];
