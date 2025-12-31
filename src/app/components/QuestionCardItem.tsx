import { Question, QuestionType } from "@/questions";
import { Card, Spin, Tag } from "antd";
import UncheckableBox from "./UncheckableBox";
import { useQuestions } from "../stores/questionStore";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
type Props = {
	question: Question;
	handleQuestionClick: (q: Question) => void;
	showAnswers: number[];
};
function QuestionCardItem(props: Props) {
	const { question, showAnswers, handleQuestionClick } = props;
	const { uncheckQuestions } = useQuestions();
	const [isPictureLoading, setIsPictureLoading] = useState<boolean>(true);
	const tag: any = {
		QSER: {
			color: "lime",
			label: "Sécurité Routière",
			checkmarkClassname: "!text-lime-500",
		},
		VE: {
			color: "magenta",
			label: "Vérification Exterieure",
			checkmarkClassname: "!text-pink-400",
		},
		VI: {
			color: "magenta",
			label: "Vérification Intérieure",
			checkmarkClassname: "!text-pink-400",
		},
		FirstAid: {
			color: "orange",
			label: "Premiers secours",
			checkmarkClassname: "!text-yellow-400",
		},
	}[question.type];

	return (
		<Card
			hoverable
			onClick={() => handleQuestionClick(question)}
			className=" hover:cursor-fine"
		>
			<div className="absolute -top-2 -left-2">
				<Tag color={tag.color}>{tag.label}</Tag>
			</div>

			<div className={`flex-col flex gap-4`}>
				<div className="flex flex-row justify-between gap-2 ">
					<p className="font-bold">{question.question}</p>
					{question.checked && (
						// <CheckOutlined className="!text-lime-500" />
						<UncheckableBox
							checkMarkClassname={tag.checkmarkClassname}
							onUncheck={() => uncheckQuestions([question.id])}
						/>
					)}
				</div>
				{showAnswers.includes(question.id) && (
					<div className="border-t border-zinc-100 pt-4">
						<p>{question.answer}</p>
						<div className="flex-col flex items-center justify-center">
							{question.img?.[0] && (
								<div className=" flex items-center justify-center">
									{isPictureLoading && (
										<Spin
											indicator={
												<LoadingOutlined style={{ fontSize: 48 }} spin />
											}
											size="small"
											className="!text-zinc-200"
										/>
									)}
									<img
										onLoad={() => {
											setIsPictureLoading(false);
										}}
										src={`/answer_img/${question.img?.[0]}`}
										alt="Image d'aide"
										className={`
                      max-h-30 rounded-xl mt-4
                      transition-opacity duration-500
                      ${isPictureLoading ? "opacity-0" : "opacity-100"}
                    `}
									/>
								</div>
							)}
							{question.imgCredit && (
								<a
									className="!text-gray-500 decoration-none italic text-xs text-center mt-2"
									target="_blank"
									href={question.imgCredit}
								>
									Source Image: {question.imgCredit}
								</a>
							)}
							{question.img?.[1] && (
								<img
									src={`/answer_img/${question.img?.[1]}`}
									alt="Image de Rappel"
									className="max-h-30 pt-6 border-t mt-4 border-zinc-300"
								/>
							)}
						</div>
					</div>
				)}
			</div>
		</Card>
	);
}
export default QuestionCardItem;
