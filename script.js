document.getElementById('btn-1').addEventListener('click',function(){
    alert('Board added successfully');
    const massageSection = document.getElementById('massage-Section');
    const currentTime = new Date().toLocaleTimeString();
    const newMassage = document.createElement('p');
    
    newMassage.innerText = 'You have completed the task mobile fix issue at Time: ' +  currentTime;
    newMassage.classList.add('myMsg');

    massageSection.appendChild(newMassage);
});

document.getElementById('btn-2').addEventListener('click',function(){
    alert('Board added successfully');
    const massageSection = document.getElementById('massage-Section');
    const currentTime = new Date().toLocaleTimeString();
    const newMassage = document.createElement('p');
    newMassage.innerText = 'You have completed the task Add New Emoji at Time: ' +  currentTime;
    massageSection.appendChild(newMassage);
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

// document.getElementById('clear').addEventListener('click',function(){
    
// });


