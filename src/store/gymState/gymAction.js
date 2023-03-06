import api from "../../api";

const changeClientsSummary = (context, id) => {
  return new Promise((resolve, reject) => {
    /*const timeout = setTimeout(() => {
        
        // Timeout Logic
      }, 10000);*/
    api
      .clientsSummary(id)
      .then((response) => {
        context.commit("changeClientsSummaryMutation", response.data[0]);

        // return response.data
        resolve(response.data);
      })
      .then(() => {})
      .catch((err) => {
        reject(err);
      });
  });
};

const changeActiveIndexDoughnut = (context, filtre) => {
  let activeGender;
  let activeNonGender;
  let datasets = [];
  let chartData = {};
  let activeAge;
  let NonActiveAge;
  switch (filtre[0]) {
    case "gender":
      {
        let labels = ["male ", "female","other"];
        api
          .activeGenderCount(filtre[1])
          .then((response) => {
            activeGender = response.data;
          })
          .then(() => {
            api
              .nonActiveGenderCount(filtre[1])
              .then((response) => {
                activeNonGender = response.data;
              })
              .then(() => {
                let other=Math.abs((activeGender[0].count)-(activeGender[0].male+ activeGender[0].female))
                datasets.push({
                  label: ["Active Clients"],
                  data: [activeGender[0].male, activeGender[0].female, other],
                  backgroundColor: ["#41b883"],
                });
                 other=Math.abs((activeNonGender[0].count)-(activeNonGender[0].male+ activeNonGender[0].female))

                datasets.push({
                  label: ["Non Active Clients"],
                  data: [activeNonGender[0].male, activeNonGender[0].female, other],
                  backgroundColor: ["#E46651"],
                });
                chartData["datasets"] = datasets;
                chartData["labels"] = labels;

                context.commit("changeActiveIndexDoughnutMutation", chartData);
              });
          });
      }
      break;
    case "age":
      {
        let labels = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
          55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
          72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
          89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
        ];
        let data = new Array(100).fill(0);
        let data1 = new Array(100).fill(0);

        api
          .activeAgeCount(filtre[1])
          .then((response) => {
            activeAge = response.data;
            activeAge.sort((a, b) => a.age - b.age);
          })
          .then(() => {
            api
              .nonActiveAgeCount(filtre[1])
              .then((response) => {
                NonActiveAge = response.data;
                NonActiveAge.sort((a, b) => a.age - b.age);
              })
              .then(() => {
                activeAge.map((item) => {
                  // labels.push(item.age);
                  //data.push(item.count);
                  data[item.age - 1] = item.count;
                });
                NonActiveAge.map((item) => {
                  // labels.push(item.age);
                  // data1.push(item.count);
                  data1[item.age - 1] = item.count;
                });
                datasets = [
                  {
                    data: data,
                    label: "active",
                    backgroundColor: ["#41B883"],
                  },
                  {
                    data: data1,
                    label: "nonactive",
                    backgroundColor: ["#E46651"],
                  },
                ];
                chartData = { datasets: datasets, labels: labels };
                //chartData["label"] = "age";
                context.commit("changeActiveIndexDoughnutMutation", chartData);
              });
          });
      }
      break;
    default:
      break;
  }
};

const changeNumberNonActiveClients = (context, id) => {
  return new Promise((resolve, reject) => {
    /*const timeout = setTimeout(() => {
      
      // Timeout Logic
    }, 10000);*/
    api
      .numberActiveClients()
      .then((response) => {
        context.commit(
          "changeNumberNonActiveClientsMutation",
          response.data.find((i) => i.gym_id === id)
        );
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const changeNumberActiveClients = (context, id) => {
  return new Promise((resolve, reject) => {
    /*const timeout = setTimeout(() => {
      
      // Timeout Logic
    }, 10000);*/
    api
      .numberNonActiveClients()
      .then((response) => {
        context.commit(
          "changeNumberActiveClientsMutation",
          response.data.find((i) => i.gym_id === id)
        );
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {
  changeClientsSummary,
  changeActiveIndexDoughnut,

  changeNumberNonActiveClients,
  changeNumberActiveClients,
};
