import { QuestionGroup } from "@/groups";
import { Question } from "@/questions";
import { Button, Modal } from "antd";
import { useQuestions } from "../stores/questionStore";
import QuestionCardItem from "./QuestionCardItem";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

type Props = {
	questions: Question[];
	isOpen: boolean;
	onCancel: () => void;
	questionGroup: QuestionGroup | null;
	onNextQuestion: () => void;
	onPrevQuestion: () => void;
};
function QuestionModal(props: Props) {
	const {
		questions,
		isOpen = false,
		onCancel,
		questionGroup,
		onPrevQuestion,
		onNextQuestion,
	} = props;
	const [showAnswers, setShowAnswers] = useState<number[]>([]);
	const { checkQuestions, uncheckQuestions } = useQuestions();
	const onInternalCancel = () => {
		setShowAnswers([]);
		onCancel();
	};
	//not used cuz button is disabled

	/*
  const handleToggleAnswers = () => {
    {
      if (showAnswers.length === 3) {
        setShowAnswers([]);
      } else {
        setShowAnswers([
          questionGroup?.questions.FirstAid ?? -1,
          questionGroup?.questions.QSER ?? -1,
          questionGroup?.questions.VERIF ?? -1,
        ]);
        checkQuestions([
          questionGroup?.questions.FirstAid ?? -1,
          questionGroup?.questions.QSER ?? -1,
          questionGroup?.questions.VERIF ?? -1,
        ]);
      }
    }
  };
  */
	const handleQuestionClick = (question: Question) => {
		if (showAnswers.includes(question.id)) {
			setShowAnswers((as) => as.filter((a) => a !== question.id));
		} else {
			setShowAnswers((as) => [...as, question.id]);
			checkQuestions([question.id]);
		}
	};

	return (
		<Modal
			open={isOpen}
			onCancel={onInternalCancel}
			title={`Groupe de question #${questionGroup?.group_id}`}
			footer
			centered
		>
			<div className="flex flex-col gap-4 mt-10">
				{questions.map((question) => {
					return (
						<QuestionCardItem
							key={`question-modal-${question.id}`}
							question={question}
							handleQuestionClick={handleQuestionClick}
							showAnswers={showAnswers}
						/>
					);
				})}
				{/* <Button onClick={handleToggleAnswers} size="large" className="mt-4">
          {showAnswers.length === 3
            ? "Cacher les réponses"
            : `Révéler les réponses`}
        </Button> */}
			</div>
			<div className="mt-4 -mb-3 flex justify-between">
				{questionGroup?.group_id !== 1 && (
					<Button onClick={onPrevQuestion} type="text" className="group">
						<LeftOutlined className="!text-zinc-500" />
						<p className="text-white duration-200 group-hover:text-zinc-600">
							#{(questionGroup?.group_id ?? 0) - 1}
						</p>
					</Button>
				)}
				{questionGroup?.group_id !== 100 && (
					<Button onClick={onNextQuestion} type="text" className="group">
						<p className="text-white duration-200 group-hover:text-zinc-600">
							#{(questionGroup?.group_id ?? 0) + 1}
						</p>
						<RightOutlined className="!text-zinc-500" />
					</Button>
				)}
			</div>
		</Modal>
	);
}

export default QuestionModal;
