var currentDate = document.getElementById('btn')

currentDate.addEventListener('click' , showCurrentDate)

function showCurrentDate(){
    document.getElementById('date').value = new Date()
    alert(new Date())
}