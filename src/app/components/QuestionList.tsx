import { MouseEvent, useMemo } from "react";
import { useQuestions } from "../stores/questionStore";
import { Question } from "@/questions";
import { Collapse, Tabs, TabsProps } from "antd";
import {
  CaretRightOutlined,
  CheckOutlined,
  RightOutlined,
} from "@ant-design/icons";
import UncheckableBox from "./UncheckableBox";
import classNames from "classnames";
function QuestionList() {
  const { questions, checkQuestions, uncheckQuestions } = useQuestions();
  const handleUncheckQuestion = (id: number) => {
    uncheckQuestions([id]);
  };
  const VerifQuestionNodes: any = useMemo(
    () =>
      questions
        .filter((q) => q.type === "VERIF")
        .map((question: Question, index: number) => {
          return {
            key: `uq-${question.id}`,
            label: (
              <div className="flex flex-row justify-between">
                <p>{question.question}</p>
                {question.checked && (
                  <UncheckableBox
                    checkMarkClassname="!text-red-600"
                    onUncheck={() => handleUncheckQuestion(question.id)}
                  />
                )}
              </div>
            ),

            children: <p>{question.answer}</p>,
          };
        }),
    [questions]
  );
  const QserQuestionNodes: any = useMemo(
    () =>
      questions
        .filter((q) => q.type === "QSER")
        .map((question: Question, index: number) => {
          return {
            key: `uq-${question.id}`,
            label: (
              <div className="flex flex-row justify-between">
                <p>{question.question}</p>
                {question.checked && (
                  <UncheckableBox
                    checkMarkClassname="!text-green-600"
                    onUncheck={() => handleUncheckQuestion(question.id)}
                  />
                )}
              </div>
            ),
            classNames: "group bg-red-900",

            children: <p>{question.answer}</p>,
          };
        }),
    [questions]
  );
  const FirstAidQuestionNodes: any = useMemo(
    () =>
      questions
        .filter((q) => q.type === "FirstAid")
        .map((question: Question, index: number) => {
          return {
            key: `uq-${question.id}`,
            label: (
              <div className="flex flex-row justify-between">
                <p>{question.question}</p>
                {question.checked && (
                  <UncheckableBox
                    checkMarkClassname="!text-orange-400"
                    onUncheck={() => handleUncheckQuestion(question.id)}
                  />
                )}
              </div>
            ),
            classNames: "group bg-red-900",
            children: <p>{question.answer}</p>,
          };
        }),
    [questions]
  );

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Vérifications",
      children: (
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <RightOutlined rotate={isActive ? 90 : 0} />
          )}
          onChange={(c) =>
            checkQuestions(c.map((idString) => Number(idString.slice(3))))
          }
          items={VerifQuestionNodes}
        />
      ),
    },
    {
      key: "2",
      label: "QSER",
      children: (
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <RightOutlined rotate={isActive ? 90 : 0} />
          )}
          onChange={(c) =>
            checkQuestions(c.map((idString) => Number(idString.slice(3))))
          }
          items={QserQuestionNodes}
        />
      ),
    },
    {
      key: "3",
      label: "Premiers Secours",
      children: (
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <RightOutlined rotate={isActive ? 90 : 0} />
          )}
          onChange={(c) =>
            checkQuestions(c.map((idString) => Number(idString.slice(3))))
          }
          items={FirstAidQuestionNodes}
        />
      ),
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      className="w-full max-w-4xl "
      centered
    />
  );
}
export default QuestionList;
