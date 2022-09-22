<template>
  <date-picker @on-date-change="onDateChange($event)" />
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
    const onDateChange = (date) => console.log("Current date: ", date);

    return {
      onDateChange,
    };
  },
};
</script>

<style scoped>
</style>