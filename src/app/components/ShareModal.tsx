import { Button, Modal, Switch, Tooltip } from "antd";
import { App } from "antd";
import { CopyOutlined, ShareAltOutlined } from "@ant-design/icons";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};
function ShareModal(props: Props) {
  const { message } = App.useApp();
  const { onClose, isOpen } = props;

  const handleShareLink = () => {
    const link = `https://verif-quiz.web.app/`;

    try {
      navigator.share({ url: link });
    } catch (e) {
      navigator.clipboard
        .writeText(link)
        .then(() => message.success("Copié dans le presse-papiers !"))
        .catch(() => message.error("Erreur lors de la copie"));
    }
  };

  return (
    <Modal onCancel={onClose} open={isOpen} footer centered title="Partager">
      <div className="flex gap-4 flex-col items-center">
        <Button className="w-fit" color="default" onClick={handleShareLink}>
          Partage cette application! <ShareAltOutlined />
        </Button>
        <h2 className="mt-2">Embedder ce site: </h2>
        <p className="bg-zinc-100 rounded-md p-4 text-left">
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
