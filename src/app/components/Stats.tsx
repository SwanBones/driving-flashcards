import { useEffect, useRef, useState } from "react";
import { useQuestions } from "../stores/questionStore";
import { QuestionType } from "@/questions";
import { useShallow } from "zustand/react/shallow";
import { useQuestionStats } from "../hooks/useQuestionStats";
import { cn } from "../utils/cn";
import { Tooltip } from "antd";

export default function Stats() {
  const questions = useQuestions((s) => s.questions);
  const [unitWidth, setUnitWidth] = useState(0);
  const questionStats = useQuestionStats();
  const outerRef = useRef(null);
  const isResizing = useRef(false);
  const activateProgressBar = useQuestions((s) => s.activateProgressBar);

  useEffect(() => {
    if (!outerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      isResizing.current = true;
      setUnitWidth(entry.contentRect.width / questions.length);
      requestAnimationFrame(() => {
        isResizing.current = false;
      });
    });
    observer.observe(outerRef.current);
    return () => observer.disconnect();
  }, [questions.length]);

  return (
    <div
      ref={outerRef}
      className={cn(
        "w-full bg-gray-200 h-2 rounded-full overflow-hidden flex flex-row",
        !activateProgressBar && "hidden",
      )}
    >
      {Array.from(Object.keys(questionStats)).map((key) => (
        <Tooltip
          key={`progress-${key}`}
          title={`${questionStats[key].title} - ${questionStats[key].totalChecked}/${questionStats[key].total}`}
        >
          <div
            className={cn(
              "h-full",
              questionStats[key].color,
              isResizing.current
                ? "transition-none"
                : "transition-all duration-800",
            )}
            style={{ width: unitWidth * questionStats[key].totalChecked }}
          />
        </Tooltip>
      ))}
    </div>
  );
}
