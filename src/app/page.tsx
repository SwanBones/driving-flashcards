"use client";
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

  const modalQuestions: Question[] = useMemo(() => {
    const order = [
      modalQuestionGroup?.questions.QSER,
      modalQuestionGroup?.questions.VERIF,
      modalQuestionGroup?.questions.FirstAid,
    ];

    return questions
      .filter((q) => order.includes(q.id))
      .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  }, [modalQuestionGroup, questions]);

  const handleModalCancel = () => {
    setModalIsOpen(false);
    setModalQuestionGroup(null);
  };

  return (
    <div className="flex min-h-screen flex-col flex-inline gap-4 p-20 items-center justify-center bg-zinc-50 font-sans ">
      <div className="max-w-6xl flex flex-col items-center gap-8">
        <h1>Groupes de questions</h1>
        <QuestionGrid
          questionGroups={questionGroups}
          onItemClick={handleQuestionGroupClick}
        />
        <h1 className="mt-4">Questions uniques</h1>
        <QuestionList />
      </div>
      <QuestionModal
        questionGroup={modalQuestionGroup}
        questions={modalQuestions}
        isOpen={modalIsOpen}
        onCancel={handleModalCancel}
      />
    </div>
  );
}
