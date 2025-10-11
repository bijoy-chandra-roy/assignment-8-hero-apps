import React, { Suspense } from "react";
import Item from "./Item";

const List = ({ installedAppsList, onUninstall }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
     
        {installedAppsList.map((eachApp) => (
          <Item
            key={eachApp.id}
            eachApp={eachApp}
            onUninstall={onUninstall}
          ></Item>
        ))}
    </div>
  );
};

export default List;
