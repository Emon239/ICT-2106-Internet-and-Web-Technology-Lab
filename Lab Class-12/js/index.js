function buttonclick1()
{
    alert('Hello');
}
text.src = 'image/image.png';

function Paraclick()
{
    var text=document.getElementById('paraId');
    text.innerHTML='This is second text of Lab'
}
function Imageclick() {
    var text = document.querySelector('#imageId');
    text.src = 'image/image.png'; // corrected folder path
}

function Imageclick()
{
    var text=document.querySelector('#imageId');
    text.src='Image/image.png'
}

