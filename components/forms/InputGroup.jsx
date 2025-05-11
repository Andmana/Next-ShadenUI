import { Label } from "../ui/label";

const InputGroup = ({ children, label }) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={label.toString().toLowerCase()}>{label}</Label>
            {children}
        </div>
    );
};

export default InputGroup;
