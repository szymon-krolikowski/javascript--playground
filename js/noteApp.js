const notePage = document.querySelector(".notePage");
const addNotePage = document.querySelector(".addNotePage");
const buttonAddNewNote = document.querySelector(".topSection__buttonAddNewNote");
const buttonAddNote = document.querySelector(".buttonAddNote");
const buttonBack = document.querySelector(".buttonBack");
const noteSectionArticleLeft = document.querySelector(".noteSectionArticleLeft");
const noteSectionArticleRight = document.querySelector(".noteSectionArticleRight");
const titleNoteInput = document.querySelector(".titleInput");
const textNoteArea = document.querySelector(".textArea");
const dateParagraph = document.querySelectorAll(".paragraph--date");
const searchInput = document.querySelector(".searchInput");

let chooseSection = true;

const searchYourNote = (keypress) => {
    const headingText = keypress.target.value;
    const headingTwoElements = document.querySelectorAll("h2");

    headingTwoElements.forEach(heading => {
        const headingTextContent = heading.textContent.toLowerCase()

        if(headingTextContent.indexOf(headingText) !== -1) {
            heading.parentNode.style.display = "block";
        } else {
            heading.parentNode.style.display = "none";
        };
    });
};

const lookNote = () => {
    const notes = document.querySelectorAll(".note");

    notes.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("note100")
        })
    })
}

const getDate = () => {
    dateParagraph.forEach(paragraph => {
        const currentDate = new Date();
        const currentDateNumber = currentDate.getDate();
        const currentDay = currentDate.getDay();
        const currentMonth = currentDate.getMonth();

        const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];;
        const monthName = ["January", "February", "March", "April", "June", "July", "August", "September", "Octover", "November", "December"];

        paragraph.textContent = `${dayName[currentDay]} ${currentDateNumber}, ${monthName[currentMonth]}`;
    })
};

const addNewNote = () => {
    notePage.classList.toggle("toggleDisplayNone");
    addNotePage.classList.toggle("toggleDisplayBlock");

    if(chooseSection === true) {
        const newNote = document.createElement("div");
        newNote.classList.add("note");
        noteSectionArticleLeft.appendChild(newNote);

        const title = document.createElement("h2");
        title.classList.add("headingTwo");
        title.textContent = titleNoteInput.value;

        const textNote = document.createElement("p");
        textNote.classList.add("paragraph");
        textNote.textContent = textNoteArea.value;

        newNote.appendChild(title);
        newNote.appendChild(textNote);

        const textAreaLenght = textNote.textContent.length;
        
        if(textAreaLenght <= 30) {
            newNote.classList.add("noteLenght30");
        } else if (textAreaLenght > 30 && textAreaLenght < 40) {
            newNote.classList.add("noteLenght40");
        } else if (textAreaLenght > 40 && textAreaLenght < 50) {
            newNote.classList.add("noteLenght50");
        } else if (textAreaLenght > 50 && textAreaLenght < 60) {
            newNote.classList.add("noteLenght60");
        } else if (textAreaLenght > 60 && textAreaLenght < 70) {
            newNote.classList.add("noteLenght70");
        } else if (textAreaLenght > 70 && textAreaLenght < 80) {
            newNote.classList.add("noteLenght80");
        } else if (textAreaLenght > 80 && textAreaLenght < 90) {
            newNote.classList.add("noteLenght90");
        } else if (textAreaLenght > 100 && textAreaLenght < 120) {
            newNote.classList.add("noteLenght100");
        } else if (textAreaLenght > 120) {
            newNote.classList.add("noteLenght120");
        };

        textNoteArea.value = "";
        titleNoteInput.value = "";
        chooseSection = false;

    } else {
        const newNote = document.createElement("div");
        newNote.classList.add("note");
        noteSectionArticleRight.appendChild(newNote);

        const title = document.createElement("h2");
        title.classList.add("headingTwo");
        title.textContent = titleNoteInput.value;

        const textNote = document.createElement("p");
        textNote.classList.add("paragraph");
        textNote.textContent = textNoteArea.value;

        newNote.appendChild(title);
        newNote.appendChild(textNote);

        const textAreaLenght = textNote.textContent.length
        
        if(textAreaLenght <= 30) {
            newNote.classList.add("noteLenght120");
        } else if (textAreaLenght > 30 && textAreaLenght < 40) {
            newNote.classList.add("noteLenght100");
        } else if (textAreaLenght > 40 && textAreaLenght < 50) {
            newNote.classList.add("noteLenght90");
        } else if (textAreaLenght > 50 && textAreaLenght < 60) {
            newNote.classList.add("noteLenght80");
        } else if (textAreaLenght > 60 && textAreaLenght < 70) {
            newNote.classList.add("noteLenght70");
        } else if (textAreaLenght > 70 && textAreaLenght < 80) {
            newNote.classList.add("noteLenght60");
        } else if (textAreaLenght > 80 && textAreaLenght < 90) {
            newNote.classList.add("noteLenght50");
        } else if (textAreaLenght > 100 && textAreaLenght < 120) {
            newNote.classList.add("noteLenght40");
        } else if (textAreaLenght > 120) {
            newNote.classList.add("noteLenght30");
        };

        textNoteArea.value = "";
        titleNoteInput.value = "";
        chooseSection = true;
    };
};

const toggleDisplayPage = () => {
    notePage.classList.toggle("toggleDisplayNone");
    addNotePage.classList.toggle("toggleDisplayBlock");
}


buttonAddNewNote.addEventListener("click", toggleDisplayPage);
buttonAddNote.addEventListener("click", addNewNote);
buttonBack.addEventListener("click", toggleDisplayPage);
searchInput.addEventListener("keyup", searchYourNote);
window.addEventListener("click", lookNote)

getDate();
