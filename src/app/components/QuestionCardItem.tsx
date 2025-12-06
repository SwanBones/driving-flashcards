import { Question, QuestionType } from "@/questions";
import { Card, Tag } from "antd";
import UncheckableBox from "./UncheckableBox";
import { useQuestions } from "../stores/questionStore";
type Props = {
  question: Question;
  checkMarkClassname: string;
  handleQuestionClick: (q: Question) => void;
  showAnswers: number[];
};
function QuestionCardItem(props: Props) {
  const { question, checkMarkClassname, showAnswers, handleQuestionClick } =
    props;
  const { uncheckQuestions } = useQuestions();
  const tag: any = {
    QSER: { color: "lime", label: "Question Variée" },
    VERIF: { color: "red", label: "Vérification" },
    FirstAid: { color: "orange", label: "Premiers secours" },
  }[question.type];
  return (
    <Card
      hoverable
      onClick={() => handleQuestionClick(question)}
      className="group hover:cursor-fine"
    >
      <div className="absolute -top-2 -left-2">
        <Tag color={tag.color}>{tag.label}</Tag>
      </div>

      <div className={`flex-col flex gap-4`}>
        <div className="flex flex-row justify-between gap-2 ">
          <p className="font-bold">{question.question}</p>
          {question.checked && (
            // <CheckOutlined className="!text-green-600" />
            <UncheckableBox
              checkMarkClassname={checkMarkClassname}
              onUncheck={() => uncheckQuestions([question.id])}
            />
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
}
export default QuestionCardItem;
