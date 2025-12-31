import { Skeleton } from "antd";
import { useState } from "react";

type Props = {
	src: string;
	alt: string;
	classNames?: string;
};
export default function LoadingImg(props: Props) {
	const { src, alt, classNames } = props;
	const [isPictureLoading, setIsPictureLoading] = useState<boolean>(true);

	return (
		<div>
			{isPictureLoading && (
				<Skeleton.Node active style={{ width: 160 }} className="mt-4" />
			)}
			<img
				onLoad={() => {
					setIsPictureLoading(false);
				}}
				src={src}
				alt={alt}
				className={`
                      max-h-30 rounded-xl mt-4
                      transition-opacity duration-500
                      ${isPictureLoading ? "opacity-0" : "opacity-100"}
                      ${classNames}
                    `}
			/>
		</div>
	);
}
