"use client";

import Image from "next/image";
import QuestionGrid from "./components/QuestionGrid";
import { useQuestions } from "./stores/questionStore";
import QuestionModal from "./components/QuestionModal";
import { useMemo, useState } from "react";
import { Question } from "@/questions";
import { QuestionGroup } from "@/groups";
import QuestionList from "./components/QuestionList";

export default function Home() {
  const { questions, questionGroups } = useQuestions();
  const [modalQuestionGroup, setModalQuestionGroup] =
    useState<QuestionGroup | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const handleQuestionGroupClick = (qG: QuestionGroup) => {
    setModalIsOpen(true);
    setModalQuestionGroup(qG);
  };
  const modalQuestions: Question[] = useMemo(
    () =>
      questions.filter(
        (q: Question) =>
          q.id === modalQuestionGroup?.questions.SECUR ||
          q.id === modalQuestionGroup?.questions.VERIF ||
          q.id === modalQuestionGroup?.questions.FirstAid
      ),
    [modalQuestionGroup]
  );
  const handleModalCancel = () => {
    setModalIsOpen(false);
    setModalQuestionGroup(null);
  };

  return (
    <div className="flex min-h-screen flex-col flex-inline gap-4 items-center justify-center bg-zinc-50 font-sans ">
      <h1>Groupes de questions</h1>
      <QuestionGrid
        questionGroups={questionGroups}
        onItemClick={handleQuestionGroupClick}
      />

      <h1>Questions uniques</h1>
      <QuestionList />
      <QuestionModal
        questionGroup={modalQuestionGroup}
        questions={modalQuestions}
        isOpen={modalIsOpen}
        onCancel={handleModalCancel}
      />
    </div>
  );
}
