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
    QSER: { color: "lime", label: "Sécurité Routière" },
    VE: { color: "magenta", label: "Vérification Exterieure" },
    VI: { color: "magenta", label: "Vérification Intérieure" },
    FirstAid: { color: "orange", label: "Premiers secours" },
  }[question.type];

  return (
    <Card
      hoverable
      onClick={() => handleQuestionClick(question)}
      className=" hover:cursor-fine"
    >
      <div className="absolute -top-2 -left-2">
        <Tag color={tag.color}>{tag.label}</Tag>
      </div>

      <div className={`flex-col flex gap-4`}>
        <div className="flex flex-row justify-between gap-2 ">
          <p className="font-bold">{question.question}</p>
          {question.checked && (
            // <CheckOutlined className="!text-lime-500" />
            <UncheckableBox
              checkMarkClassname={checkMarkClassname}
              onUncheck={() => uncheckQuestions([question.id])}
            />
          )}
        </div>
        {showAnswers.includes(question.id) && (
          <div className="border-t border-zinc-100 pt-4">
            <p>{question.answer}</p>
            <div className="flex-col flex items-center justify-center">
              {question.img?.[0] && (
                <img
                  src={`/answer_img/${question.img?.[0]}`}
                  alt="Image d'aide"
                  className="max-h-30 rounded-xl mt-4"
                />
              )}
              {question.imgCredit && (
                <a
                  className="!text-gray-500 decoration-none italic text-xs text-center mt-2"
                  target="_blank"
                  href={question.imgCredit}
                >
                  Source Image: {question.imgCredit}
                </a>
              )}
              {question.img?.[1] && (
                <img
                  src={`/answer_img/${question.img?.[1]}`}
                  alt="Image de Rappel"
                  className="max-h-30 pt-6 border-t mt-4 border-zinc-300"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
export default QuestionCardItem;
