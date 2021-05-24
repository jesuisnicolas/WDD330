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
        label: "Week  Assignments",
        url: "w04/index.html"
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