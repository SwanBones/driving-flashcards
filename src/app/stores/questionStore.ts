import { create } from "zustand";
import { Question, questions } from "@/questions";
import { questionGroups } from "@/groups";

export interface QuestionsState {
  trackQuestions: boolean;
  setTrackQuestions: (newBool: boolean) => void;
  questions: Question[];
  questionGroups: any[]; // replace with actual type if you have one
  checkedQuestions: Set<number>;
  checkQuestions: (ids: number[]) => void;
  uncheckQuestions: (id: number[]) => void;

  checkQuestionGroup: (id: number) => void;
  uncheckQuestionGroup: (id: number) => void;
}

export const useQuestions = create<QuestionsState>((set) => ({
  trackQuestions: true,
  setTrackQuestions: (newBool) => set(() => ({ trackQuestions: newBool })),
  questions: questions as Question[],
  questionGroups,
  checkedQuestions: new Set(),
  checkQuestions: (ids) =>
    set((state) => {
      if (!state.trackQuestions) return {};
      const next = new Set(state.checkedQuestions);
      ids.forEach((id) => next.add(id));

      return {
        checkedQuestions: next,
        questions: state.questions.map((q, idx) =>
          ids.includes(idx + 1) ? { ...q, checked: true } : q
        ),
      };
    }),

  uncheckQuestions: (ids) =>
    set((state) => {
      const next = new Set(state.checkedQuestions);
      ids.forEach((id) => next.delete(id));

      return {
        checkedQuestions: next,
        questions: state.questions.map((q, idx) =>
          ids.includes(idx + 1) ? { ...q, checked: false } : q
        ),
      };
    }),

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
