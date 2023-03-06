const changeComparaisonNumberClientsMutation = (
  state,
  comparaisonNumberClients
) => {
  state.comparaisonNumberClients = comparaisonNumberClients;
};

const changeFilterdComparaisonClientsRisksToQuitMutation = (
  state,
  filterdComparaisonClientsRisksToQuit
) => {
  state.filterdComparaisonClientsRisksToQuit =
    filterdComparaisonClientsRisksToQuit;
};

export default {
  changeComparaisonNumberClientsMutation,
  changeFilterdComparaisonClientsRisksToQuitMutation,
};
