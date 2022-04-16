// data imports

//  gold room project
import gold_after from "./images/goldroom/after.jpg";
import gold_before from "./images/goldroom/before.jpg";
import gold_p1 from "./images/goldroom/progression1.jpg";
import gold_p2 from "./images/goldroom/progression2.jpg";

// restroom project

import rest_after from "./images/restroom/after.jpg";
import rest_before from "./images/restroom/before.jpg";
import rest_p1 from "./images/restroom/progression1.jpg";
import rest_p2 from "./images/restroom/progression2.jpg";

const ProjectData = [
  {
    id: 1,
    name: "Gold Room",
    intro: "renovated ceiling of this jewelery store",
    pictures: [gold_after, gold_before, gold_p1, gold_p2],
    description:
      "Store owner desired to renovate the ceiling of his store to give it an apperance of a jewelery shop. The biggest challenge of this project was the height of the ceiling and the fact that the entire area of the ceiling was to be replaced. The owner appreciated the complimentary work done to organize the exisiting wires which was messy before. By careful planning, I was confidently able to create a design which fit the budget range of the owner while meeting his design expectations. Overall the owner, store customers, and I were extremely happy with the results of this renovation project!  ",
  },
  {
    id: 2,
    name: "Rest room",
    intro: "replace backslash",
    pictures: [rest_after, rest_before, rest_p1, rest_p2],
    description:
      "Casino owner desired to repair damages to the walls of a restroom. Maybe someone lost a huge bet? Who knows? With the approval of the owner, I not only wanted to repair the wall but also challenge myself to design the wall to fit the theme of a high-end casino. Careful planning of materials allowed me to create a design which fit the budget range of the casino and exceeded the expectations of the owner! ",
  },
];

export default ProjectData;
