import React, { useState } from "react";
import { Switch, ConfigProvider } from "antd";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";

const ToggleSwitch = styled(Switch)`
  &&& {
    .ant-switch-checked {
      background-color: #000;
      border-color: #000;
    }
  }
`;

const CheckIcon = styled(FiCheck)`
  font-size: 12px;
  color: #000;
  font-weight: 700;
  transform: translate(16px, 5px);
`;

const SwitchToggleComponent: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
          colorTextLightSolid: "#fff",
          colorTextQuaternary: "#fff",
          colorTextTertiary: "#b0b0b0",
          // marginXXS: 2,
          // controlHeight: 50,
        },
      }}
    >
      <ToggleSwitch
        className="bg-[#b0b0b0] scale-y-[1.5] -translate-x-2"
        checked={checked}
        onChange={handleToggle}
        checkedChildren={checked ? <CheckIcon /> : null}
      />
    </ConfigProvider>
  );
};

export { SwitchToggleComponent };
