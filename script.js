let BtnProject=document.querySelector('.btn-project');
let BtnAbout=document.querySelector('.btn-about');
let sectionAbout=document.querySelector('.section-about');
let sectionProject=document.querySelector('.section-project')
let BtnCertificate=document.querySelector('.btn-certificate')
let sectionCertificate=document.querySelector('.section-certificate')

BtnProject.addEventListener('click',()=>{
    sectionProject.style.display='inline-block'
    sectionAbout.style.display='none';
    sectionCertificate.style.display='none'
})
BtnAbout.addEventListener('click',()=>{
    sectionProject.style.display='none'
    sectionAbout.style.display='inline-block';
    sectionCertificate.style.display='none'
})
BtnCertificate.addEventListener('click',()=>{
    sectionProject.style.display='none'
    sectionAbout.style.display='none';
    sectionCertificate.style.display='inline-block'
})