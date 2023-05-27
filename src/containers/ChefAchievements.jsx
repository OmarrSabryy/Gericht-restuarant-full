import React from "react";
import { SubHeader, Laurel } from "../components";
import { achievments, team } from "../constants";
import { achievementImg } from "../assets";
const achievementsList = achievments.map((achievement) => (
  <Laurel
    key={achievement.id}
    img={achievement.img}
    title={achievement.title}
    content={achievement.content}
  />
));
const ChefAchievements = (props) => {
  const chef = team.find((chef) => chef.id === props.chefId);
  return (
    <section className="section_colomn min-h-screen font-cormorant capitalize sm:flex-row">
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="flex flex-col justify-center items-start gap-2">
          <SubHeader title={chef.chefTitle} />
          <h1 className="text-[30px] text-golden font-semibold">
            personal achievements
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-2 sm:grid sm:grid-cols-2">
          {achievementsList}
        </div>
      </div>
      <div className="flex justify-center items-center w-[200px] h-[150px] border-golden border-[0.5px] sm:w-[400px] sm:h-[350px]">
        <img
          className="w-full h-full object-cover"
          src={achievementImg}
          alt="achievementImg"
        />
      </div>
    </section>
  );
};

export default ChefAchievements;
