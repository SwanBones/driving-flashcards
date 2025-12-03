import { create } from "zustand";
import { Question, questions } from "@/questions";
import { questionGroups } from "@/groups";

export const useQuestions: any = create((set) => ({
  questions: questions,
  questionGroups: questionGroups,
  checkQuestion: (id: number) =>
    set((state: any) => {
      const qs: Question[] = state.questions;
      qs[id - 1].checked = true;
      return { qs };
    }),
  uncheckQuestion: (id: number) =>
    set((state: any) => {
      const qs: Question[] = state.questions;
      qs[id - 1].checked = false;
      return { qs };
    }),
  checkQuestionGroup: (id: number) =>
    set((state: any) => {
      const qs: Question[] = state.questions;
      qs[id - 1].checked = true;
      return { qs };
    }),
  uncheckQuestionGroup: (id: number) =>
    set((state: any) => {
      const qs: Question[] = state.questions;
      qs[id - 1].checked = false;
      return { qs };
    }),
  //   increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears: any) => set({ bears: newBears }),
}));
