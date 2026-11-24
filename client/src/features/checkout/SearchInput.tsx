import { useRef } from "react";

type SearchInputProps = {
  searchTerm: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  searchTerm,
  onChange,
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => onChange(e)}
          value={searchTerm}
        />
        <button onClick={() => inputRef.current?.focus()}>
          Click here to focus ref
        </button>
      </div>
    </>
  );
}
