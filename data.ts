// enum of status type
 var   EnumStatus = {
     active: "active",
     completed: "completed",
     deleted: "deleted"
 }

// todo item property
// title status
//  id given by the backend
 interface Iitem {
    title: string;
    status : string;
    id?: number;
}


// data class with
// cretate new
// Add Update Delete Edit
class Data {

    public lstTodo: Iitem[];

    // clear the list when a new Data Came
    constructor() {
        this.lstTodo = [];
    }

    // simply push the Iitem
    Add(val: Iitem) {
        this.lstTodo.push(val);
    }


    Display() {
        this.lstTodo.forEach(function (item: Iitem) {
            if (item.status == EnumStatus.active || item.status == EnumStatus.deleted)
                console.log(item);
        })
    }

    // Set the title values for a given ID
    Update(id: number, val: string) {
        this.lstTodo[id].title = val;
    }

    Del(id: number) {
        this.lstTodo[id].status = EnumStatus.deleted;
    }
}

var ObjList = new Data();

function AddTodo(val: string) {
console.log("AddTodo Call");
   ObjList.Add( {
       title : val,
       status  : EnumStatus.active
   });
}


function ShowTodo() {
    ObjList.lstTodo.forEach(function (item: Iitem) {
        if (item.status == EnumStatus.active || item.status == EnumStatus.deleted)
            console.log(item);
    })
}



function EditTodo(id : number, val : string){
    ObjList.lstTodo[id].title = val;
}

function MarkCoplete(id: number) {
    ObjList.lstTodo[id].status = EnumStatus.completed;
}

function  MarkDeleted(id: number) {
    ObjList.lstTodo[id].status = EnumStatus.deleted;
}





ShowTodo();
