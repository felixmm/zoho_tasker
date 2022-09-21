
<template>
  <date-picker />
  <div class="col-12">Main window</div>
</template>

<script>
import DatePicker from "@/components/Datepicker-Component.vue";

export default {
  name: "Main-View",
  components: {
    DatePicker,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>