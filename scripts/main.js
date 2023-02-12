const image = document.querySelector("img");

image.onclick = () => {
    if (image.getAttribute("src") === "images/asik-veysel.jpg") {
        image.setAttribute("src", "images/asik-veysel2.jpg");
        image.setAttribute("alt", "Aşık Veysel");
    } else {
        image.setAttribute("src", "images/asik-veysel.jpg");
        image.setAttribute("alt", "Bir ağacın önünde elinde bağlamasıyla oturan Aşık Veysel");
    }
};