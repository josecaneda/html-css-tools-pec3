window.onload = function() {
        
    document.addEventListener("click", (event) => {
               
        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${event.target.id}?autoplay=1`;

        event.target.parentElement.replaceChild(iframe, event.target);

    });
}
        

       
