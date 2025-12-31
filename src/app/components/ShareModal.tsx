import { Button, Modal, Switch, Tooltip } from "antd";
import { App } from "antd";
import { SaveOutlined, ShareAltOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	saveCode?: string;
};
function ShareModal(props: Props) {
	const { message } = App.useApp();
	const { onClose, isOpen, saveCode } = props;
	const pathname = usePathname();
	const link = `https://verif-quiz.web.app/`;

	const handleShareLink = async () => {
		// try {
		//
		// 	console.log(navigator.canShare({ url: link }));
		// } catch (e) {
		navigator.clipboard
			.writeText(link)
			.then(() => message.success("Copié dans le presse-papiers !"))
			.catch(() => message.error("Erreur lors de la copie"));

		try {
			await navigator.share({ url: link });
		} catch (e) {
			console.log("cannot share");
		}
		// }
	};
	const handleCopy = () => {
		const saveLink = `${link}?saveData=${saveCode}`;
		// try {
		// 	navigator.share({ url: saveLink });
		// } catch (e) {
		// console.log(e);
		navigator.clipboard
			.writeText(saveLink)
			.then(() => message.success("Copié dans le presse-papiers !"))
			.catch(() => message.error("Erreur lors de la copie"));
		// }
	};

	return (
		<Modal onCancel={onClose} open={isOpen} footer centered title="Partager">
			<div className="flex gap-2 flex-col items-center">
				<Button
					icon={<ShareAltOutlined />}
					className="mb-6 !p-6 "
					onClick={handleShareLink}
					type="dashed"
				>
					Partage cette application!
				</Button>
				<h2>Sauvegarde</h2>
				<Button
					onClick={handleCopy}
					icon={<SaveOutlined />}
					color="default"
					variant="solid"
				>
					Garde ou envoie ton progrès
				</Button>
				<h2 className="mt-2 mx-30 border-t border-zinc-100 pt-4 w-full text-center">
					Embedder ce site:
				</h2>
				<p className="bg-zinc-100 text-zinc-500 rounded-md p-4 text-left">
					{`<iframe
            src="https://verif-quiz.web.app/?hideList=false&hideGrid=false"
            width="700"
            height="500"
          ></iframe>`}
				</p>
			</div>
		</Modal>
	);
}
export default ShareModal;
