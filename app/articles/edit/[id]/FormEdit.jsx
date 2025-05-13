"use client";

import React, { useActionState } from "react";
import { editArticle } from "./actions";
import FormAction from "../../create/FormAction";
import ValidationMessage from "@/components/forms/ValidationMessage";
import InputGroup from "@/components/forms/InputGroup";
import { Input } from "@/components/ui/input";
import SelectCategories from "./SelectCategories";
import { Textarea } from "@/components/ui/textarea";
import ImageInput from "@/components/articleform/ImageInput";

const FormEdit = ({ article }) => {
  const [state, editAction] = useActionState(editArticle, undefined);

  return (
    <form action={editAction}>
      <div className="p-6 flex flex-col gap-6">
        {/* Input Id */}
        <input type="text" name="id" value={article.id} readOnly hidden />

        {/* Input image */}
        <InputGroup label="Thumbnail">
          {/* Input image */}
          <ImageInput defaultImage={article.imageUrl} />
          {state?.errors?.imageUrl && (
            <ValidationMessage message={state.errors.imageUrl} />
          )}
        </InputGroup>

        {/* Input Title */}
        <InputGroup label="Title">
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Input title"
            defaultValue={article.title}
          />
          {state?.errors?.title && (
            <ValidationMessage message={state.errors.title} />
          )}
        </InputGroup>

        {/* Input category */}
        <InputGroup label="Category">
          <SelectCategories defaultValue={article.categoryId} />
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-slate-500">
              The existing category list can be seen in the{" "}
              <span className="text-blue-600 underline">category</span> menu
            </p>
            {state?.errors?.category && (
              <ValidationMessage message={state.errors.category} />
            )}
          </div>
        </InputGroup>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <Textarea name="content" defaultValue={article.content} />
          {state?.errors?.content && (
            <ValidationMessage message={state.errors.content} />
          )}
        </div>

        {/* Actions */}
        <div className="flex  flex-col items-end gap-2 py-4">
          {/* Message Validation */}
          <div className="flex justify-end gap-2">
            {state?.errors?.root && (
              <ValidationMessage message={state.errors.root} />
            )}
          </div>

          {/* Button  action */}
          <FormAction />
        </div>
      </div>
    </form>
  );
};

export default FormEdit;
