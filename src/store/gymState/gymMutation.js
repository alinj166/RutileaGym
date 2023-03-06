const changeClientsSummaryMutation = (state, clientsSummary) => {
  state.clientsSummary = clientsSummary;
};
const changeActiveIndexDoughnutMutation = (state, activeIndexDoughnut) => {
  state.activeIndexDoughnut = activeIndexDoughnut;
};
const changeNumberNonActiveClientsMutation = (
  state,
  numberNonActiveClients
) => {
  state.numberNonActiveClients = numberNonActiveClients;
};
const changeNumberActiveClientsMutation = (state, numberActiveClients) => {
  state.numberActiveClients = numberActiveClients;
};
export default {
  changeNumberNonActiveClientsMutation,
  changeNumberActiveClientsMutation,
  changeClientsSummaryMutation,
  changeActiveIndexDoughnutMutation,
};
