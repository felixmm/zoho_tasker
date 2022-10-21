<template>
  <div class="row mt-4 text-center">
    <div class="col-12">
      <button
        type="button"
        title="Zoho Text"
        class="btn py-4"
        @click="onZohoText"
      >
        <i class="fa-solid fa-file-lines action-btn font-30" />
      </button>
    </div>
    <div class="col-12">
      <button
        type="button"
        title="Pull Request Text"
        class="btn py-4"
        @click="onPrText"
      >
        <i class="fa-solid fa-code action-btn font-30" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  tasks: {
    type: Array,
    default: () => [],
    required: true,
  },
});

const groupedTasks = computed(() => {
  return props.tasks.reduce((r, a) => {
    r[a.us] = [...(r[a.us] || []), a];
    return r;
  }, {});
});

const emit = defineEmits(["on-zoho-text", "on-pr-text"]);

function onZohoText() {
  const singleTemplate = `Sesión de trabajo realizando la programación necesaria para cumplir con el requerimiento asignado ejecutando la tarea {SINGLE_TASK}`;

  const multipleTemplate = `Sesión de trabajo realizando la programación necesaria para cumplir con el requerimiento asignado ejecutando las tareas {MULTIPLE_TASKS}`;

  let text = [];

  for (const us in groupedTasks.value) {
    let task = `US ${us} <br />`;
    if (groupedTasks.value[us].length == 1) {
      task += singleTemplate.replace(
        "{SINGLE_TASK}",
        `${groupedTasks.value[us][0].task} ${groupedTasks.value[us][0].title}
        <br />
        ${groupedTasks.value[us][0].time} hours <br /> <hr />`
      );
    } else {
      let taskList = "";
      let time = 0;
      groupedTasks.value[us].forEach((t, i) => {
        taskList +=
          `${t.task} ${t.title}` +
          (i + 1 == groupedTasks.value[us].length ? "." : ", ");
        time += t.time;
      });
      task += multipleTemplate.replace("{MULTIPLE_TASKS}", taskList);
      task += `<br /> ${time} hours <br /> <hr />`;
    }

    text.push(task);
  }

  emit("on-zoho-text", text);
}

function onPrText() {
  const template = `Sesión de trabajo realizando la programación necesaria para cumplir
  con el requerimiento asignado ejecutando las tareas #{US_NUMBER}
  <br />
  ###Related Issues<br />
  #{US_NUMBER}<br />
  {TASK_LIST}
  <br />
  ###Types of change<br />
  [ ] Bug fix (non-breaking change which fixes an issue)<br />
  [X] New feature (non-breaking change which adds functionality)<br />
  [ ] Breaking change (fix or feature that would cause existing
  functionality to change)<br />
  <br />
  ###Checklist<br />
  [X] My code follows the code style of this project.<br />
  [ ] My change requires a change to the documentation.<br />
  [ ] I have updated the documentation accordingly.<br />
  [ ] I have read the CONTRIBUTING document
  (https://cdevteam.netlify.app/).<br />
  [ ] I have added tests to cover my changes.<br />
  [ ] All new and existing tests passed.<br />
  <br />
  <hr />`;

  let text = [];

  for (const us in groupedTasks.value) {
    let taskList = "";
    groupedTasks.value[us].forEach(
      (t) => (taskList += "#" + t.task + "<br />")
    );

    text.push(
      template.replaceAll("{US_NUMBER}", us).replace("{TASK_LIST}", taskList)
    );
  }

  emit("on-pr-text", text);
}
</script>