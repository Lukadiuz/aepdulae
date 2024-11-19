import React, { useState } from "react";
import {
  Divider,
  ConfigProvider,
  GetProps,
  Input,
  DatePicker,
  Button,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SelectComponent from "../select/SelectComponent";
import { useForm } from "react-hook-form";
import { FaFilter, FaPlus } from "react-icons/fa";
import ModalComponent from "../modal/Modal";

interface HeaderBarPageProps {
  title: String;
  subTitle?: String;
  showSearch?: Boolean;
  showDatePicker?: Boolean;
  showButton?: Boolean;
  clicked?: (isNew: boolean) => void;
  showSelect?: Boolean;
}

const HeaderBarPage: React.FC<HeaderBarPageProps> = ({
  title,
  subTitle,
  showSearch,
  showDatePicker,
  clicked,
  showButton,
  showSelect,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  type SearchProps = GetProps<typeof Input.Search>;

  const { RangePicker } = DatePicker;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-start items-center rounded-2xl h-16 max-h-28 bg-white p-3 dark:bg-neutral-100 min-w-64">
      <div className="flex-1">
        <h1 className="text-slate-600">
          {title} : {subTitle}
        </h1>
      </div>
      <div className="hidden sm:flex">
        <div className="flex items-center gap-4 ">
          {showSearch && (
            <Input
              prefix={<SearchOutlined />}
              className="w-full h-10 text-right text-lg"
              placeholder={`Search ${title} ID`}
            />
          )}
          {showDatePicker && (
            <RangePicker
              // picker="month"
              className="w-full h-10 text-right text-lg"
            />
          )}
        </div>
        {(showSearch || showDatePicker) && (
          <ConfigProvider
            theme={{
              token: {
                margin: 24,
                marginLG: 48,
                lineWidth: 1,
              },
              components: {
                Divider: {
                  verticalMarginInline: 16,
                  textPaddingInline: 16,
                  orientationMargin: 0.2,
                },
              },
            }}
          >
            <Divider
              orientationMargin={50}
              type="vertical"
              style={{ borderColor: "#cecece", height: "35px" }} // ปรับขนาดความหนาของเส้น
            />
          </ConfigProvider>
        )}
        {showButton && (
          <Button
            className="text-lg h-10"
            color="primary"
            variant="outlined"
            onClick={() => clicked?.(true)}
          >
            <span>{`Create ${title}`}</span>
          </Button>
        )}
        {showSelect && (
          <SelectComponent name="Family_profile" control={control} />
        )}
      </div>
      <div className="block sm:hidden">
        <div className="flex flex-row gap-2">
          {(showSearch || showDatePicker) && (
            <Button
              icon={<FaFilter />}
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
          )}
          {showButton && (
            <Button icon={<FaPlus />} onClick={() => clicked?.(true)} />
          )}
        </div>
        <ModalComponent
          title="Filter"
          width={1000}
          isOpen={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
        >
          <div className="flex flex-col gap-3 px-5">
            {showSearch && (
              <Input
                prefix={<SearchOutlined />}
                className="w-full  text-right "
                placeholder={`Search ${title} ID`}
              />
            )}
            {showDatePicker && (
              <RangePicker
                // picker="month"
                className="w-full  text-right "
              />
            )}
            {showSelect && (
              <SelectComponent
                className="w-full"
                name="Family_profile"
                control={control}
              />
            )}
          </div>
        </ModalComponent>
      </div>
    </div>
  );
};

export default HeaderBarPage;
