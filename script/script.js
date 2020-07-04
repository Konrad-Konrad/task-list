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
            ${task.content}
            </li>
             `;
        }
        document.querySelector(".js-tasksList").innerHTML = htmlString;
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

        form.addEventListener("sumbit", onFormSubmit);

    };

    init();

}
