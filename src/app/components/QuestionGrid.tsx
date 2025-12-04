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
    <div className="gap-2 flex flex-wrap justify-center max-w-4xl mx-auto">
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
