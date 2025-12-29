import { CloseOutlined, SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};
export default function CornerInfoCard(props: Props) {
  const { onClose, isOpen } = props;

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 m-4 bg-white rounded-xl p-4  z-10 max-w-100 shadow-lg ">
      <div className="flex flex-row justify-between items-center gap-2 ">
        <h2>Ton progrès est sauvegardé !</h2>
        <Button
          onClick={onClose}
          type="text"
          icon={<CloseOutlined />}
          className="self-end "
        />
      </div>

      <p>
        Tout est dans l'URL, tu peux garder ou transférer ton progrès sur un
        autre appareil.{" "}
        <span className="font-bold">
          Tu peux aussi tout réinitialiser dans les paramètres{" "}
          <SettingOutlined />.{" "}
        </span>
        Ça veut aussi dire que tes données ne sont pas stockées dans une base de
        données obscure, tout reste sur ton appareil.
      </p>
      <p className="mt-2">Bonnes révisions! :)</p>
    </div>
  );
}
