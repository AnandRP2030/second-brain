interface InputProps {
  placeholder?: string;
  type?: string;
  onChange?: () => void;
}

export const Input = (props: InputProps) => {
  const { placeholder = "", type = "text", onChange } = props;
  return (
    <div className="mt-5">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="rounded-md px-4 py-2 border"
      />
    </div>
  );
};
