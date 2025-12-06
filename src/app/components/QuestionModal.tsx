import { QuestionGroup } from "@/groups";
import { Question } from "@/questions";
import { Button, Card, Modal, Tooltip } from "antd";
import { MouseEventHandler, useEffect, useState } from "react";
import { useQuestions } from "../stores/questionStore";
import { CheckOutlined, CloseCircleFilled } from "@ant-design/icons";
import UncheckableBox from "./UncheckableBox";
import QuestionCardItem from "./QuestionCardItem";
type Props = {
  questions: Question[];
  isOpen: boolean;
  onCancel: () => void;
  questionGroup: QuestionGroup | null;
};
function QuestionModal(props: Props) {
  const { questions, isOpen = false, onCancel, questionGroup } = props;
  const [showAnswers, setShowAnswers] = useState<number[]>([]);
  const { checkQuestions, uncheckQuestions } = useQuestions();
  const onInternalCancel = () => {
    setShowAnswers([]);
    onCancel();
  };
  const handleToggleAnswers = () => {
    {
      if (showAnswers.length === 3) {
        setShowAnswers([]);
      } else {
        setShowAnswers([
          questionGroup?.questions.FirstAid ?? -1,
          questionGroup?.questions.QSER ?? -1,
          questionGroup?.questions.VERIF ?? -1,
        ]);
        checkQuestions([
          questionGroup?.questions.FirstAid ?? -1,
          questionGroup?.questions.QSER ?? -1,
          questionGroup?.questions.VERIF ?? -1,
        ]);
      }
    }
  };
  const handleQuestionClick = (question: Question) => {
    if (showAnswers.includes(question.id)) {
      setShowAnswers((as) => as.filter((a) => a !== question.id));
    } else {
      setShowAnswers((as) => [...as, question.id]);
      checkQuestions([question.id]);
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onInternalCancel}
      title={`Groupe de question #${questionGroup?.group_id}`}
      footer
      centered
    >
      <div className="flex flex-col gap-2">
        {questions.map((question) => {
          return (
            <QuestionCardItem
              key={`question-modal-${question.id}`}
              question={question}
              checkMarkClassname={"!text-green-600"}
              handleQuestionClick={handleQuestionClick}
              showAnswers={showAnswers}
            />
          );
        })}
        <Button onClick={handleToggleAnswers} size="large" className="mt-4">
          {showAnswers.length === 3
            ? "Cacher les réponses"
            : `Révéler les réponses`}
        </Button>
      </div>
    </Modal>
  );
}

export default QuestionModal;

{
  /* <Tooltip
                      title="Décocher cette question"
                      mouseEnterDelay={1}
                      placement="right"
                    >
                      <button
                        onClick={(e) => handleUncheckQuestion(e, question.id)}
                        className=" p-2 hover:cursor-pointer relative inline-flex items-center justify-center overflow-hidden w-10  font-medium text-neutral-200"
                      >
                        <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                          <CheckOutlined className="!text-green-600" />
                        </div>
                        <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                          <div className=" hover:opacity-70 transition-opacity duration-100  group-hover:flex  ">
                            <CloseCircleFilled />
                          </div>
                        </div>
                      </button>
                    </Tooltip> */
}
