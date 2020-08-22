import React, { ReactElement, useState, SyntheticEvent } from "react";

export interface TextBoxProps {
  placeholder: string;
  callBack: (val: string) => void;
  word: string;
}

export default function TextBox({
  placeholder,
  callBack,
  word,
}: TextBoxProps): ReactElement | null {
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const val = e.currentTarget.value;
    callBack(val);
  };
  return (
    <input
      placeholder={placeholder}
      data-testid="textbox"
      type="text"
      value={word}
      onChange={(e) => handleChange(e)}
    />
  );
}
