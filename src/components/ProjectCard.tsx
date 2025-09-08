import React from "react";

const ProjectCard: React.FC = () => {
  return (
    // (50px gap * 3) + (310px card width * 3) = 1080px
    <div className="bg-white w-130 h-70">
      <div
        className="
        bg-[url('https://fastly.picsum.photos/id/926/520/280.jpg?hmac=-UfMeHgdJ5XafoyaeckA1y4wj_RM3yLyy8pgecrpeuw')] 
        bg-cover 
        w-[inherit] 
        h-[inherit] 
        max-w-[inherit] 
        max-h-[inherit]
        z-0
        flex
        "
      >
        <div
          className="
        w-[inherit]
        h-[50%]
        max-w-[inherit]
        max-h-[inherit]
        flex
        self-end
        z-10
        bg-[rgba(0,0,0,0.8)]
        "
        >
          <div>
            <h1 className="text-white mx-3 my-2 font-extrabold text-2xl">
              Project
              </h1>
            <div id="tags"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
