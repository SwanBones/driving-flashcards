import { QuestionGroup } from "@/groups";
import { Card, Modal } from "antd";
type Props = {
  questionGroup: QuestionGroup;
  onClick: (input: QuestionGroup) => void;
  // k: string;
};
function QuestionGridItem(props: Props) {
  const { questionGroup, onClick } = props;
  return (
    <Card hoverable onClick={() => onClick(questionGroup)}>
      <p>{questionGroup.group_id}</p>
    </Card>
  );
}

export default QuestionGridItem;
