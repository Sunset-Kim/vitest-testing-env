import { PropsWithRef, useId } from "react";

interface TextFieldProps extends PropsWithRef<JSX.IntrinsicElements["input"]> {
  label?: string;
  error?: string;
  errorMessage?: string;
  descriptionMessage?: string;
}

export function TextField(props: TextFieldProps) {
  const componentId = useId();
  const errorId = `${componentId}-error`;
  const descriptionId = `${componentId}-description`;

  return (
    <div>
      {props.label && <label htmlFor={componentId}>{props.label}</label>}
      <input
        {...props}
        id={componentId}
        aria-describedby={props.error ? errorId : descriptionId}
        aria-errormessage={errorId}
        aria-invalid={Boolean(props.error)}
      />
      <div>
        {props.error && (
          <div id={errorId} role="alert">
            {props.errorMessage}
          </div>
        )}
        {!props.error && props.descriptionMessage && (
          <div id={descriptionId}>{props.descriptionMessage}</div>
        )}
      </div>
    </div>
  );
}
