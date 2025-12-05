import { Button, Card, Modal, Tooltip, message } from "antd";
import { useQuestions } from "../stores/questionStore";
import { useMemo } from "react";
import { compressBooleans } from "../utils/encoding";
import { CopyOutlined } from "@ant-design/icons";
type Props = {
  isOpen: boolean;
  onCancel: () => void;
  progressCode: string;
};
function SettingsModal(props: Props) {
  const { onCancel, isOpen, progressCode } = props;
  const { uncheckQuestions, checkedQuestions, questions } = useQuestions();
  const handleReset = () => {
    uncheckQuestions(Array.from(checkedQuestions));
  };

  return (
    <Modal onCancel={onCancel} open={isOpen} footer centered title="Paramètres">
      <div className="flex gap-2 flex-col">
        <h2 className="text-center">Sauvegarde ton progrès</h2>

        <Tooltip title="Copier" placement="right">
          <Button
            style={{ padding: 24 }}
            variant="filled"
            color="default"
            onClick={() => {
              const link = `http://localhost:3000/?progress=${progressCode}`;
              navigator.clipboard
                .writeText(link)
                .then(() => {
                  message.success("Copié dans le presse-papiers !");
                })
                .catch(() => {
                  message.error("Échec de la copie !");
                });
            }}
          >
            <p>
              http://localhost:3000/
              <span className="text-zinc-400">{`?progress=${progressCode}`}</span>
            </p>
            <CopyOutlined className="!text-zinc-500" />
          </Button>
        </Tooltip>

        <div className="flex flex-col items-center">
          <Button onClick={handleReset} danger className="mt-4">
            Décocher toutes les questions
          </Button>
        </div>
      </div>
    </Modal>
  );
}
export default SettingsModal;
