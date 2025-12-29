import { Button, Modal, Switch, Tooltip } from "antd";
import { useQuestions } from "../stores/questionStore";
import { App } from "antd";
import { CloseOutlined, CopyOutlined } from "@ant-design/icons";

type Props = {
  isOpen: boolean;
  onCancel: () => void;
  saveCode?: string;
};
function SettingsModal(props: Props) {
  const { message } = App.useApp();
  const { onCancel, isOpen, saveCode } = props;
  const {
    uncheckQuestions,
    checkedQuestions,
    setTrackQuestions,
    setSeparateVerifs,
  } = useQuestions();
  const handleReset = () => {
    uncheckQuestions(Array.from(checkedQuestions));
  };
  const handleCopy = () => {
    const link = saveCode
      ? `https://verif-quiz.web.app/?saveData=${saveCode}`
      : `https://verif-quiz.web.app/`;

    navigator.clipboard
      .writeText(link)
      .then(() => message.success("Copié dans le presse-papiers !"))
      .catch(() => message.error("Erreur lors de la copie"));
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
            onClick={handleCopy}
          >
            <div className="flex justify-between flex-row w-full truncate">
              <p className="truncate">
                https://verif-quiz.web.app/
                <span className="text-zinc-400">{`?saveData=${saveCode}`}</span>
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
        <div className="flex flex-row items-center gap-2">
          <Switch
            onChange={(checked) => setSeparateVerifs(checked)}
            defaultChecked={false}
            title="Suivi des questions"
          />
          <p className="text-sm">
            Séparer les vérifs interieures et exterieures
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
