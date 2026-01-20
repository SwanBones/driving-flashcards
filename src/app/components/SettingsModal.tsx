import { Button, Modal, Switch, Tooltip } from "antd";
import { useQuestions } from "../stores/questionStore";
import { App } from "antd";
import { CloseOutlined, CopyOutlined, SaveOutlined } from "@ant-design/icons";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};
function SettingsModal(props: Props) {
	const { onClose, isOpen } = props;
	const {
		uncheckQuestions,
		checkedQuestions,
		setTrackQuestions,
		setSeparateVerifs,
	} = useQuestions();
	const handleReset = () => {
		uncheckQuestions(Array.from(checkedQuestions));
		onClose();
	};

	return (
		<Modal onCancel={onClose} open={isOpen} footer centered title="Paramètres">
			<div className="flex gap-4 flex-col">
				<div className="flex flex-row items-center gap-2">
					<Switch
						onChange={(checked) => setTrackQuestions(checked)}
						defaultChecked
						title="Suivi des questions"
					/>
					<p className="text-sm"> Activer le suivi de progression</p>
				</div>
				<div className="flex flex-row items-center gap-2">
					<Switch
						onChange={(checked) => setSeparateVerifs(checked)}
						defaultChecked={false}
						title="Suivi des questions"
					/>

					<p className="text-sm">
						Séparer les vérifs interieures et exterieures{" "}
						<span className="text-zinc-400 text-xs italic">
							(Section "Questions uniques")
						</span>
					</p>
				</div>
				<div className="flex flex-col w-fit self-center">
					<Button
						icon={<CloseOutlined />}
						onClick={handleReset}
						danger
						className="mt-4"
					>
						Décocher toutes les questions
					</Button>
				</div>
			</div>
		</Modal>
	);
}
export default SettingsModal;
