import React, { Suspense } from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Suspense fallback={<span>Loading....</span>}>
        {data.map((eachApp) => (
          <Card key={eachApp.id} eachApp={eachApp}></Card>
        ))}
      </Suspense>
    </div>
  );
};

export default Cards;
