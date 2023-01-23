const btn = document.getElementById('clickBtn')
const error = document.getElementById('error')

btn.addEventListener('click', function(){
    console.log('clicked button');
    error.innerHTML='error button dosent work'
});