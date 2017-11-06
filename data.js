// enum of status type
var EnumStatus = {
    active: "active",
    completed: "completed",
    deleted: "deleted"
};
// data class with
// cretate new
// Add Update Delete Edit
var Data = /** @class */ (function () {
    // clear the list when a new Data Came
    function Data() {
        this.lstTodo = [];
    }
    // simply push the Iitem
    Data.prototype.Add = function (val) {
        this.lstTodo.push(val);
    };
    Data.prototype.Display = function () {
        this.lstTodo.forEach(function (item) {
            if (item.status == EnumStatus.active || item.status == EnumStatus.deleted)
                console.log(item);
        });
    };
    // Set the title values for a given ID
    Data.prototype.Update = function (id, val) {
        this.lstTodo[id].title = val;
    };
    Data.prototype.Del = function (id) {
        this.lstTodo[id].status = EnumStatus.deleted;
    };
    return Data;
}());
var ObjList = new Data();
function AddTodo(val) {
    console.log("AddTodo Call");
    ObjList.Add({
        title: val,
        status: EnumStatus.active
    });
}
function ShowTodo() {
    ObjList.lstTodo.forEach(function (item) {
        if (item.status == EnumStatus.active || item.status == EnumStatus.deleted)
            console.log(item);
    });
}
function EditTodo(id, val) {
    ObjList.lstTodo[id].title = val;
}
function MarkCoplete(id) {
    ObjList.lstTodo[id].status = EnumStatus.completed;
}
function MarkDeleted(id) {
    ObjList.lstTodo[id].status = EnumStatus.deleted;
}
ShowTodo();
