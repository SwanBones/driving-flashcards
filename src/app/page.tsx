"use client";
import QuestionGrid from "./components/QuestionGrid";
import { useQuestions } from "./stores/questionStore";
import QuestionModal from "./components/QuestionModal";
import { useEffect, useMemo, useState } from "react";
import { Question } from "@/questions";
import { QuestionGroup } from "@/groups";
import QuestionList from "./components/QuestionList";
import { SettingOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import SettingsModal from "./components/SettingsModal";
import { useSearchParams, useRouter } from "next/navigation";
import { compressBooleans, decompressBooleans } from "./utils/encoding";

//TODO:
// - A way to uncheck answers
// - ACTUAL normal number of questions
// - questions with actual explainations and pictures
// - a bit more contrast
// - better theme
// - better question grouping? distinguish SAIP security / Verifs interne and externe?
// README

export default function Home() {
  const { questions, questionGroups, checkQuestions, checkedQuestions } =
    useQuestions();
  const [modalQuestionGroup, setModalQuestionGroup] =
    useState<QuestionGroup | null>(null);
  const [isModalOpen, setIsModalIsOpen] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const searchParams = useSearchParams();

  const progress = searchParams.get("progress");

  const codedProgress = useMemo(() => {
    const numberOfQuestions = questions.length;
    let arrFalse: boolean[] = Array(numberOfQuestions).fill(false);
    checkedQuestions.forEach((id) => (arrFalse[id - 1] = true));
    return compressBooleans(arrFalse);
  }, [checkedQuestions]);

  useEffect(() => {
    if (progress) {
      const booleans = decompressBooleans(progress, questions.length);

      const validatedQuestions: number[] = booleans
        .map((value, index) => {
          return value ? index + 1 : undefined;
        })
        .filter((val) => val !== undefined);
      console.log({ booleans, validatedQuestions });
      checkQuestions(validatedQuestions);
    }
  }, []);

  useEffect(() => {
    updateQuery(codedProgress);
  }, [codedProgress]);

  const handleQuestionGroupClick = (qG: QuestionGroup) => {
    setIsModalIsOpen(true);
    setModalQuestionGroup(qG);
  };
  const handleSettingsClick = () => {
    setIsSettingsModalOpen(true);
  };
  const handleSettingsClose = () => {
    setIsSettingsModalOpen(false);
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
    setIsModalIsOpen(false);
    setModalQuestionGroup(null);
  };
  const router = useRouter();

  const updateQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("progress", value);

    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="flex min-h-screen flex-col flex-inline gap-4 p-20 items-center justify-center bg-zinc-50 font-sans ">
      <Button
        icon={<SettingOutlined />}
        variant="text"
        onClick={handleSettingsClick}
        className="self-end"
      />
      <div className="max-w-6xl flex flex-col items-center gap-8">
        <h1>Groupes de questions</h1>
        <QuestionGrid
          questionGroups={questionGroups}
          onItemClick={handleQuestionGroupClick}
        />
        <h1 className="mt-4">Questions uniques</h1>
        <QuestionList />
      </div>
      <SettingsModal
        progressCode={codedProgress}
        isOpen={isSettingsModalOpen}
        onCancel={handleSettingsClose}
      />
      <QuestionModal
        questionGroup={modalQuestionGroup}
        questions={modalQuestions}
        isOpen={isModalOpen}
        onCancel={handleModalCancel}
      />
      {contextHolder}
    </div>
  );
}
