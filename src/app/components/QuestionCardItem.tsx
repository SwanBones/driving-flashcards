import { Question } from "@/questions";
import { Card } from "antd";
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
  return (
    <Card
      hoverable
      onClick={() => handleQuestionClick(question)}
      className="group hover:cursor-fine"
    >
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
