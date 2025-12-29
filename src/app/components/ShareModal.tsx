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
    <Modal onCancel={onClose} open={isOpen} footer centered title="Paramètres">
      <div className="flex gap-4 flex-col">
        <Button className="w-fit" color="default" onClick={handleShareLink}>
          Partager <ShareAltOutlined />
        </Button>
        <p>Embedder ce site: </p>
        <div className="text-center">
          <p className="bg-zinc-100 rounded-md p-4 text-left">
            {`<iframe
            src="https://verif-quiz.web.app/?hideList=false&hideGrid=false"
            width="700"
            height="500"
          ></iframe>`}
          </p>
        </div>
      </div>
    </Modal>
  );
}
export default ShareModal;
