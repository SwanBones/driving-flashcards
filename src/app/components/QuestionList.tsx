import { MouseEvent, useEffect, useMemo, useState } from "react";
import { useQuestions } from "../stores/questionStore";
import { Question } from "@/questions";
import { Collapse, Radio } from "antd";
import { RightOutlined } from "@ant-design/icons";
import UncheckableBox from "./UncheckableBox";
import { CheckboxGroupProps, CheckboxOptionType } from "antd/es/checkbox";

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

						children: (
							<div className="flex flex-col items-center">
								<p className="text-left">{question.answer}</p>
								{question.img && (
									<img
										src={`/answer_img/${question.img?.[0]}`}
										alt="Image d'aide"
										className="max-h-30 rounded-xl mt-4 w-fit"
									/>
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
						),
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

						children: (
							<div className="flex flex-col items-center">
								<p className="text-left">{question.answer}</p>
								{question.img && (
									<img
										src={`/answer_img/${question.img?.[0]}`}
										alt="Image d'aide"
										className="max-h-30 rounded-xl mt-4 w-fit"
									/>
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
						),
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

						children: (
							<div className="flex flex-col items-center">
								<p className="text-left">{question.answer}</p>
								{question.img && (
									<img
										src={`/answer_img/${question.img?.[0]}`}
										alt="Image d'aide"
										className="max-h-30 rounded-xl mt-4 w-fit"
									/>
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
						),
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

	const nodeList = useMemo(
		() => ({
			"1": VerifIntQuestionNodes,
			"2": VerifExtQuestionNodes,
			"3": QserQuestionNodes,
			"4": FirstAidQuestionNodes,
			"5": VerifQuestionNodes,
		}),
		[activeKey, questions]
	);
	const options: CheckboxGroupProps<string>["options"] = [
		...(separateVerifs
			? [
					{ label: "Vérifs Int.", value: "1" },
					{ label: "Vérifs Ext.", value: "2" },
			  ]
			: [{ label: "Vérifications", value: "5" }]),
		{ label: "Sécurité Routière", value: "3" },
		{ label: "1ers Secours", value: "4" },
	];
	return (
		<div className=" max-w-5xl items-center text-left flex flex-col gap-8 text-center">
			<Radio.Group
				onChange={(e) => setActiveKey(e.target.value)}
				value={activeKey}
			>
				{(options as CheckboxOptionType<string>[]).map((option) => {
					const color = {
						"1": "#e95ca9ff",
						"2": "#e95ca9ff",
						"3": "#52c41a",
						"4": "#ec8611ff",
						"5": "#e95ca9ff",
					}[option.value];

					const isActive = activeKey === option.value;

					return (
						<Radio.Button
							key={option.value}
							value={option.value}
							style={{
								backgroundColor: isActive ? color : undefined,
								borderColor: isActive ? color : undefined,
								color: isActive ? "#fff" : undefined,
							}}
						>
							{option.label}
						</Radio.Button>
					);
				})}
			</Radio.Group>

			<Collapse
				bordered={false}
				expandIcon={({ isActive }) => (
					<RightOutlined rotate={isActive ? 90 : 0} />
				)}
				onChange={(c) =>
					checkQuestions(c.map((idString) => Number(idString.slice(3))))
				}
				items={nodeList[activeKey as "1" | "2" | "3" | "4" | "5"]}
			/>
		</div>
	);
}
export default QuestionList;
