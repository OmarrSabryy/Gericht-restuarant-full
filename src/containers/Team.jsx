import React from "react";
import { ChefCard } from "../components";
import { team } from "../constants";
const chefsList = team.map((chef) => (
  <ChefCard
    key={chef.id}
    chefId={chef.id}
    chefName={chef.chefName}
    chefTitle={chef.chefTitle}
    chefImg={chef.chefImg}
  />
));
const Team = () => {
  return (
    <section className="section_colomn min-h-screen bg-dimBlack sm:grid sm:grid-cols-3">
      {chefsList}
    </section>
  );
};

export default Team;
