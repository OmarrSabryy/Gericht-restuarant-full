import React from "react";
import { Header, ChefInfo, ChefAchievements, Footer } from "../containers";
import { useParams } from "react-router-dom";
const ChefDetails = () => {
  const params = useParams();
  return (
    <div className="page slide-top">
      <Header location="chefDetails" title="our chefs" />
      <ChefInfo chefId={params.chefId} />
      <ChefAchievements chefId={params.chefId} />
      <Footer />
    </div>
  );
};

export default ChefDetails;
