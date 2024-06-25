import { getData } from "@/app/lib/getData";
import Image from "next/image";
import React from "react";

const TeamMember = async () => {
  const data = await getData(`about-us-app/our-team`);
  const teamMember = data?.results;

  return (
    <>
      {teamMember?.map((member: any) => {
        return (
          <div
            key={member.id}
            className="team-member team-member--hover-effect "
          >
            <div className="team-member-info">
              <h5 className="team-member-name">{member.name}</h5>
              <h6 className="team-member-desig">{member.position}</h6>
            </div>
            <Image
              src={member.image}
              alt="policy banner"
              className="moving-vertical"
              width={400} // Adjust as needed
              height={400} // Adjust as needed
            />
          </div>
        );
      })}
    </>
  );
};

export default TeamMember;
