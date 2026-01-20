"use client";
import QuestionGrid from "./components/QuestionGrid";
import { useQuestions } from "./stores/questionStore";
import QuestionModal from "./components/QuestionModal";
import { useEffect, useMemo, useState } from "react";
import { Question } from "@/questions";
import { QuestionGroup } from "@/groups";
import QuestionList from "./components/QuestionList";
import {
	CloseOutlined,
	InfoCircleTwoTone,
	SaveOutlined,
	SettingOutlined,
	ShareAltOutlined,
} from "@ant-design/icons";
import { Button, message } from "antd";
import SettingsModal from "./components/SettingsModal";
import { useSearchParams, useRouter } from "next/navigation";
import { compressBooleans, decompressBooleans } from "./utils/encoding";
import InfoModal from "./components/InfoModal";
import LegalInfo from "./components/LegalInfo";
import ShareModal from "./components/ShareModal";
import CornerInfoCard from "./components/CornerInfoCard";
const easterEggs = {
	miku: "omg its miku",
	migu: "omg its migu",
	swanbones: "wow c'est un beau code de sauvegarde ça",
	rickastley: "never give up",
};

export default function Home() {
	const { questions, questionGroups, checkQuestions, checkedQuestions } =
		useQuestions();
	const [modalQuestionGroup, setModalQuestionGroup] =
		useState<QuestionGroup | null>(null);
	const [isQuestionModalOpen, setIsQuestionModalOpen] =
		useState<boolean>(false);
	const [isSettingsModalOpen, setIsSettingsModalOpen] =
		useState<boolean>(false);
	const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
	const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
	const [isInfoCardOpen, setIsInfoCardOpen] = useState<boolean>(true);
	const [messageApi, contextHolder] = message.useMessage();
	const searchParams = useSearchParams();
	const saveDataParam = searchParams.get("saveData");

	const hideGrid = searchParams.get("hideGrid") === "true";
	const hideList = searchParams.get("hideList") === "true";

	const saveCode = useMemo(() => {
		if (!checkQuestions && !saveDataParam) return;
		const numberOfQuestions = questions.length;
		let arrFalse: boolean[] = Array(numberOfQuestions).fill(false);
		checkedQuestions.forEach((id) => (arrFalse[id - 1] = true));
		return compressBooleans(arrFalse);
	}, [checkedQuestions]);

	const easterEgg =
		saveDataParam && saveDataParam in easterEggs
			? easterEggs[saveDataParam as keyof typeof easterEggs]
			: undefined;

	useEffect(() => {
		const localStorageSaveData = localStorage.getItem("saveData");
		let booleans;
		if (saveDataParam) {
			booleans = decompressBooleans(saveDataParam, questions.length);
		} else if (localStorageSaveData) {
			booleans = decompressBooleans(localStorageSaveData, questions.length);
			updateQuery(localStorageSaveData);
		}

		const validatedQuestions: number[] =
			booleans
				?.map((value, index) => {
					return value ? index + 1 : undefined;
				})
				.filter((val) => val !== undefined) ?? [];
		checkQuestions(validatedQuestions);
	}, []);

	useEffect(() => {
		if (saveCode) {
			updateQuery(saveCode);
		}
	}, [saveCode]);

	const handleQuestionGroupClick = (qG: QuestionGroup) => {
		setIsQuestionModalOpen(true);
		setModalQuestionGroup(qG);
	};
	const handleSettingsClick = () => {
		setIsSettingsModalOpen(true);
	};
	const handleShareClick = () => {
		setIsShareModalOpen(true);
	};
	const handleInfoClick = () => {
		setIsInfoModalOpen(true);
	};
	const handleSettingsClose = () => {
		setIsSettingsModalOpen(false);
	};

	const modalQuestions: Question[] = useMemo(() => {
		const order = [
			modalQuestionGroup?.questions.VERIF,
			modalQuestionGroup?.questions.QSER,
			modalQuestionGroup?.questions.FirstAid,
		];

		return questions
			.filter((q) => order.includes(q.id))
			.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
	}, [modalQuestionGroup, questions]);

	const handleModalCancel = () => {
		setIsQuestionModalOpen(false);
		setModalQuestionGroup(null);
	};
	const router = useRouter();

	const updateQuery = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("saveData", value);
		localStorage.setItem("saveData", value);
		router.replace(`${window.location.pathname}?${params.toString()}`, {
			scroll: false,
		});
	};

	return (
		<div className="flex min-h-screen flex-col flex-inline gap-4 md:px-20 py-14 md:py-10 items-center justify-center bg-zinc-50 font-sans">
			<CornerInfoCard
				onClose={() => setIsInfoCardOpen(false)}
				isOpen={isInfoCardOpen}
			/>

			<div className="flex flex-row self-end z-10 gap-2 top-2 md:top-10 right-2 md:right-20 fixed">
				<Button
					icon={<SettingOutlined />}
					variant="text"
					onClick={handleSettingsClick}
					className="self-end h-8 !p-5"
				/>
				<Button
					icon={<SaveOutlined />}
					variant="text"
					onClick={handleShareClick}
					className="self-end h-8 !p-5"
				/>
				<Button
					icon={<InfoCircleTwoTone twoToneColor={"#7627f5ff"} />}
					variant="text"
					onClick={handleInfoClick}
					className="self-end h-8 !p-5"
				/>
			</div>
			{!hideGrid && (
				<div className="max-w-6xl flex flex-col items-center gap-8 ">
					<h1 className="text-center">Groupes de questions</h1>
					<p className="text-xs text-zinc-400 italic -mt-7 text-center">
						{easterEgg ??
							"Les questions se répètent beaucoup. Descends pour les questions individuelles!"}
					</p>
					<div className="bg-zinc-100 rounded-xl p-2 sm:p-10">
						<QuestionGrid
							questionGroups={questionGroups}
							onItemClick={handleQuestionGroupClick}
						/>
					</div>
				</div>
			)}
			{!hideList && (
				<div className="max-w-6xl flex flex-col items-center gap-8 ">
					<h1 className="mt-4 text-center">Questions uniques</h1>
					<p className="text-xs text-zinc-400 italic -mt-7 text-center">
						Toutes les questions, regroupées
					</p>

					<QuestionList />
					<LegalInfo />
				</div>
			)}
			{hideGrid && hideList && (
				<div className="max-w-6xl flex flex-col items-center gap-4 ">
					<p>Bon bah du coup il y a plus rien à afficher, bravo :))</p>
					<p className="text-xs text-zinc-600 italic">
						(pense à changer l'URL pour qu'elle affiche au moins une interface )
					</p>
				</div>
			)}
			<SettingsModal
				isOpen={isSettingsModalOpen}
				onClose={handleSettingsClose}
			/>
			<QuestionModal
				questionGroup={modalQuestionGroup}
				questions={modalQuestions}
				isOpen={isQuestionModalOpen}
				onCancel={handleModalCancel}
				onPrevQuestion={() => {
					setModalQuestionGroup(
						questionGroups.find(
							(qG) => qG.group_id === (modalQuestionGroup?.group_id ?? 0) - 1,
						),
					);
				}}
				onNextQuestion={() => {
					setModalQuestionGroup(
						questionGroups.find(
							(qG) => qG.group_id === (modalQuestionGroup?.group_id ?? 0) + 1,
						),
					);
				}}
			/>
			<InfoModal
				isOpen={isInfoModalOpen}
				onClose={() => setIsInfoModalOpen(false)}
			/>
			<ShareModal
				isOpen={isShareModalOpen}
				onClose={() => setIsShareModalOpen(false)}
				saveCode={saveCode}
			/>
			{contextHolder}
		</div>
	);
}
