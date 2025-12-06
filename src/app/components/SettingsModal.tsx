import { Button, Card, Modal, Switch, Tooltip, message } from "antd";
import { useQuestions } from "../stores/questionStore";
import { useMemo } from "react";
import { compressBooleans } from "../utils/encoding";
import { CloseOutlined, CopyOutlined } from "@ant-design/icons";
type Props = {
  isOpen: boolean;
  onCancel: () => void;
  progressCode: string;
};
function SettingsModal(props: Props) {
  const { onCancel, isOpen, progressCode } = props;
  const { uncheckQuestions, checkedQuestions, setTrackQuestions } =
    useQuestions();
  const handleReset = () => {
    uncheckQuestions(Array.from(checkedQuestions));
  };

  return (
    <Modal onCancel={onCancel} open={isOpen} footer centered title="Paramètres">
      <div className="flex gap-4 flex-col">
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
            <div className="flex justify-between flex-row w-full">
              <p>
                http://localhost:3000/
                <span className="text-zinc-400">{`?progress=${progressCode}`}</span>
              </p>
              <CopyOutlined className="!text-zinc-500" />
            </div>
          </Button>
        </Tooltip>

        <div className="flex flex-row items-center gap-2">
          <Switch
            onChange={(checked) => setTrackQuestions(checked)}
            defaultChecked
            title="Suivi des questions"
          />
          <p className="text-sm"> Suivi des questions</p>
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
