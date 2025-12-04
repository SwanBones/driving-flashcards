import { QuestionGroup } from "@/groups";
import { Question } from "@/questions";
import { Button, Card, Modal } from "antd";
import { useEffect, useState } from "react";
import { useQuestions } from "../stores/questionStore";
import { CheckOutlined } from "@ant-design/icons";
type Props = {
  questions: Question[];
  isOpen: boolean;
  onCancel: () => void;
  questionGroup: QuestionGroup | null;
};
function QuestionModal(props: Props) {
  const { questions, isOpen = false, onCancel, questionGroup } = props;
  const [showAnswers, setShowAnswers] = useState<number[]>([]);
  const { checkQuestions } = useQuestions();
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
            <Card hoverable onClick={() => handleQuestionClick(question)}>
              <div className={`flex-col flex gap-4`}>
                <div className="flex flex-row justify-between gap-2 ">
                  <p className="font-bold">{question.question}</p>
                  {question.checked && (
                    <CheckOutlined className="!text-green-600" />
                  )}
                </div>
                {showAnswers.includes(question.id) && (
                  <div className="border-t border-zinc-100 pt-4">
                    <p>{question.answer}</p>
                  </div>
                )}
              </div>
            </Card>
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
