document.addEventListener('DOMContentLoaded', function () {
const toast = document.getElementById('nve947');
function showToast() {
    toast.classList.remove('show');
    void toast.offsetWidth;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2000);
}
async function copyCmd(){
    const txt = document.getElementById('tpCmd').textContent;
    await navigator.clipboard.writeText(txt);
    showToast();
}
async function copyCoord(id){
    const txt = document.getElementById(id).textContent;
    await navigator.clipboard.writeText(txt);
    showToast();
}
});
