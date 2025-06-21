import React from "react";

export default function TechName({ headTitle, techArray, give, forMobile }) {
  return (
    <div>
      <h1 className="text-sm font-normal mb-1.5">{headTitle}</h1>
      <div
        className={`grid
          ${forMobile == true ? "grid-cols-2 lg:grid-cols-5" : ""}
          ${
            give === 2 ? "grid-cols-2" : "lg:grid-cols-5"
          } xl:flex items-center gap-3`}
      >
        {techArray.map(({ techName, techNameIcon, color, isLearning }) => (
          <div
            key={techName}
            style={{
              border: isLearning
                ? "1.5px solid transparent"
                : "1px solid transparent",
              boxShadow: isLearning
                ? `0 0 0 1.2px ${color}`
                : `0 0 0 0.2px ${color}`,
            }}
            className={`flex  items-center gap-1.5 rounded-md px-3 py-2`}
          >
            {techNameIcon}
            <h1 className="text-xs font-light">{techName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
