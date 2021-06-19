

showBooks();

let showbook = document.getElementById("bookShowClick");
showbook.addEventListener("click", showBooks);

// Implement the showBook Function
function showBooks() {
    let books = localStorage.getItem("books");
    if (books == null) {
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books);
    }

    let html = "";
    booksObj.forEach(function (element, index) {
        html += `
        <tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td>${element.sbin}</td>
            <td>${element.publisher}</td>
            <td>${element.yop}</td>
            <td>${element.price}</td>

            <td><button id="${index}" onclick="editBook(this.id)" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Edit Book</button></td>
            <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-danger">Delete Book</button></td>
        </tr>
        `;

    });

    let tableElm = document.getElementById("tableBody");
    if (booksObj.length != 0) {
        tableElm.innerHTML = html;
    }
    else {
        tableElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function editBook(index) {

    let html1 = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Book Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <form id= "formData">
                <fieldset class="form-group">
                    <div class="form-group row">
                        <label for="addName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="addName" placeholder="Book Name" >
                        </div>
                        </div>
                        <div class="form-group row">
                            <label for="addAuthor" class="col-sm-2 col-form-label">Author</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="addAuthor" placeholder="Author" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="addSBIN" class="col-sm-2 col-form-label">SBIN</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="addSBIN" placeholder="SBIN" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="addPublisher" class="col-sm-2 col-form-label">Publisher</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="addPublisher" placeholder="Publisher" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="addYOP" class="col-sm-2 col-form-label">Year of Publish</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="addYOP" placeholder="Year of Publish" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="addPrice" class="col-sm-2 col-form-label">Price</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="addPrice" placeholder="Price" >
                            </div>
                        </div>
                        

                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Type</legend>
                            <div class="col-sm-10">

                            <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addBiography"
                                value="biography">
                            <label class="form-check-label" for="addBiography">
                                Biography
                            </label>
                        </div>
                        <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addCooking"
                                value="cooking">
                            <label class="form-check-label" for="addCooking">
                                Cooking
                            </label>
                        </div>
                        <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addFantasy"
                                value="fantasy">
                            <label class="form-check-label" for="addFantasy">
                                Fantasy
                            </label>
                        </div>
                        <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addFiction"
                                value="fiction">
                            <label class="form-check-label" for="addFiction">
                                Fiction
                            </label>
                        </div>
                        <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addHistorical"
                                value="historical">
                            <label class="form-check-label" for="addHistorical">
                                Historical
                            </label>
                        </div>
                        <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addMystery"
                                value="mystery">
                            <label class="form-check-label" for="addMystery">
                                Mystery
                            </label>
                        </div>
                        <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addPoetry" value="poetry">
                            <label class="form-check-label" for="addPoetry">
                                Poetry
                            </label>
                        </div>
                        <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addRomance"
                                value="romance">
                            <label class="form-check-label" for="addRomance">
                                Romance
                            </label>
                        </div>
                        <div class="form-check col-sm-3">
                            <input class="form-check-input" type="radio" name="type" id="addProgramming"
                                value="programming">
                            <label class="form-check-label" for="addProgramming">
                                Technical
                            </label>
                        </div>

                        </div>
                    </div>
                </fieldset>
            </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary " data-dismiss="modal" id="${index}" onclick="updateBook(this.id)" >Save changes</button>
            </div>
            </div>
        </div>
    </div> `;

    let modalcreate = document.getElementById("modalcreate");
    modalcreate.innerHTML = html1;

    let books = localStorage.getItem("books");
    booksObj = JSON.parse(books);
    // console.log(booksObj);
    selectedRow = booksObj[index];
    // console.log(selectedRow);

    document.getElementById("addName").value = selectedRow.name;
    document.getElementById("addAuthor").value = selectedRow.author;
    document.getElementById("addSBIN").value = selectedRow.sbin;
    document.getElementById("addPublisher").value = selectedRow.publisher;
    document.getElementById("addYOP").value = selectedRow.yop;
    document.getElementById("addPrice").value = selectedRow.price;

    var val = selectedRow.type;
    //getting all radio buttons
    var radio = document.getElementsByName("type");
    //Iterating to all radio buttons
    for (let i = 0; i < radio.length; i++) {
        //checks which radio button matches the criteria
        if (radio[i].value == val) {
            //checks that radio button
            radio[i].checked = true;
        }
    }



}



function updateBook(index) {


    // Get the existing data
    var existingBook = JSON.parse(localStorage.getItem("books") || "[]");

    // get values from form
    existingBook[index].name = document.getElementById("addName").value;
    existingBook[index].author = document.getElementById("addAuthor").value;
    existingBook[index].sbin = document.getElementById("addSBIN").value;
    existingBook[index].publisher = document.getElementById("addPublisher").value;
    existingBook[index].yop = document.getElementById("addYOP").value;
    existingBook[index].price = document.getElementById("addPrice").value;



        
    if (addBiography.checked) {
        existingBook[index].type = document.getElementById("addBiography").value;
    }
    else if (addCooking.checked) {
        existingBook[index].type = document.getElementById("addCooking").value;
    }
    else if (addFantasy.checked) {
        existingBook[index].type = document.getElementById("addFantasy").value;
    }
    else if (addFiction.checked) {
        existingBook[index].type = document.getElementById("addFiction").value;
    }
    else if (addHistorical.checked) {
        existingBook[index].type = document.getElementById("addHistorical").value;
    }
    else if (addMystery.checked) {
        existingBook[index].type = document.getElementById("addMystery").value;
    }
    else if (addPoetry.checked) {
        existingBook[index].type = document.getElementById("addPoetry").value;
    }
    else if (addRomance.checked) {
        existingBook[index].type = document.getElementById("addRomance").value;
    }
    else if (addProgramming.checked) {
        existingBook[index].type = document.getElementById("addProgramming").value;
    }


    // Save back to localStorage
    localStorage.setItem('books', JSON.stringify(existingBook));
    alert("You have successfully updated book details");

    // // localStorage.setItem()
    showBooks();
}

function deleteBook(index) {
    //   console.log("I am deleting", index);
    alert("Are you sure you want to delete this book");
    let books = localStorage.getItem("books");
    if (books == null) {
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books);
    }

    booksObj.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(booksObj));
    showBooks();
}