window.onload = function() {
    const externaLinks = document.querySelector('.box-external-links');
    externaLinks.addEventListener("click", (event)=>{
        console.log(event);
        event.preventDefault();
        if (event.target.className === 'film-poster') {
            let iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${event.target.id}?autoplay=1`;
            iframe.setAttribute('allow', 'accelerometer');
            iframe.setAttribute('allow', 'autoplay');
            iframe.setAttribute('allow', 'clipboard-write');
            iframe.setAttribute('allow', 'encrypted-media');
            iframe.setAttribute('allow', 'gyroscope');
            iframe.setAttribute('allow', 'picture-in-picture');
            iframe.setAttribute('allowFullScreen', '');
            event.target.parentElement.replaceChild(iframe, event.target);
        }
    });
};

//# sourceMappingURL=links.14c499ec.js.map
