import React, { ReactNode } from "react";
import { Controller, Control, FieldValues } from "react-hook-form";
import { Select } from "antd"; // Ant Design Select component
import { IconType } from "react-icons"; // Assuming you're using React Icons or similar

interface SelectComponentProps {
  name: any;
  control: any;
  className?: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  name,
  control,
  className,
}) => {
  const UpperText = (text: string): string => {
    // แยก substring `_` ออกและแปลงตัวแรกหลัง `_` ให้เป็นตัวใหญ่
    let formattedName = text.replace(
      /_./g,
      (match: string) => " " + match.charAt(1).toUpperCase()
    );

    // ตรวจสอบว่าตัวแรกเป็นตัวเล็กหรือไม่ ถ้าใช่ให้แปลงเป็นตัวใหญ่
    if (formattedName.charAt(0) === formattedName.charAt(0).toLowerCase()) {
      formattedName =
        formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    }

    return formattedName;
  };

  return (
    <div>
      <Controller
        name={name}
        control={control} // Bind to the control from the parent
        rules={{ required: `${UpperText(name)} is required` }}
        render={({ field, fieldState }) => (
          <>
            <Select
              className={className}
              size="large"
              {...field}
              placeholder={"Select " + UpperText(name)}
              status={fieldState.invalid ? "error" : ""}
            >
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
            </Select>
            {fieldState?.error?.message && (
              <span className="text-red-400 text-xs">
                {fieldState?.error?.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectComponent;
