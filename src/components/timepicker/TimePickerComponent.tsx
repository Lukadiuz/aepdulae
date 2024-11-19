import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import { TimePicker } from "antd";

interface TimePickerComponentProps {
  name: any;
  control: any;
}

const TimePickerComponent: React.FC<TimePickerComponentProps> = ({
  name,
  control,
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
        control={control}
        rules={{ required: `${UpperText(name)} is required` }}
        render={({ field, fieldState }) => (
          <>
            <TimePicker
              size="large"
              {...field}
              style={{ width: "100%" }}
              placeholder={UpperText(name)}
              status={fieldState.invalid ? "error" : ""}
            />
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

export default TimePickerComponent;
