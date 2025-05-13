"use client";

import InputGroup from "@/components/forms/InputGroup";
import ImageInput from "./ImageInput";
import SelectCategories from "./SelectCategories";
import { Input } from "@/components/ui/input";

const FormCreate = () => {
  return (
    <form>
      <div className="p-6 flex flex-col gap-6">
        <InputGroup label={"Thumbnail"}>
          <ImageInput />
        </InputGroup>

        <InputGroup label="Title">
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Input title"
          />
        </InputGroup>

        <InputGroup label="Category">
          <SelectCategories />
          <p className="text-sm text-slate-500">
            The existing category list can be seen in the{" "}
            <span className="text-blue-600 underline">category</span> menu
          </p>
        </InputGroup>
      </div>
    </form>
  );
};

export default FormCreate;
