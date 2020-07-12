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


bindEvents = () => {
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
const renderList = () => {
    let htmlString = "";

    for (const task of tasksList) {
        htmlString += `
            <li class="task__item">
            <button class="task__button task__button--toggleCompleted js-completed" >${task.done ? "✔" : ""}</button>
        
            <span class="task__content ${task.done ? "task__content--completed" : ""}"> ${task.content} </span>
            <button class="task__button task__button--delete js-deleteTask">🗑️</button>
            </li>
             `;
    }
    document.querySelector(".js-tasksList").innerHTML = htmlString;

    bindEvents();
};

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
