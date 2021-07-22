const links = [
    {
        label: "Week 1 Assignments",
        url: "w01/index.html"
    },
    {
        label: "Week 2 Assignments",
        url: "w02/index.html"
    },
    {
        label: "Week 3 Assignments",
        url: "w03/index.html"
    },
    {
        label: "Week 4 Assignments",
        url: "w04/index.html"
    },
    {
        label: "Week 5 Assignments",
        url: "w05/index.html"
    },
    {
        label: "Week 6 - ToDo App",
        url: "w06/todo/toDo2.html"
    },
    {
        label: "Week 7 Assignments",
        url: "w07/index.html"
    },
    {
        label: "Week 8 Assignments",
        url: "w08/index.html"
    },
    {
        label: "Week 9 Assignments",
        url: "w09/index.html"
    },
    {
        label: "Week 10 Assignments",
        url: "w10/index.html"
    },
    {
        label: "Week 11 Assignments",
        url: "w11/index.html"
    },
    {
        label: "Final Project",
        url: "final-project/index.html"
    }
]


function createListOfLinks(){

    // let ol = document.getElementById("assignmentsList");
    
    links.forEach(link => {
        var li = document.createElement("li");
        
        li.setAttribute('class', "assignmentItem");

        // document.getElementById('assignmentsList').appendChild(li);
        document.querySelector("ol.assignmentsList").appendChild(li);

        var a = document.createElement("a");
        a.setAttribute('class', "assignmentLink");
        a.setAttribute('href', link.url.toString());
        a.innerHTML = link.label.toString();
        li.appendChild(a);
});

}

createListOfLinks();