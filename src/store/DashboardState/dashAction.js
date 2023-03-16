import api from "../../api";
//filterd Clients Risk to quit used in Dashboard Page (table) and the same array of objects  used as init to generate filterdClientsRisksToQuit
//to display chart on dashboard
const changeClientsRisksToQuit = (context, gymId) => {
  return new Promise((resolve, reject) => {



    api
      .ranked_clients_per_gym(gymId)
      .then((response) => {
        response.data.forEach((item) => {
          item.score = ( (item.score*100).toFixed(1))
          
       
          return item;
        });
        context.commit("changeClientsRisksToQuitMutation", response.data);

        resolve("d");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//generate Object used as parametre to display chart on dashboard  page

const changeFilterdClientsRisksToQuit = (context, filter) => {
  var data1 = {};
  var data2 = {};
  var data3 = {};

  api.ranked_clients_per_gym(filter[0]).then((response) => {

    response.data.reduce((prev, cur) => {
      let temp = cur[filter[1]];
      if (cur["score"] >= 0.9) {
        data1[temp] = (data1[temp] || 0) + 1;
        data2[temp] = data2[temp] || 0;
        data3[temp] = data3[temp] || 0;
      } else if (cur["score"] >= 0.5) {
        data1[temp] = data1[temp] || 0;

        data2[temp] = (data2[temp] || 0) + 1;
        data3[temp] = data3[temp] || 0;
      } else {
        data1[temp] = data1[temp] || 0;
        data2[temp] = data2[temp] || 0;

        data3[temp] = (data3[temp] || 0) + 1;
      }
      return prev;
    }, {});
 

    let labels = [];
    let dataSets1 = [];
    let dataSets2 = [];
    let dataSets3 = [];
    for (let i in data1) {
      labels.push(i);
      dataSets1.push(data1[i]);
      dataSets2.push(data2[i]);
      dataSets3.push(data3[i]);
    }
    let data = {
      labels: labels,
      datasets: [
        {
          label: "High Risk",
          data: dataSets1,
          backgroundColor: "#E46651",
        },
        {
          label: "Medium Risk",
          data: dataSets2,
          backgroundColor: "#FFCC33",
        },
        {
          label: "Low Risk",
          data: dataSets3,
          backgroundColor: "#41B883",
        },
      ],
      options: {
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    };
    context.commit("changeFilterdClientsRisksToQuitMutation", data);
  });

};

///information used on card (dashboard page)
const changeUserCardActiveRowTableCRQ = (
  context,
  userCardActiveRowTableCRQ
) => {
  context.commit(
    "changeUserCardActiveRowTableCRQMutation",
    userCardActiveRowTableCRQ
  );
};

export default {
  changeClientsRisksToQuit,
  changeFilterdClientsRisksToQuit,
  changeUserCardActiveRowTableCRQ,
};
