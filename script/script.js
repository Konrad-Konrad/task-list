{
    const tasksList = [
        {
            content: "sample task",
            done: true,
        },
        {
            content: "another sample task",
            done: false,
        },
    ];
    const addNewTask = (newTaskContent) => {
        tasksList.push({
            content: newTaskContent,
        });

        renderList();

    };

    const deleteTask = (index) => {
        tasksList.splice(index, 1);
        renderList();
    };

    const toggleTaskCompleted = (index) => {
        tasksList[index].done = !tasksList[index].done;
        renderList();
    }
    bindEvents = () => {
        const deleteButtons = document.querySelectorAll(".js-deleteTask");

        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                deleteTask(index);
            });
        });

        const completedButtons = document.querySelectorAll(".js-completed");

        completedButtons.forEach((toggleCompletedButton, index) => {
            toggleCompletedButton.addEventListener("click", () => {
                toggleTaskCompleted(index);
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
