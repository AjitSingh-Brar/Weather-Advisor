"use client";

import CardInfo from "./CardInfo";

function InfoTab() {
  return (
    <section className="relative max-h-screen">
      <div className=" p-5 pl-2 max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row items-center justify-between">
        <CardInfo
          iconType="DeviceThermostatOutlinedIcon"
          content="Temperature"
        />
        <CardInfo iconType="WaterDropIcon" content="Humidity" />
        <CardInfo iconType="AirIcon" content="Wind" />
      </div>
    </section>
  );
}

export default InfoTab;
