"use client";

import InputGroup from "@/components/forms/InputGroup";
import ImageInput from "./ImageInput";
import SelectCategories from "./SelectCategories";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { CreateArticle } from "./actions";
import { Button } from "@/components/ui/button";
import ValidationMessage from "@/components/forms/ValidationMessage";

const FormCreate = () => {
  const [state, createAction] = useActionState(CreateArticle, undefined);

  return (
    <form action={createAction}>
      <div className="p-6 flex flex-col gap-6">
        <InputGroup label={"Thumbnail"}>
          <ImageInput />
          {state?.errors?.imageUrl && (
            <ValidationMessage message={state.errors.imageUrl} />
          )}
        </InputGroup>

        <InputGroup label="Title">
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Input title"
          />
          {state?.errors?.title && (
            <ValidationMessage message={state.errors.title} />
          )}
        </InputGroup>

        <InputGroup label="Category">
          <SelectCategories />
        </InputGroup>

        <div className="flex flex-col gap-1.5">
          <p className="text-sm text-slate-500">
            The existing category list can be seen in the{" "}
            <span className="text-blue-600 underline">category</span> menu
          </p>
          {state?.errors?.category && (
            <ValidationMessage message={state.errors.category} />
          )}
        </div>

        <Textarea name="content" />
        {state?.errors?.content && (
          <ValidationMessage message={state.errors.content} />
        )}

        <div className="flex justify-end gap-2 py-4">
          <Button type="submit" className="bg-blue-600 text-white">
            Upload
          </Button>
        </div>
        <div className="flex flex-none">
          {state?.errors?.root && (
            <ValidationMessage message={state.errors.root} />
          )}
        </div>
      </div>
    </form>
  );
};

export default FormCreate;
