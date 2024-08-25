import { ComponentPropsWithoutRef, forwardRef, useId } from "react";

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  descriptionMessage?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, descriptionMessage, ...props }: TextFieldProps, ref) => {
    const componentId = useId();
    const errorId = `${componentId}-error`;
    const descriptionId = `${componentId}-description`;

    return (
      <div>
        {label && <label htmlFor={componentId}>{label}</label>}
        <input
          {...props}
          id={componentId}
          aria-describedby={error ? errorId : descriptionId}
          aria-invalid={Boolean(error)}
          aria-description={descriptionMessage}
          aria-errormessage={error}
          ref={ref}
        />
        <div>
          {error && (
            <div id={errorId} role="alert">
              {error}
            </div>
          )}
          {!error && descriptionMessage && (
            <div id={descriptionId}>{descriptionMessage}</div>
          )}
        </div>
      </div>
    );
  }
);

TextField.displayName = "TextField";
