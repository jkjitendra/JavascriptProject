
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view


//Event Listener on Add Book button 
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", addBook);

// Add method to add Books to local storage 

function addBook(){
    
    const book = document.getElementById("book");

    let addName = book.addName.value;
    let addAuthor = book.addAuthor.value;
    let addSBIN = document.getElementById("addSBIN");
    let addPublisher = document.getElementById("addPublisher");
    let addPrice = document.getElementById("addPrice");
    let addYOP = document.getElementById("addYOP");

    let addBiography = document.getElementById("addBiography");
    let addCooking = document.getElementById("addCooking");
    let addFantasy = document.getElementById("addFantasy");
    let addFiction = document.getElementById("addFiction");
    let addHistorical = document.getElementById("addHistorical");
    let addMystery = document.getElementById("addMystery");
    let addPoetry = document.getElementById("addPoetry");
    let addRomance = document.getElementById("addRomance");
    let addProgramming = document.getElementById("addProgramming");
    
    let addType;

    //Selecting addType from selected radio box
    if (addBiography.checked) {
        addType = addBiography.value;
    }
    else if (addCooking.checked) {
        addType = addCooking.value;
    }
    else if (addFantasy.checked) {
        addType = addFantasy.value;
    }
    else if (addFiction.checked) {
        addType = addFiction.value;
    }
    else if (addHistorical.checked) {
        addType = addHistorical.value;
    }
    else if (addMystery.checked) {
        addType = addMystery.value;
    }
    else if (addPoetry.checked) {
        addType = addPoetry.value;
    }
    else if (addRomance.checked) {
        addType = addRomance.value;
    }
    else if (addProgramming.checked) {
        addType = addProgramming.value;
    }
    

    let books = localStorage.getItem("books");
    
    if (books == null) {
       booksObj = [];
    } 
    else {
        booksObj = JSON.parse(books);
    }

  //values taken from html form

    let myObj = {
        name: addName,
        author: addAuthor,
        sbin: addSBIN,
        publisher: addPublisher,
        price: addPrice,
        yop: addYOP,
        type: addType
    }
    
    booksObj.push(myObj);
    localStorage.setItem("books", JSON.stringify(booksObj));
    
    alert("Book Stored Successfully");
    // Reset form fields
    book.reset();
       
  
//   showMsg();
}
   
  
  






//showMsg Method to show success or failure method

// function showMsg(type, displayMessage) {
//     let message = document.getElementById('message');
//     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
//                             <strong>Messge:</strong> ${displayMessage}
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                             <span aria-hidden="true">×</span>
//                             </button>
//                         </div>`;
//     setTimeout(function () {
//         message.innerHTML = '';
//     }, 4000);
// }


//validate Method to validate form inputs

// function validate(book){
//     if (book.name.length < 3 && book.author.length < 3) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

