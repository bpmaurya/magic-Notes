console.log("welcome in notebook app");
//if user a  add notes ,add it in to local storage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtext = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = "";
    console.log(notesObj);

    showNotes();

});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);

    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">

                   <div class="card-body">
                    <h5 class="card-title">Note ${index +1}</h5>
                    <p class="card-text">${element}</p>
                    <button href="#" class="btn btn-primary">Delete Note</button>
                   </div>
                </div>`;
    });
    let noteElm = document.getElementById('notes');
    if(notes.length == 0){
        noteElm.innerHTML = html;
    }
}