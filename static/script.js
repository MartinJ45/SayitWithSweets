var L = window.location.href;

function show_dropdown(id) {
    document.getElementById(id).classList.add("show");
}
function hide_dropdown(id) {
    document.getElementById(id).classList.remove("show");
}

// Slideshow code adapted from w3schools: https://www.w3schools.com/howto/howto_js_slideshow.asp 

let slideIndex = 0;
if (L.includes("index.html")) autoslides();

function autoslides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    set_slidename(slideIndex);
    set_slidelink(slideIndex);
    let sec = 5000; // 5 seconds
    timeoutID = setTimeout(autoslides, sec);
}

function resetTimeout() {
    clearTimeout(timeoutID);
    let sec = 5000;
    timeoutID = setTimeout(autoslides, sec);
}

function currSlide(n) {
    slideIndex = n;
    showslides(slideidx = n);
    resetTimeout();
}

function showslides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n < slides.length) slideidx = n;
    if (n < 1) slideidx = slides.length;
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideidx - 1].style.display = "block";
    dots[slideidx - 1].className += " active";
    set_slidename(slideidx);
    set_slidelink(slideidx);
}

function set_slidename(idx) {
    let heading = document.getElementById("slidename");
    if (idx == 1) heading.innerText = "Easter";
    if (idx == 2) heading.innerText = "Baby Shower";
    if (idx == 3) heading.innerText = "Penn State";
}
function set_slidelink(idx) {
    let link = document.getElementById("slideshowlink");
    if (idx == 1) link.href = "cookieorder.html?cookie=easter";
    if (idx == 2) link.href = "cookieorder.html?cookie=babyshower";
    if (idx == 3) link.href = "cookieorder.html?cookie=pennstate";
}

// end slideshow code

function showbouquet(theme) {
    let custom = document.getElementById("customcupcakedesign");
    if (theme == "other") custom.classList.add("show");
    else custom.classList.remove("show");

    if (theme == "" || theme == "other") theme = "pink";
    let img = document.getElementById("productimg");
    img.src = "../static/cupcakebouquet_" + theme + ".jpg";
}
function showcupcakedesign(design) {
    let custom = document.getElementById("customcupcakedesign");
    let cost = document.getElementById("productcost");
    if (design == "other") custom.classList.add("show");
    else custom.classList.remove("show");

    if (design == "unicorn" || design == "flower" || design == "sesamestreet") cost.innerHTML = "$3.00 each";
    if (design == "cow" || design == "llama" || design == "ocean") cost.innerHTML = "$2.50 each"; 
    if (design == "gamer" || design == "minecraft" || design == "minion" || 
        design == "minnie" || design == "pawprint" || design == "shell" || 
        design == "superher") cost.innerHTML = "$2.25 each";
    if (design == "" || design == "other") cost.innerHTML = "$2.00+ each";
    if (design == "" || design == "other") design = "unicorn";

    let img = document.getElementById("productimg");
    img.src = "../static/cupcakedesign_" + design + ".jpg";
}
function showcupcakecreation(design) {
    let custom = document.getElementById("customcupcakedesign");
    let cost = document.getElementById("productcost");
    if (design == "other") custom.classList.add("show");
    else custom.classList.remove("show");

    if (design == "tractor") cost.innerHTML = "$80.00";
    if (design == "stroller") cost.innerHTML = "$76.00";
    if (design == "monkeytree") cost.innerHTML = "$66.00";
    if (design == "dress") cost.innerHTML = "$60.00";
    if (design == "firstcomunion") cost.innerHTML = "$56.00";
    if (design == "horse" || design == "number1") cost.innerHTML = "$54.00";
    if (design == "babygirl" || design == "dog") cost.innerHTML = "$52.00";
    if (design == "butterfly") cost.innerHTML = "$50.00";
    if (design == "baseball" || design == "bulldozer" || design == "hotairballoon") cost.innerHTML = "$48.00";
    if (design == "sloth") cost.innerHTML = "$44.00";
    if (design == "golf") cost.innerHTML = "$40.00";
    if (design == "bouquet" || design == "dinosaur") cost.innerHTML = "$38.00";
    if (design == "happybirthday") cost.innerHTML = "$36.00";
    if (design == "hungryhungrycaterpillar") cost.innerHTML = "$30.00";
    if (design == "" || design == "other") cost.innerHTML = "$2.00*";
    
    if (design == "" || design == "other") design = "dog";
    let img = document.getElementById("productimg");
    img.src = "../static/cupcakecreation_" + design + ".jpg";
}
if (L.includes("cake=anniversary")) showproduct("cake", "Anniversary Cake", "$90.00", "anniversary");
if (L.includes("cake=ariel")) showproduct("cake", "Ariel Cake", "$40.00", "ariel");
if (L.includes("cake=babyshower")) showproduct("cake", "Baby Shower Cake", "$60.00", "babyshower");
if (L.includes("cake=batman")) showproduct("cake", "Batman Cake", "$25.00", "batman");
if (L.includes("cake=cat")) showproduct("cake", "Cat Cake", "$25.00", "cat");
if (L.includes("cake=cat2")) showproduct("cake", "Orange Cat Cake", "$25.00", "cat2");
if (L.includes("cake=dog")) showproduct("cake", "Dog Cake", "$35.00", "dog");
if (L.includes("cake=elmo")) showproduct("cake", "Elmo Cake", "$30.00", "elmo");
if (L.includes("cake=harrypotter")) showproduct("cake", "Harry Potter Cake", "$40.00", "harrypotter");
if (L.includes("cake=pennstate")) showproduct("cake", "Penn State Cake", "$25.00", "pennstate");
if (L.includes("cake=princess")) showproduct("cake", "Princess Cake", "$30.00", "princess");

if (L.includes("cookie=standard")) showproduct("cookie", "Cookies", "$1.50 each", "standard");
if (L.includes("cookie=baby")) showproduct("cookie", "Baby Cookies", "$1.50 each", "baby");
if (L.includes("cookie=babyshower")) showproduct("cookie", "Baby Shower Cookies", "$1.50 each", "babyshower");
if (L.includes("cookie=baseball")) showproduct("cookie", "Baseball Cookies", "$1.50 each", "baseball");
if (L.includes("cookie=easter")) showproduct("cookie", "Easter Cookies", "$1.50 each", "easter");
if (L.includes("cookie=flower")) showproduct("cookie", "Flower Cookies", "$1.50 each", "flower");
if (L.includes("cookie=mermaid")) showproduct("cookie", "Mermaid Cookies", "$1.50 each", "mermaid");
if (L.includes("cookie=pennstate")) showproduct("cookie", "Penn State Cookies", "$1.50 each", "pennstate");
if (L.includes("cookie=space")) showproduct("cookie", "Space Cookies", "$1.50 each", "space");
if (L.includes("cookie=superhero")) showproduct("cookie", "Superhero Cookies", "$1.50 each", "superhero");
if (L.includes("cookie=unicorn")) showproduct("cookie", "Unicorn Cookies", "$1.50 each", "unicorn");
if (L.includes("cookie=wedding")) showproduct("cookie", "Wedding Cookies", "$1.50 each", "wedding");
function showproduct(product, productname, productcost, design) {
    let name = document.getElementById("productname");
    let cost = document.getElementById("productcost");
    let img = document.getElementById("productimg");
    name.innerHTML = productname;
    cost.innerHTML = productcost;
    img.src = "../static/" + product + design + ".jpg";
}

function increasenum() {
    let num = document.getElementById("itemnum").textContent;
    num = parseInt(num);
    if (num < 99) num += 1;
    document.getElementById("itemnum").textContent = num;
}
function decreasenum() {
    let num = document.getElementById("itemnum").textContent;
    num = parseInt(num);
    if (num > 1) num -= 1;
    document.getElementById("itemnum").textContent = num;
}

function validateitem() {
    let orderselects = document.getElementsByClassName("select");
    for (i = 0; i < orderselects.length; i++)
    {
        if (!orderselects[i].checkValidity()) return;
    }
    if (L.includes("bouquetorder.html") || L.includes("cupcakedesign.html") || L.includes("cupcakecreation.html"))
    {
        let custom = document.getElementById("customcupcakedesign");
        if (custom.className == "customcupcakedesign show")
        {
            if (!document.getElementById("customtextarea").checkValidity()) return;
        }
    }
    additem();
}

function additem() {
    let num = document.getElementById("itemnum").textContent;
    let name = document.getElementById("productname").textContent;
    alert("Order submitted successfully!");
    window.location.assign("index.html");
}

function submitOrder() {
    let batterSelected = document.querySelector('input[name="batter"]:checked');
    let frostingSelected = document.querySelector('input[name="frosting"]:checked');
    let toppingSelected = document.querySelectorAll('input[name="topping"]:checked');
    
    if (batterSelected && frostingSelected && toppingSelected.length > 0) {
        alert("Order submitted successfully!");
        window.location.assign("index.html");
    } else {
        alert("Please select an option for each category.");
    }
}

if (L.includes("locations.html")) getHours();
function getHours() {
    let day = new Date();
    let d = day.getDay();
    let h = day.getHours();
    let m = day.getMinutes();
    console.log(h);
    for (i = 0; i < 7; i++)
    {
        let row = document.getElementById(i);
        if (i == d) 
        {
            if (i == 0)
            {
                row.classList.remove("open");
                row.classList.add("closed");
            }
            else if (i == 1 && 10 <= h && h < 17)
            {
                row.classList.remove("closed");
                row.classList.add("open");
            }
            else if (i == 1)
            {
                console.log("test");
                row.classList.remove("open");
                row.classList.add("closed");
            }
            else if ((i == 2 || i == 3 || i == 4 || i == 5) && 10 <= h && h <= 16 && m <= 30)
            {
                row.classList.remove("closed");
                row.classList.add("open");
            }
            else if (i == 2 || i == 3 || i == 4 || i == 5)
            {
                row.classList.remove("open");
                row.classList.add("closed");
            }
            else if (i == 6 && 10 <= h && h > 12)
            {
                row.classList.remove("closed");
                row.classList.add("open");
            }
            else if (i == 6)
            {
                row.classList.remove("open");
                row.classList.add("closed");
            }
        }
        else 
        {
            row.classList.remove("open");
            row.classList.remove("closed");
        }
    }
}

if (L.includes("about.html")) playbackvideo();
function playbackvideo() {
    let video = document.getElementById("cupcakevideo");
    video.playbackRate = 0.75;
}
