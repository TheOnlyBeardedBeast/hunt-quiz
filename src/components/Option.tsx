import { FunctionComponent } from "preact";

const INITIALS = ["a","b","c"] as const;

type OptionProps = {
    option: string;
    order: number;
    onClick?: (option:string) => void;
}

export const Option: FunctionComponent<OptionProps> = ({
    option,
    order,
    onClick
}) => {
    const handleClick = () => {
        onClick?.(option);
    }

  return (
    <button
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center space-x-2 cursor-pointer bg-gray-100 border-2 hover:bg-amber-100 hover:border-amber-300 p-2 rounded-md"
      for="q1c"
      onClick={handleClick}
    >
      <span class="peer-aria-checked:font-semibold peer-aria-checked:text-gray-900 dark:peer-aria-checked:text-gray-50">
        {INITIALS[order]}) {option}
      </span>
    </button>
  );
};
