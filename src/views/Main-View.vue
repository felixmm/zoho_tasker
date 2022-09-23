<template>
  <date-picker @on-date-change="onDateChange($event)" />
  <div class="col-12">Main window</div>
  <div>{{ dateKey }}</div>
</template>

<script>
import { ref, computed } from "vue";
import moment from "moment";
import DatePicker from "@/components/Datepicker-Component.vue";

export default {
  name: "Main-View",
  components: {
    DatePicker,
  },
  setup() {
    const date = ref(new Date());
    const dateKey = computed(() => moment(date.value).format("YYYYmmDD"));
    const onDateChange = (d) => (date.value = d);

    return {
      onDateChange,
      dateKey,
    };
  },
};
</script>

<style scoped>
</style>