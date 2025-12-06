"use client";
import QuestionGrid from "./components/QuestionGrid";
import { useQuestions } from "./stores/questionStore";
import QuestionModal from "./components/QuestionModal";
import { useEffect, useMemo, useState } from "react";
import { Question } from "@/questions";
import { QuestionGroup } from "@/groups";
import QuestionList from "./components/QuestionList";
import {
  InfoCircleFilled,
  InfoCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, message } from "antd";
import SettingsModal from "./components/SettingsModal";
import { useSearchParams, useRouter } from "next/navigation";
import { compressBooleans, decompressBooleans } from "./utils/encoding";
import InfoModal from "./components/InfoModal";
import LegalInfo from "./components/LegalInfo";

export default function Home() {
  const { questions, questionGroups, checkQuestions, checkedQuestions } =
    useQuestions();
  const [modalQuestionGroup, setModalQuestionGroup] =
    useState<QuestionGroup | null>(null);
  const [isQuestionModalOpen, setIsQuestionModalOpen] =
    useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState<boolean>(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
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
      checkQuestions(validatedQuestions);
    }
  }, []);

  useEffect(() => {
    updateQuery(codedProgress);
  }, [codedProgress]);

  const handleQuestionGroupClick = (qG: QuestionGroup) => {
    setIsQuestionModalOpen(true);
    setModalQuestionGroup(qG);
  };
  const handleSettingsClick = () => {
    setIsSettingsModalOpen(true);
  };
  const handleInfoClick = () => {
    setIsInfoModalOpen(true);
  };
  const handleSettingsClose = () => {
    setIsSettingsModalOpen(false);
  };

  const modalQuestions: Question[] = useMemo(() => {
    const order = [
      modalQuestionGroup?.questions.VERIF,
      modalQuestionGroup?.questions.QSER,
      modalQuestionGroup?.questions.FirstAid,
    ];

    return questions
      .filter((q) => order.includes(q.id))
      .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  }, [modalQuestionGroup, questions]);

  const handleModalCancel = () => {
    setIsQuestionModalOpen(false);
    setModalQuestionGroup(null);
  };
  const router = useRouter();

  const updateQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("progress", value);
    const scrollY = window.scrollY; // save current scroll
    router.replace(`${window.location.pathname}?${params.toString()}`, {
      scroll: false,
    });
    window.scrollTo(0, scrollY); // restore scroll
  };

  return (
    <div className="flex min-h-screen flex-col flex-inline gap-4 px-20 py-10 items-center justify-center bg-zinc-50 font-sans">
      {/* I NEED A SHADOW ON THIS */}
      <div className="fixed bottom-0 right-0 m-4 bg-white rounded-xl p-4  ">
        <p>heyllow</p>
      </div>
      <div className="flex flex-row self-end gap-2 ">
        <Button
          icon={<SettingOutlined />}
          variant="text"
          onClick={handleSettingsClick}
          className="self-end"
        />

        <Button
          icon={<InfoCircleFilled />}
          variant="text"
          onClick={handleInfoClick}
          className="self-end"
        />
      </div>
      <div className="max-w-6xl flex flex-col items-center gap-8 ">
        <h1>Groupes de questions</h1>
        <div className="bg-zinc-100 rounded-xl p-10">
          <QuestionGrid
            questionGroups={questionGroups}
            onItemClick={handleQuestionGroupClick}
          />
        </div>

        <h1 className="mt-4">Questions uniques</h1>

        <QuestionList />
        <LegalInfo />
      </div>
      <SettingsModal
        progressCode={codedProgress}
        isOpen={isSettingsModalOpen}
        onCancel={handleSettingsClose}
      />
      <QuestionModal
        questionGroup={modalQuestionGroup}
        questions={modalQuestions}
        isOpen={isQuestionModalOpen}
        onCancel={handleModalCancel}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />
      {contextHolder}
    </div>
  );
}
