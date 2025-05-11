import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectRole() {
  return (
    <Select name="role" id="role">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="User">User</SelectItem>
        <SelectItem value="Admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  );
}
