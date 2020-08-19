//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    // console.log(question);

    const btn = question.querySelector(".question-btn");
    // console.log(btn);

    btn.addEventListener("click", function(){

        questions.forEach(function(items){
            if(items !== question){
                items.classList.remove("show-text");
            }
        })


        question.classList.toggle("show-text");
    })
})








// traversing the dom
// const btnsQuestion = document.querySelectorAll(".question-btn");

// btnsQuestion.forEach(function(btn){
//     btn.addEventListener("click", function(el){  
//         let question = el.target.parentElement.parentElement.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });

