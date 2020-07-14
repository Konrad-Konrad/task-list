{
    let tasksList = [
        {
            content: "sample task",
            done: true,
        },
        {
            content: "another sample task",
            done: false,
        },
    ];
    let hideDoneTasks = false;

    const deleteTask = (taskIndex) => {
        tasksList = [
            ...tasksList.slice(0, taskIndex),
            ...tasksList.slice(taskIndex + 1),
        ];
        renderList();
    };
    
const toggleTaskCompleted = (taskIndex) => {
    tasksList = [
        ...tasksList.slice(0, taskIndex),
        {
            ...tasksList[taskIndex],
            done: !tasksList[taskIndex].done,
        },
        ...tasksList.slice(taskIndex + 1),
    ];

    renderList();
};

const addNewTask = (newTaskContent) => {
    tasksList = [...tasksList, { content: newTaskContent }],

        renderList();

};
const markAllTasksDone = () => {
    tasksList = tasksList.map((task) => ({
        ...task,
        done: true,
    }));
    renderList();
};
const toggleHideTasks = () => {
    hideDoneTasks = !hideDoneTasks;
    renderList();
};

bindDeleteEvents = () => {
    const deleteButtons = document.querySelectorAll(".js-deleteTask");

    deleteButtons.forEach((deleteButton, taskIndex) => {
        deleteButton.addEventListener("click", () => {
            deleteTask(taskIndex);
        });
    });

    const completedButtons = document.querySelectorAll(".js-completed");

    completedButtons.forEach((toggleCompletedButton, taskIndex) => {
        toggleCompletedButton.addEventListener("click", () => {
            toggleTaskCompleted(taskIndex);
        });
    });
}
const renderTasks = () => {
    const taskToHTML = task => ` 
       <li class="
       task__item${task.done && hideDoneTasks ? " task__item--hidden" : ""} js-tasksList
       ">
            <button class="task__button task__button--toggleCompleted js-completed" >${task.done ? "✔" : ""}</button>
            <span class="task__content ${task.done ? "task__content--completed" : ""}"> ${task.content} </span>
            <button class="task__button task__button--delete js-deleteTask">🗑️</button>
            </li>
             `;

    const tasksElement = document.querySelector(".js-tasksList");
    tasksElement.innerHTML = tasksList.map(taskToHTML).join("");
};

const renderButtons = () => {
    const buttonsElement = document.querySelector(".js-buttons");
    if (!tasksList.length) {
        buttonsElement.innerHTML = "";
        return;
    }

    buttonsElement.innerHTML = `
<button class="main__HideAllCompletedTask js-toggleHideCompletedTasks">
${HideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
</button>

<button class="main__HideAllTasks js-markAllCompleted"
${tasks.every(({ done }) => done) ? "disabled" : ""}
> 
Ukończ wszystkie
</button>
`;
};

const bindsButtonsEvents = () => {
    const markAllCompletedButton = document.querySelector(".js-markAllCompleted");

    if (markAllCompletedButton) {
        markAllCompletedButton.addEventListener("click", markAllTasksDone);
    }
    const toggleHideCompletedTasksButton = document.querySelector("js-toggleHideCompletedTasks");

    if (toggleHideCompletedTasksButton) {
        toggleHideCompletedTasksButton.addEventListener("click", toggleHideCompletedTasks);
    } 

};

const renderList = () => {
    renderTasks();
    bindDeleteEvents();
    bindToggleCompletedEvents();
    renderButtons();
    bindsButtonsEvents()
}
const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask")
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {
        addNewTask(newTaskContent);
        newTaskElement.value = "";
    }
    newTaskElement.focus();

};

const init = () => {

    renderList();
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);

};

init();

}
