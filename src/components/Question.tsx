import { FunctionComponent } from "preact";
import { Option } from "./Option";
import { toast } from 'react-toastify';

export type QuestionProps = {
  question: string;
  image?: string;
  options: string[];
  answer: string;
  onSucces: () => void;
};

export const Question: FunctionComponent<QuestionProps> = ({
  options,
  image,
  question,
  answer,
  onSucces
}) => {
const handleOptionClick = (option:string) => {
    if(option===answer) {
        toast.success("Správna odpoveď!",{
            onClose: onSucces
        });

        return;
    }
    toast.error("Nesprávna odpoveď!");
}

  return (
    <>
      <div class="text-lg font-medium">{question}</div>
      <span data-state="checked" class="flex items-center justify-center">
        <img src={image} class="fill-current text-current" />
      </span>
      <div class="grid gap-2.5 mt-1.5">
        <div
          class="grid gap-2"
          tabindex="0"
          style="outline: none;"
        >
          {options.map((option, index) => (
            <Option key={option} order={index} option={option} onClick={handleOptionClick} />
          ))}
        </div>
      </div>
    </>
  );
};
