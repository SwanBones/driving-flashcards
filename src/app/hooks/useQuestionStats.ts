import { Question } from "@/questions";
import { useQuestions } from "../stores/questionStore";
import { useMemo } from "react";

export const useQuestionStats: () => {
  [str: string]: {
    total: number;
    totalChecked: number;
    color: string;
    title: string;
  };
} = () => {
  const checkedQuestions = useQuestions((s) => s.checkedQuestions);
  const questions = useQuestions((s) => s.questions);
  const separateVerifs = useQuestions((s) => s.separateVerifs);
  return useMemo(
    () => ({
      ...(separateVerifs
        ? {
            VI: {
              total: questions.filter((q) => q.type === "VI").length,
              totalChecked: questions.filter(
                (q) => q.type === "VI" && checkedQuestions.has(q.id),
              ).length,
              color: "bg-pink-400",
              title: "Vérifications Intérieures",
            },
            VE: {
              total: questions.filter((q) => q.type === "VE").length,
              totalChecked: questions.filter(
                (q) => q.type === "VE" && checkedQuestions.has(q.id),
              ).length,
              color: "bg-pink-300",
              title: "Vérifications Exterieures",
            },
          }
        : {
            Verifs: {
              total: questions.filter((q) => q.type === "VI" || q.type === "VE")
                .length,
              totalChecked: questions.filter(
                (q) =>
                  (q.type === "VI" || q.type === "VE") &&
                  checkedQuestions.has(q.id),
              ).length,
              color: "bg-pink-300",
              title: "Vérifications",
            },
          }),
      QSER: {
        total: questions.filter((q) => q.type === "QSER").length,
        totalChecked: questions.filter(
          (q) => q.type === "QSER" && checkedQuestions.has(q.id),
        ).length,
        color: "bg-yellow-400",
        title: "Sécurité Routière",
      },
      FirstAid: {
        total: questions.filter((q) => q.type === "FirstAid").length,
        totalChecked: questions.filter(
          (q) => q.type === "FirstAid" && checkedQuestions.has(q.id),
        ).length,
        color: "bg-lime-500",
        title: "Premiers Secours",
      },
    }),
    [questions, checkedQuestions, separateVerifs],
  );
};
