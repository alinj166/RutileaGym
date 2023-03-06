const changeClientsRisksToQuitMutation = (state, clientsRisksToQuit) => {
  state.clientsRisksToQuit = clientsRisksToQuit;
};

const changeFilterdClientsRisksToQuitMutation = (
  state,
  filterdClientsRisksToQuit
) => {
  state.filterdClientsRisksToQuit = filterdClientsRisksToQuit;
};
const changeUserCardActiveRowTableCRQMutation = (
  state,
  userCardActiveRowTableCRQ
) => {
  state.userCardActiveRowTableCRQ = userCardActiveRowTableCRQ;
};

export default {
  changeUserCardActiveRowTableCRQMutation,
  changeClientsRisksToQuitMutation,
  changeFilterdClientsRisksToQuitMutation,
};
