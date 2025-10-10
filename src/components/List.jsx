import React, { Suspense } from "react";
import Item from "./Item";

const List = ({installedAppsList}) => {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<span>Loading....</span>}>
        {installedAppsList.map((eachApp) => (
          <Item key={eachApp.id} eachApp={eachApp}></Item>
        ))}
      </Suspense>
    </div>
  );
};

export default List;
