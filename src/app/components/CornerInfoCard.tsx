"use client";
import { CloseOutlined, SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export default function CornerInfoCard(props: Props) {
  const { onClose, isOpen } = props;
  const [showX, setShowX] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hasClosedBefore, setHasClosedBefore] = useState(false); // 👈 moved here

  useEffect(() => {
    setHasClosedBefore(localStorage.getItem("closedIntroCard") === "true"); // 👈 safe here
    setMounted(true);
    const timer = setTimeout(() => {
      setShowX(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem("closedIntroCard", "true");
    onClose();
  };
  if (!isOpen || hasClosedBefore) return null;

  return (
    <>
      <div
        className={cn(
          "fixed z-9 bg-black/20 inset-0 opacity-0 transition-opacity duration-1000",
          mounted && "opacity-100",
        )}
      ></div>
      <div
        className={cn(
          "fixed bottom-0 right-0 m-4 bg-white rounded-xl p-4 z-10  max-w-100 shadow-lg  opacity-0 transition-opacity duration-500",
          mounted && "opacity-100",
        )}
      >
        <div className="flex flex-row justify-between items-center gap-2 z-10">
          <h2>Bienvenue - Ton progrès est sauvegardé !</h2>
          {mounted && (
            <Button
              disabled={!showX}
              onClick={handleClose}
              type="text"
              icon={<CloseOutlined />}
              className={cn("self-end", !showX && "opacity-0")}
            />
          )}
        </div>

        <p>
          Tout est dans l'URL, tu peux garder ou transférer ton progrès sur un
          autre appareil.{" "}
          <span className="font-bold">
            Tu peux aussi tout réinitialiser dans les paramètres{" "}
            <SettingOutlined />.{" "}
          </span>
        </p>
        <img src={"/saveData.png"} className="rounded-md my-5" />
        <p>
          Ça veut aussi dire que tes données ne sont pas stockées dans une base
          de données obscure, tout reste sur ton appareil.
        </p>
        <p className="mt-2">Bonnes révisions! :)</p>
      </div>
    </>
  );
}
