import api from "../../api";

// call active gender and non active gender API to Get the numbers of males and females for each gyms
//calculate the sum of the active and non active
// use this object as parametre in chart Number of clients (page comparaison )

const changeComparaisonNumberClients = (context, table) => {
  let active = {};
  let nonActive = {};
  let activeNonActiveKeys = {};
  let sum = [];
  let randomIndex = 0;
  let backgroundColor = [
    "#FF8484",
    "#FFC184",
    "#FFADAD",
    "#ADFFAD",
    "#ADD6FF",
    "#FFFFAD",
    "#FFD6AD",
    "#d18285",
    "#f7bf6a",
    "#109618",
  ];
  api
    .clientsRisksToQuitActiveGender()
    .then((response) => {
      response.data.map((item) => {
        active[item["gym_id"]] = {
          male: item["male"],
          female: item["female"],
          all: item["count"],

          label: item["gym_label"],
        };
        activeNonActiveKeys[item["gym_id"]] = item["gym_label"];
      });
    })
    .then(() =>
      api.clientsRisksToQuitNonActiveGender().then((response) =>
        response.data.map((item) => {
          nonActive[item["gym_id"]] = {
            male: item["male"],
            female: item["female"],
            all: item["count"],
            label: item["gym_label"],
          };
          activeNonActiveKeys[item["gym_id"]] = item["gym_label"];
        })
      )
    )
    .then(() => {
      switch (table) {
        case "all":
          {
            for (let i in activeNonActiveKeys) {
             let other=Math.abs((isNanValue(nonActive[i]?.all)+isNanValue(active[i]?.all))-((isNanValue(nonActive[i]?.male) + isNanValue(active[i]?.male)+isNanValue(nonActive[i]?.female) +isNanValue(active[i]?.female))))

              sum.push({
                label: activeNonActiveKeys[i],
                data: [
                  isNanValue(nonActive[i]?.male) + isNanValue(active[i]?.male),
                  isNanValue(nonActive[i]?.female) +isNanValue(active[i]?.female),
                 other
                ],
                backgroundColor: [backgroundColor[randomIndex]],
              });
              randomIndex++;
              if (randomIndex === backgroundColor.length - 1) randomIndex = 0;
            }
          }
          break;
        case "Only_active":
          {
            for (let i in active) {
              sum.push({
                label: active[i].label,
                data: [
                  isNanValue(active[i]?.male),
                  isNanValue(active[i]?.female),
                  isNanValue(active[i]?.other),

                ],
                backgroundColor: [backgroundColor[randomIndex]],
              });
              randomIndex++;
              if (randomIndex === backgroundColor.length - 1) randomIndex = 0;
            }
          }
          break;
        case "Only_Non_active": {
          for (let i in nonActive) {
            sum.push({
              label: nonActive[i].label,
              data: [
                isNanValue(nonActive[i]?.male),

                isNanValue(nonActive[i]?.female),
                isNanValue(nonActive[i]?.other),

              ],
              backgroundColor: [backgroundColor[randomIndex]],
            });
            randomIndex++;
            if (randomIndex === backgroundColor.length - 1) randomIndex = 0;
          }
        }
      }

      context.commit("changeComparaisonNumberClientsMutation", sum);
    });

  const isNanValue = (val) => {
    if (isNaN(val)) {
      return 0;
    } else return val;
  };
};
///generate object used as parametre for chart clients risk to quit on comparaison page
const changeFilterdComparaisonClientsRisksToQuit = (context) => {
  let sum = [];
  let randomIndex = 0;
  let index = 0;
  let backgroundColor = [
    "#FF8484",
    "#FFC184",
    "#FFADAD",
    "#ADFFAD",
    "#ADD6FF",
    "#FFFFAD",
    "#FFD6AD",
    "#d18285",
    "#f7bf6a",
    "#f26f7d",
  ];
  //call client risk to quit API

  api.clientsRisksToQuit().then((response) => {
    //calculate the number of clients risks to quit for each gym
    //generate an object with key (gym label ) and value (the count )
    let map = response.data.reduce((prev, cur) => {
      let temp = cur["gym label"];
      prev[temp] = (prev[temp] || 0) + 1;
      return prev;
    }, {});

    let labels = [];

    for (let i in map) {
      labels.push(i);
      let data = new Array(Object.keys(map).length).fill(0);

      data[index] = map[i];
      sum.push({
        label: i,
        data: data,
        backgroundColor: [backgroundColor[randomIndex]],
      });
      randomIndex++;
      index++;
      if (randomIndex === backgroundColor.length - 1) randomIndex = 0;
    }
    context.commit("changeFilterdComparaisonClientsRisksToQuitMutation", {
      labels: labels,
      datasets: sum,
    });
  });
};

export default {
  changeComparaisonNumberClients,
  changeFilterdComparaisonClientsRisksToQuit,
};
