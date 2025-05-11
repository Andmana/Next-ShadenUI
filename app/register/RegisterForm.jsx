"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { register } from "./actions";
import InputGroup from "@/components/forms/InputGroup";
import PasswordInput from "@/components/forms/PasswordInput";
import SubmitButton from "@/components/forms/SubmitButton";
import ValidationMessage from "@/components/forms/ValidationMessage";
import SelectRole from "./SelectRole";

const RegisterForm = () => {
  const [state, registerAction] = useActionState(register, undefined);

  return (
    <form action={registerAction}>
      <div className="flex flex-col gap-6">
        {state?.success && (
          <p className="h-10 w-full border-1 border-green-500 text-sm font-semibold text-green-500 rounded-md flex justify-center items-center">
            Register Success
          </p>
        )}
        {/* Username */}
        <InputGroup label="Username">
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Input username"
          />
          {state?.errors?.username && (
            <ValidationMessage message={state.errors.username} />
          )}
        </InputGroup>

        {/* Password */}
        <InputGroup label="Password">
          <PasswordInput />
          {state?.errors?.password && (
            <ValidationMessage message={state.errors.password} />
          )}
        </InputGroup>

        {/* Role */}
        <InputGroup label="Role">
          <SelectRole />
          {state?.errors?.role && (
            <ValidationMessage message={state.errors.role} />
          )}
        </InputGroup>

        <SubmitButton label="Register" />
      </div>
    </form>
  );
};

export default RegisterForm;
