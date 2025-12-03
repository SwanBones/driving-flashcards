import { useMemo } from "react";
import { useQuestions } from "../stores/questionStore";
import { Question } from "@/questions";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
function QuestionList() {
  const { questions } = useQuestions();

  const questionNodes: any = useMemo(
    () =>
      questions.map((question: Question, index: number) => {
        return {
          key: `unique-question-${index}`,
          label: question.question,
          children: <p>{question.answer}</p>,
        };
      }),
    [questions]
  );
  return (
    <div>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        items={questionNodes}
      />
    </div>
  );
}
export default QuestionList;
