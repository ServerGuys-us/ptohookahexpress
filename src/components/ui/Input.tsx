import { forwardRef } from 'react';
import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from 'react';

const controlBase =
  'w-full rounded-md border bg-surface-raised px-4 py-3 text-base text-text-primary placeholder:text-text-disabled transition-[border-color,box-shadow] duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-[0_0_0_3px_var(--color-accent-glow)]';

function borderClass(hasError?: boolean) {
  return hasError ? 'border-error' : 'border-border-strong';
}

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

function FieldShell({ id, label, error, required, className = '', children }: FieldShellProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-text-primary">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, required, wrapperClassName, className = '', ...props },
  ref,
) {
  const fieldId = id ?? props.name ?? label;
  return (
    <FieldShell
      id={fieldId}
      label={label}
      error={error}
      required={required}
      className={wrapperClassName}
    >
      <input
        id={fieldId}
        ref={ref}
        aria-invalid={!!error}
        className={`${controlBase} ${borderClass(!!error)} ${className}`}
        {...props}
      />
    </FieldShell>
  );
});

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
  placeholder?: string;
  options: readonly string[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, id, required, wrapperClassName, placeholder, options, className = '', ...props },
  ref,
) {
  const fieldId = id ?? props.name ?? label;
  return (
    <FieldShell
      id={fieldId}
      label={label}
      error={error}
      required={required}
      className={wrapperClassName}
    >
      <select
        id={fieldId}
        ref={ref}
        aria-invalid={!!error}
        defaultValue=""
        className={`${controlBase} ${borderClass(!!error)} appearance-none ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </FieldShell>
  );
});

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, id, required, wrapperClassName, className = '', ...props },
  ref,
) {
  const fieldId = id ?? props.name ?? label;
  return (
    <FieldShell
      id={fieldId}
      label={label}
      error={error}
      required={required}
      className={wrapperClassName}
    >
      <textarea
        id={fieldId}
        ref={ref}
        aria-invalid={!!error}
        className={`${controlBase} ${borderClass(!!error)} resize-y ${className}`}
        {...props}
      />
    </FieldShell>
  );
});
