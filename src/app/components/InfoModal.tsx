import { LinkOutlined } from "@ant-design/icons";
import { Modal } from "antd";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};
function InfoModal(props: Props) {
  const { isOpen, onClose } = props;
  return (
    <Modal
      title={"Merci pour ta visite!"}
      footer
      open={isOpen}
      onCancel={onClose}
    >
      <div className="space-y-4">
        <p>
          J'espère que j'ai pu t'aider à réviser pour avoir tes 3 points de
          questions à ton permis!
        </p>

        <p>
          Le permis, c'est super cher. Donc je suis là pour t'aider
          gratuitement! Si tu veux quand même me soutenir,{" "}
          <span>
            <a href="https://www.paypal.com/paypalme/XuanBoone" target="_blank">
              c'est ici! Mille mercis :´)
            </a>
          </span>
        </p>

        <div className="items-center gap-4 mt-10 flex flex-col">
          <div className="overflow-hidden rounded-full h-30 w-30 ">
            <img
              alt="A photo of me!"
              src="/pfp.jpg"
              className="h-full w-full object-cover h-30 w-30"
            />
          </div>
          <span className="space-x-2 text-gray-300">
            <LinkOutlined />
            <a
              href="https://xuanboone.com"
              target="_blank"
              className="text-gray-100 decoration-none"
            >
              http://xuanboone.com
            </a>
          </span>
        </div>
      </div>
    </Modal>
  );
}
export default InfoModal;
