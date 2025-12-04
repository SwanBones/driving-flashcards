import { QuestionGroup } from "@/groups";
import { Card, Modal } from "antd";
import { useQuestions } from "../stores/questionStore";
import classNames from "classnames";
type Props = {
  questionGroup: QuestionGroup;
  onClick: (input: QuestionGroup) => void;
  // k: string;
};
function QuestionGridItem(props: Props) {
  const { questionGroup, onClick } = props;
  const { checkedQuestions } = useQuestions();
  const tagClassName = "w-[5] h-[5] rounded-full";
  return (
    <Card hoverable onClick={() => onClick(questionGroup)}>
      <div className="justify-center items-center flex flex-col gap-2 min-w-4">
        <p>{questionGroup.group_id}</p>
        <div className="gap-1 flex flex-row justify-center items-center absolute bottom-4">
          {checkedQuestions.includes(questionGroup.questions.VERIF) && (
            <div className={classNames(tagClassName, "bg-red-600")} />
          )}
          {checkedQuestions.includes(questionGroup.questions.QSER) && (
            <div className={classNames(tagClassName, "bg-green-600")} />
          )}
          {checkedQuestions.includes(questionGroup.questions.FirstAid) && (
            <div className={classNames(tagClassName, "bg-yellow-400")} />
          )}
        </div>
      </div>
    </Card>
  );
}

export default QuestionGridItem;
