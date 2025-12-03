import { QuestionGroup } from "@/groups";
import { Card, Modal } from "antd";
import QuestionGridItem from "./QuestionGridItem";
import { useQuestions } from "../stores/questionStore";
type Props = {
  questionGroups: QuestionGroup[];
  onItemClick: (input: QuestionGroup) => void;
};
function QuestionGrid(props: Props) {
  const { questionGroups, onItemClick } = props;

  return (
    <div className="grid grid-cols-10 gap-2">
      {questionGroups?.map((questionGroup, index) => {
        return (
          <QuestionGridItem
            key={`grid-item-${index}`}
            questionGroup={questionGroup}
            onClick={onItemClick}
          />
        );
      })}
    </div>
  );
}

export default QuestionGrid;
