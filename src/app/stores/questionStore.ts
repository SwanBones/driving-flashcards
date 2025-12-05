import { create } from "zustand";
import { Question, questions } from "@/questions";
import { questionGroups } from "@/groups";

export interface QuestionsState {
  questions: Question[];
  questionGroups: any[]; // replace with actual type if you have one
  checkedQuestions: number[];
  checkQuestions: (ids: number[]) => void;
  uncheckQuestions: (id: number[]) => void;

  checkQuestionGroup: (id: number) => void;
  uncheckQuestionGroup: (id: number) => void;
}

export const useQuestions = create<QuestionsState>((set) => ({
  questions: questions as Question[],
  questionGroups,
  checkedQuestions: [],
  checkQuestions: (ids) =>
    set((state) => ({
      checkedQuestions: Array.from(
        new Set([...state.checkedQuestions, ...ids])
      ),
      questions: state.questions.map((q, idx) =>
        ids.includes(idx + 1) ? { ...q, checked: true } : q
      ),
    })),

  uncheckQuestions: (ids) =>
    set((state) => ({
      checkedQuestions: state.checkedQuestions?.filter(
        (cq) => !ids.includes(cq)
      ),
      questions: state.questions.map((q, idx) =>
        ids.includes(idx + 1) ? { ...q, checked: false } : q
      ),
    })),

  checkQuestionGroup: (id) =>
    set((state) => ({
      questions: state.questions.map((q, idx) =>
        idx === id - 1 ? { ...q, checked: true } : q
      ),
    })),

  uncheckQuestionGroup: (id) =>
    set((state) => ({
      questions: state.questions.map((q, idx) =>
        idx === id - 1 ? { ...q, checked: false } : q
      ),
    })),
}));
