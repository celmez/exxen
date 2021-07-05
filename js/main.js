const select = document.getElementById('select');
const tr = document.getElementById('tr');
const en = document.getElementById('en');
const ar = document.getElementById('ar');
const es = document.getElementById('es');

select.addEventListener('click', () =>
{
    tr.innerHTML = 'Türkçe';
    en.innerHTML = 'English';
    ar.innerHTML = 'العربية';
    es.innerHTML = 'Español';
});