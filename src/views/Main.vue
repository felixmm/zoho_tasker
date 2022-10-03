<template>
  <div class="row h-100">
    <div class="col-1 border-right">
      <action-menu />
    </div>
    <div class="col-11">
      <date-picker @on-date-change="onDateChange($event)" />
      <div>
        <div class="row font-24 text-center border-bottom white fw-bold py-3">
          <div class="col-2">
            <label>US</label>
          </div>
          <div class="col-2">
            <label>Task</label>
          </div>
          <div class="col-5">
            <label>Title</label>
          </div>
          <div class="col-2">
            <label>Time</label>
          </div>
        </div>
        <task-item
          v-for="task in workDay.tasks"
          :key="task.task"
          :item="task"
          @on-delete="deleteItem($event)"
        />
      </div>
      <add-task-item
        v-if="viewAddTask"
        @on-save="saveItem($event)"
        @on-cancel="hideAddTask()"
      />

      <!-- Dev buttons -->
      <div class="fixed-bottom">
        <button @click="clear()">Clear All</button>
        <button @click="viewAll()">View All</button>
      </div>
      <!-- Dev buttons End-->

      <div v-if="!viewAddTask" class="add-task-btn text-end">
        <button type="button" class="btn" @click="showAddTask()">
          <i class="fa-solid fa-circle-plus font-50 plus-btn" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import moment from "moment";
import DatePicker from "@/components/DatePicker.vue";
import TaskItem from "@/components/TaskItem.vue";
import AddTaskItem from "@/components/AddTaskItem.vue";
import ActionMenu from "@/components/ActionMenu.vue";

import {
  getWorkDay,
  setWorkDay,
  dateKeyExists,
  saveTask,
  deleteTask,
  clearAll,
  getAll,
} from "@/data/storeManager";

export default {
  name: "MainView",
  components: {
    DatePicker,
    TaskItem,
    AddTaskItem,
    ActionMenu,
  },
  setup() {
    const workDay = ref({
      dateKey: "",
      tasks: [],
    });

    // Date logic
    const checkWorkDay = () => {
      const keyExists = dateKeyExists(dateKey.value);
      if (!keyExists) {
        const currentDay = {
          dateKey: dateKey.value,
          tasks: [],
        };
        setWorkDay(currentDay);
      }

      workDay.value = getWorkDay(dateKey.value);
    };

    const date = ref(new Date());
    const dateKey = computed(() => moment(date.value).format("YYYYMMDD"));
    const onDateChange = (d) => {
      date.value = d;
      checkWorkDay();
    };

    // Add Tasks
    const viewAddTask = ref(false);

    function showAddTask() {
      viewAddTask.value = true;
    }

    function hideAddTask() {
      viewAddTask.value = false;
    }

    function saveItem(input) {
      saveTask(dateKey.value, input);
      hideAddTask();
      checkWorkDay();
    }

    function deleteItem(input) {
      deleteTask(dateKey.value, input);
      checkWorkDay();
    }

    /********** For development **********/

    function clear() {
      clearAll();
      checkWorkDay();
    }

    function viewAll() {
      const allTasks = getAll();
      console.log("All Workdays and tasks: ", allTasks);
    }

    /********** For development End **********/

    onMounted(() => checkWorkDay());

    return {
      onDateChange,
      workDay,
      viewAddTask,
      showAddTask,
      hideAddTask,
      saveItem,
      deleteItem,
      clear,
      viewAll,
    };
  },
};
</script>

<style scoped>
.add-task-btn {
  position: fixed;
  right: 20px;
  bottom: 15px;
  left: 0;
  z-index: 1030;
}
.border-right {
  border-right: 1px solid;
}
</style>
