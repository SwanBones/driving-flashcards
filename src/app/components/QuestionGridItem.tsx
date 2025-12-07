import { QuestionGroup } from "@/groups";
import { Card, Modal } from "antd";
import { useQuestions } from "../stores/questionStore";
import classNames from "classnames";
import { CloseCircleFilled } from "@ant-design/icons";
import { MouseEventHandler } from "react";
type Props = {
  questionGroup: QuestionGroup;
  onClick: (input: QuestionGroup) => void;
  // k: string;
};
function QuestionGridItem(props: Props) {
  const { questionGroup, onClick } = props;
  const { checkedQuestions, uncheckQuestions } = useQuestions();
  const tagClassName = "w-[5] h-[5] rounded-full";
  const allQuestions = [
    questionGroup.questions.VERIF,
    questionGroup.questions.QSER,
    questionGroup.questions.FirstAid,
  ];

  const hasCheckedQuestion = !allQuestions.some((v) => checkedQuestions.has(v));

  const handleResetGroup: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    uncheckQuestions(allQuestions);
  };

  return (
    <Card hoverable className="group" onClick={() => onClick(questionGroup)}>
      <div className="justify-center items-center flex flex-col gap-2 min-w-4 ">
        {!hasCheckedQuestion && (
          <div
            onClick={handleResetGroup}
            className="absolute hidden opacity-20 hover:opacity-50 transition-opacity duration-100 hover:flex  group-hover:flex -right-[6px] -top-[6px]  rounded-full  "
          >
            <CloseCircleFilled twoToneColor="#eb2f96" />
          </div>
        )}
        <p>{questionGroup.group_id}</p>
        <div className="gap-1 flex flex-row justify-center items-center absolute bottom-4">
          {checkedQuestions.has(questionGroup.questions.VERIF) && (
            <div className={classNames(tagClassName, "bg-pink-300")} />
          )}
          {checkedQuestions.has(questionGroup.questions.QSER) && (
            <div className={classNames(tagClassName, "bg-lime-500")} />
          )}
          {checkedQuestions.has(questionGroup.questions.FirstAid) && (
            <div className={classNames(tagClassName, "bg-yellow-400")} />
          )}
        </div>
      </div>
    </Card>
  );
}

export default QuestionGridItem;
