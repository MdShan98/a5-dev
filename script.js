// color changing function//

const colorChange = document.getElementById('color-change');
colorChange.addEventListener('click',function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

//changing the number//
const mainNumber = document.getElementById('main-number').innerText;

const convertedNumber = parseFloat(mainNumber);
const sum = convertedNumber + 1;

    // number cutting

const taskNumber = document.getElementById('task-number').innerText;
const convertedNum = parseFloat(taskNumber);
const minus = convertedNum - 1;

document.getElementById('btn-1').addEventListener('click',function(){
    alert('Board added successfully');
    const massageSection = document.getElementById('massage-Section');
    const currentTime = new Date().toLocaleTimeString();
    const newMassage = document.createElement('p');
    
    newMassage.innerText = 'You have completed the task mobile fix issue at Time: ' +  currentTime;
    newMassage.classList.add('myMsg');   

    massageSection.appendChild(newMassage);
    // number adding//
    document.getElementById('main-number').innerText = sum;

    document.getElementById('task-number').innerText = minus;
});



document.getElementById('btn-2').addEventListener('click',function(){
    alert('Board added successfully');
    const massageSection = document.getElementById('massage-Section');
    const currentTime = new Date().toLocaleTimeString();
    const newMassage = document.createElement('p');
    newMassage.innerText = 'You have completed the task Add New Emoji at Time: ' +  currentTime;
    massageSection.appendChild(newMassage);

    document.getElementById('main-number').innerText = sum;

    document.getElementById('task-number').innerText = minus;
});

document.getElementById('btn-3').addEventListener('click',function(){
    alert('Board added successfully');
    const massageSection = document.getElementById('massage-Section');
    const currentTime = new Date().toLocaleTimeString();
    const newMassage = document.createElement('p');
    newMassage.innerText = 'You have completed the task Add Dark Mode at Time: ' +  currentTime;
    massageSection.appendChild(newMassage);
});
document.getElementById('btn-4').addEventListener('click',function(){
    alert('Board added successfully');
    const massageSection = document.getElementById('massage-Section');
    const currentTime = new Date().toLocaleTimeString();
    const newMassage = document.createElement('p');
    newMassage.innerText = 'You have completed the task Integrate OpenAi API at Time: ' +  currentTime;
    massageSection.appendChild(newMassage);
});
document.getElementById('btn-5').addEventListener('click',function(){
    alert('Board added successfully');
    const massageSection = document.getElementById('massage-Section');
    const currentTime = new Date().toLocaleTimeString();
    const newMassage = document.createElement('p');
    newMassage.innerText = 'You have completed the task Optimize Home Page at Time: ' +  currentTime;
    massageSection.appendChild(newMassage);
});
document.getElementById('btn-6').addEventListener('click',function(){
    alert('Board added successfully');
    const massageSection = document.getElementById('massage-Section');
    const currentTime = new Date().toLocaleTimeString();
    const newMassage = document.createElement('p');
    newMassage.innerText = 'You have completed the task Improve Job Searching at Time: ' +  currentTime;
    massageSection.appendChild(newMassage);
});
//massage clearing function//
document.getElementById('clear').addEventListener('click',function(){
    const passageSection = document.getElementById('massage-Section');
    passageSection.innerText = '';
});
//move to another file//
window.onload = function() {
    const clickDiv = document.getElementById("faq");
    clickDiv.addEventListener("click", function() {
      window.location.href = "faq.html";
    });
  };

// window.onload = function() {
//     const goBack = document.getElementById('backk');
//     goBack.addEventListener("click", function() {
//       window.location.href = "index.html";
//     });
//   };


