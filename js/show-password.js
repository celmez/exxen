const password = document.getElementById('password');
const btn = document.querySelector('.exxen-show-btn');

btn.addEventListener('click', () =>
{
    if( password.type === "password" )
    {
        password.type = "text";
        btn.classList.toggle('exxen-hide-btn');
    }

    else
    {
        password.type = "password";
        btn.classList.remove('exxen-hide-btn');
    }
});