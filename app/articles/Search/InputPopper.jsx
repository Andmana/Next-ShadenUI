import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const InputPopper = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="primary">{children}</Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[224px] border-1 text-sm"
      ></PopoverContent>
    </Popover>
  );
};

export default InputPopper;
