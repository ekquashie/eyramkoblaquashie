import React from "react";
import spacex from "../../../assets/spacex.jpeg"
import CapsuleData from "./capsule-data.jsx";

const CapsuleDetail = ({capsule}) => {
  return (
    <div className="w-10/12 h-7/12 flex animate-slideUp">
      <img alt="spacex" src={spacex} className="w-6/12 h-full"/>
      <div className="bg-white w-6/12 grid grid-cols-3 gap-3 p-5">
        <CapsuleData name="Capsule Serial" data={capsule.capsule_serial}/>
        <CapsuleData name="Capsule ID" data={capsule.capsule_id}/>
        <CapsuleData name="Status" data={capsule.status}/>
        <CapsuleData name="Original Launch" data={capsule.original_launch}/>
        <CapsuleData name="Original Launch Unix" data={capsule.original_launch_unix}/>
        <CapsuleData name="Landings" data={capsule.landings}/>
        <CapsuleData name="Type" data={capsule.type}/>
        <CapsuleData name="Details" data={capsule.details ? capsule.details : "No details found"}/>
        <CapsuleData name="Reuse Count" data={capsule.reuse_count}/>
        {capsule.missions.length > 0 && capsule.missions.map((mission, index) => {
          return <CapsuleData key={index} name={`${mission.name} Mission`} data={"Flight: " + mission.flight}/>
        })}
      </div>
    </div>
  );
}

export default CapsuleDetail;