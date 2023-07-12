import React from "react";
import { Skeleton, ConfigProvider } from "antd";

const SkeletonComponent: React.FC = () => {
  return (
    <div className="grid-item h-[420px] overflow-hidden">
      <ConfigProvider
        theme={{
          token: {
            controlHeight: 282,
          },
        }}
      >
        <div className="rounded-xl overflow-hidden">
          <Skeleton.Button active={true} shape={"square"} block={true} />
        </div>
      </ConfigProvider>
      <div className="flex justify-between mt-2 h-6">
        <div className=" overflow-hidden">
          <Skeleton.Input active={true} />
        </div>
        <div className="w-12 overflow-hidden">
          <Skeleton.Input active={true} />
        </div>
      </div>
      <div className="w-28 overflow-hidden h-6">
        <Skeleton.Input active={true} />
      </div>
      <div className="w-24 overflow-hidden h-6">
        <Skeleton.Input active={true} />
      </div>
      <div className="w-20 overflow-hidden h-6">
        <Skeleton.Input active={true} />
      </div>
      {/* <Skeleton.Input active={true} /> */}
    </div>
  );
};

export default SkeletonComponent;
