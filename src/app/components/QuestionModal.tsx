import { QuestionGroup } from "@/groups";
import { Question } from "@/questions";
import { Button, Card, Modal } from "antd";
import { useState } from "react";
import { useQuestions } from "../stores/questionStore";
type Props = {
  questions: Question[];
  isOpen: boolean;
  onCancel: () => void;
  questionGroup: QuestionGroup | null;
};
function QuestionModal(props: Props) {
  const { questions, isOpen = false, onCancel, questionGroup } = props;
  const [showAnswers, setShowAnswers] = useState<number[]>([]);
  const { checkQuestionGroup } = useQuestions();
  const onInternalCancel = () => {
    setShowAnswers([]);
    onCancel();
  };
  const handleToggleAnswers = () => {
    {
      if (showAnswers.length === 3) {
        checkQuestionGroup(questionGroup?.group_id);
        setShowAnswers([]);
      } else {
        setShowAnswers([
          questionGroup?.questions.FirstAid ?? -1,
          questionGroup?.questions.SECUR ?? -1,
          questionGroup?.questions.VERIF ?? -1,
        ]);
      }
    }
  };
  return (
    <Modal
      open={isOpen}
      onCancel={onInternalCancel}
      title={`Groupe de question #${questionGroup?.group_id}`}
    >
      <div className="flex flex-col gap-2">
        {questions.map((question) => {
          return (
            <Card>
              <div
                className={`grid ${
                  showAnswers.includes(question.id)
                    ? "grid-cols-2"
                    : "grid-cols-1"
                } gap-2`}
              >
                <p className="font-bold">{question.question}</p>
                {showAnswers.includes(question.id) && <p>{question.answer}</p>}
              </div>
            </Card>
          );
        })}
        <Button onClick={handleToggleAnswers}>
          {showAnswers.length === 3
            ? "Cacher les réponses"
            : `Révéler les réponses`}
        </Button>
      </div>
    </Modal>
  );
}

export default QuestionModal;
