const Tiger = require("../modularization/Tiger.js"); // TODO 3
const Wolf = require("../modularization/Wolf.js"); // TODO 4

const fighting = (tiger, wolf) => {
  console.log("tiger: ", tiger.strength);
  console.log("wolf: ", wolf.strength);

  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }

  console.log("Tiger and Wolf have same strength");
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
