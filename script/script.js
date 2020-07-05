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

    const renderList = () => {
        let htmlString = "";

        for (const task of tasksList) {
            htmlString += `
            <li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
            <button class="js-completed">completed</button>
            <button class="js-deleteTask">delete</button>
            ${task.content}
            </li>
             `;
        }
        document.querySelector(".js-tasksList").innerHTML = htmlString;
   
        const deleteButtons = document.querySelectorAll(".js-deleteTask");

        deleteButtons.forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", () => {
            tasksList.splice(index, 1);
            renderList();
        });
    });
};


const completedButtons = document.querySelectorAll(".js-completed");

completedButtons.forEach((toggleCompletedButton, index) => {
    toggleCompletedButton.addEventListener("click", () => {
    toggleTaskCompleted(index);
});
});

const toggleTaskCompleted = (index) => {
    tasksList[index].done = !tasksList[index].done;
    renderList();
};


    const addNewTask = (newTaskContent) => {
        tasksList.push({
            content: newTaskContent,
        });

        renderList();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {

        renderList();
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();

}
