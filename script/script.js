{
    const tasksList = [
        {
            content: "sample task",
            done: false,
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
            <li>
            ${task.content}
            </li>
             `;
        } 
        document.querySelector(".js-tasksList").innerHTML  = htmlString
    };

    const init = () => {
        renderList();

    };
    init();

}
