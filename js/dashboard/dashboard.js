"use strict";
var courses = [
    {
        image: "src.jpg",
        title: "Acceleration",
        subject: "Physics",
        grade: 7,
        additional_grade: 2,
        units: 4,
        lessons: 18,
        classes: [
            "Mr. Frank's Class B",
            "Mr. Frank's Class A",
            "Mr. Frank's Class C"
        ],
        students: 50,
        start_date: "21-Jan-2020",
        end_date: "21-Aug-2020",
        isfavourite: true,
        isexpired: false,
        iswatch: true,
        iscalender: true,
        isgraded: true,
        isreported: true
    },
    {
        image: "src.jpg",
        title: "Displacement, Velocity and Speed",
        subject: "Physics 2",
        grade: 6,
        additional_grade: 3,
        units: 4,
        lessons: 18,
        classes: [],
        students: null,
        start_date: null,
        end_date: null,
        isfavourite: true,
        isexpired: false,
        iswatch: true,
        iscalender: true,
        isgraded: true,
        isreported: true
    }
];
// console.log(courses);
var inner_container = document.getElementsByClassName("inner-container")[0];
console.log(inner_container);
// for (let i = 0; i < courses.length; i++) {
//     const card = document.createElement('div')
//     card.classList.add('card')
//     card.innerHTML = courses[i].title
//     const image = document.createElement('img')
//     image.setAttribute('src', courses[i].image)
//     card.appendChild(image)
// }
// Interaction in dashboard
var toggle = document.getElementsByClassName("navbar-toggler")[0];
console.log(toggle);
var navbar = document.getElementsByClassName("navbar-nav")[0];
console.log(navbar);
toggle.addEventListener("click", function () {
    console.log("card-title");
    navbar.classList.toggle("hide");
});
function togglemuted(x) {
    x.classList.toggle("image-muted");
}
function togglefavourite(x) {
    x.classList.toggle("unfavourite");
}
