<template>
  <div>
    <clientsSummary  />
    <gymInformation />
  </div>
</template>

<script>
import clientsSummary from "../clientsSummary";
import gymInformation from "../gymInformation";

export default {
  name:'gym',
  components: {
    clientsSummary,
    gymInformation,
  },


};
</script>
