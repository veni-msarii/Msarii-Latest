import React from "react";
import Card from "./Card";

const TeamGrid = ({ teamMembers }) => {
  return (
    <div className="grid-container">
      {teamMembers.map((member) => (
        <Card
          key={member.id}
          imageURL={member.imageURL}
          name={member.name}
          role={member.role}
          description={member.description}
          skills={member.skills}
          socialLinks={member?.socialLinks}
        />
      ))}
    </div>
  );
};

export default TeamGrid;
