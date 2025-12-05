import { CheckOutlined, CloseCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import { MouseEventHandler } from "react";

type Props = {
  onUncheck: MouseEventHandler<HTMLButtonElement>;
  checkMarkClassname?: string;
};

function UncheckableBox(props: Props) {
  const { onUncheck, checkMarkClassname } = props;
  const onUncheckInternal: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onUncheck(event);
  };
  return (
    <Tooltip
      title="Décocher cette question"
      mouseEnterDelay={0.5}
      placement="right"
    >
      <button
        onClick={onUncheckInternal}
        className=" p-2 group hover:cursor-pointer relative inline-flex items-center justify-center overflow-hidden w-10  font-medium text-neutral-200"
      >
        <div className="translate-x-0 transition group-hover:translate-x-[300%]">
          <CheckOutlined className={checkMarkClassname} />
        </div>
        <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
          <div className=" hover:opacity-70 transition-opacity duration-100  group-hover:flex  ">
            <CloseCircleFilled />
          </div>
        </div>
      </button>
    </Tooltip>
  );
}

export default UncheckableBox;
