import { MouseEvent, useEffect, useMemo, useState } from "react";
import { useQuestions } from "../stores/questionStore";
import { Question } from "@/questions";
import { Collapse, ConfigProvider, Tabs, TabsProps } from "antd";
import {
  CaretRightOutlined,
  CheckOutlined,
  RightOutlined,
} from "@ant-design/icons";
import UncheckableBox from "./UncheckableBox";
import classNames from "classnames";

type QuestionListItem = {
  question: Question;
  handleUncheckQuestion: (id: number) => void;
  checkmarkClassname: string;
};
function QuestionListItem(props: QuestionListItem) {
  const { question, handleUncheckQuestion, checkmarkClassname } = props;
  return (
    <div className="flex flex-row justify-between">
      <p>
        {question.question}{" "}
        <span className="text-zinc-400 italic"> {question.context}</span>
      </p>
      {question.checked && (
        <UncheckableBox
          checkMarkClassname={checkmarkClassname}
          onUncheck={() => handleUncheckQuestion(question.id)}
        />
      )}
    </div>
  );
}
function QuestionList() {
  const { questions, checkQuestions, uncheckQuestions, separateVerifs } =
    useQuestions();

  const [activeKey, setActiveKey] = useState<string>("1");
  const tabColor = {
    "1": "#e95ca9ff",
    "2": "#e95ca9ff",
    "3": "#52c41a",
    "4": "#ec8611ff",
    "5": "#e95ca9ff",
  }[activeKey];

  const handleUncheckQuestion = (id: number) => {
    uncheckQuestions([id]);
  };

  useEffect(() => {
    if (separateVerifs) {
      if (activeKey === "5") {
        setActiveKey("1");
      }
    } else if (["1", "2"].includes(activeKey)) {
      setActiveKey("5");
    }
  }, [separateVerifs]);

  const VerifQuestionNodes: any = useMemo(
    () =>
      questions
        .filter((q) => q.type === "VI" || q.type === "VE")
        .map((question: Question, index: number) => {
          return {
            key: `uq-${question.id}`,
            label: (
              <QuestionListItem
                checkmarkClassname="!text-pink-600"
                question={question}
                handleUncheckQuestion={handleUncheckQuestion}
              />
            ),

            children: <p>{question.answer}</p>,
          };
        }),
    [questions]
  );

  const VerifIntQuestionNodes: any = useMemo(
    () =>
      questions
        .filter((q) => q.type === "VI")
        .map((question: Question, index: number) => {
          return {
            key: `uq-${question.id}`,
            label: (
              <QuestionListItem
                checkmarkClassname="!text-pink-600"
                question={question}
                handleUncheckQuestion={handleUncheckQuestion}
              />
            ),

            children: <p>{question.answer}</p>,
          };
        }),
    [questions]
  );
  const VerifExtQuestionNodes: any = useMemo(
    () =>
      questions
        .filter((q) => q.type === "VE")
        .map((question: Question, index: number) => {
          return {
            key: `uq-${question.id}`,
            label: (
              <QuestionListItem
                checkmarkClassname="!text-pink-600"
                question={question}
                handleUncheckQuestion={handleUncheckQuestion}
              />
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
              <QuestionListItem
                checkmarkClassname="!text-lime-500"
                question={question}
                handleUncheckQuestion={handleUncheckQuestion}
              />
            ),
            classNames: "group bg-pink-600",

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
              <QuestionListItem
                checkmarkClassname="!text-yellow-400"
                question={question}
                handleUncheckQuestion={handleUncheckQuestion}
              />
            ),
            classNames: "group bg-pink-600",
            children: <p>{question.answer}</p>,
          };
        }),
    [questions]
  );
  const verifs = separateVerifs
    ? [
        {
          key: "1",
          label: <p className="hover:text-pink-600">Vérifications Int.</p>,
          children: (
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <RightOutlined rotate={isActive ? 90 : 0} />
              )}
              onChange={(c) =>
                checkQuestions(c.map((idString) => Number(idString.slice(3))))
              }
              items={VerifIntQuestionNodes}
            />
          ),
        },
        {
          key: "2",
          label: <p className="hover:text-pink-600">Vérifications Ext.</p>,
          children: (
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <RightOutlined rotate={isActive ? 90 : 0} />
              )}
              onChange={(c) =>
                checkQuestions(c.map((idString) => Number(idString.slice(3))))
              }
              items={VerifExtQuestionNodes}
            />
          ),
        },
      ]
    : [
        {
          key: "5",
          label: <p className="hover:text-pink-600">Vérifications</p>,
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
      ];

  const items: TabsProps["items"] = [
    ...verifs,
    {
      key: "3",
      label: <p className="hover:text-lime-500">Questions Variées</p>,
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
      key: "4",
      label: <p className="hover:text-orange-400">Premiers Secours</p>,
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
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemActiveColor: tabColor,
            itemSelectedColor: tabColor,
            inkBarColor: tabColor,
          },
        },
      }}
    >
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        defaultActiveKey="1"
        items={items}
        className="w-full max-w-4xl custom-tabs"
        centered
      />
    </ConfigProvider>
  );
}
export default QuestionList;
