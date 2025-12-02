import { QuestionGroup } from "@/groups";
import { Card } from "antd";
type Props = {
  questionGroup: QuestionGroup;
};
function QuestionGridItem(props: Props) {
  const { questionGroup } = props;
  return (
    <Card>
      <p>{questionGroup.group_id}</p>
    </Card>
  );
}

export default QuestionGridItem;
