id('tom').addEventListener('mouseover', e => {
    id('tom').style.opacity = '1';
    id('cursor').style.opacity = '0';
    document.body.style.backgroundColor = "black";
})
id('tom').addEventListener('mouseout', e => {
    id('tom').style.opacity = '0';
    id('cursor').style.opacity = '1';
    document.body.style.backgroundColor = "white";

})

