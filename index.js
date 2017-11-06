var toEditDiv = 0;
window.onload = function () {
    var input = document.getElementById('inp');
    // var btn = document.getElementById('addBtn');
    input.onchange = function () {
        var value = input.value;
        if (!(value == "")) {
            AddTodo(value);
            showList();
        }
    };
    showList();
};
function showList() {
    var parent = document.getElementById("list");
    parent.innerHTML = "";
    Object.keys(ObjList.lstTodo).forEach(function (key) {
        var item = ObjList.lstTodo[key];
        if (item.status == EnumStatus.active || item.status == EnumStatus.completed) {
            parent.append(createComponent(key, item));
        }
    });
}
function createComponent(obj_id, todo_obj) {
    var main = document.createElement("li");
    main.setAttribute("class", "list-group-item todo-item");
    var chkbox = document.createElement("input");
    chkbox.type = "checkbox";
    chkbox.id = "chkbox";
    chkbox["class"] = "form-control";
    main.setAttribute("class", todo_obj.status + "todo-item");
    var titleElement = document.createElement("span");
    titleElement.style.display = "inline";
    titleElement.setAttribute("id", "title");
    titleElement.innerText = todo_obj.title;
    if (todo_obj.status == EnumStatus.active) {
        titleElement.setAttribute("class", "active");
        chkbox.onclick = function () {
            MarkCoplete(obj_id);
            showList();
        };
    }
    if (todo_obj.status == EnumStatus.completed) {
        chkbox.setAttribute("checked", "true");
        chkbox.setAttribute("disabled", "disabled");
        titleElement.setAttribute("class", "completed");
    }
    main.appendChild(chkbox);
    main.appendChild(titleElement);
    var editButton = document.createElement("input");
    editButton.setAttribute("class", "buttonwa");
    editButton.setAttribute("type", "image");
    editButton.src = "./icons/edit.png";
    editButton.setAttribute("id", "editButton");
    editButton.style.display = "inline";
    // var editLabel = document.createElement("label");
    // editLabel.setAttribute("class", "buttonwa")
    // editLabel.setAttribute("type", "text");
    // editLabel.innerText = "Edit";
    // editLabel.setAttribute("id", "editButton");
    //editLabel.style.display = "inline";
    //Title element after clicking on edit
    var editTitleElement = document.createElement("input");
    editTitleElement.type = "text";
    //  editTitleElement.style.display = "inline";
    // main.appendChild(editLabel);
    main.appendChild(editButton);
    // var UpdateLabel = document.createElement("label");
    // UpdateLabel.type = "text";
    // UpdateLabel.innerText = "Up";
    // UpdateLabel.setAttribute("class", "buttonwa");
    //    UpdateLabel.style.display = "inline";
    var updateButton = document.createElement("input");
    updateButton.type = "image";
    updateButton.src = "./icons/update.png";
    updateButton.setAttribute("class", "buttonwa");
    updateButton.style.display = "inline";
    editButton.onclick = function () {
        main.replaceChild(editTitleElement, titleElement);
        main.replaceChild(updateButton, editButton);
        editTitleElement.setAttribute("placeholder", todo_obj.title);
        updateButton.onclick = function () {
            var editedTitle = editTitleElement.value;
            console.log(editedTitle);
            if (editedTitle == "" || editedTitle.trim() == "") {
                window.alert("Title shouldn't be empty");
                showList();
            }
            else {
                console.log(editedTitle);
                EditTodo(obj_id, editedTitle);
                showList();
            }
        };
    };
    var delButton = document.createElement("input");
    delButton.type = "image";
    delButton.src = "./icons/delete.png";
    // delButton.innerText = "del";
    delButton.setAttribute("class", "buttonwa");
    delButton.setAttribute("id", "delButton");
    //creating delete button
    // var delLabel = document.createElement("label");
    // delLabel.type = "text";
    // delLabel.innerText = "Del"
    // delLabel.setAttribute("class", "buttonwa");
    // delLabel.setAttribute("id", "delButton")
    delButton.onclick = function () {
        MarkDeleted(obj_id);
        showList();
    };
    main.appendChild(delButton);
    return main;
}
