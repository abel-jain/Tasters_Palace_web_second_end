window.onscroll = function() {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 325) { //螢幕寬度大於325以上觸發
        if (docScrollTop > 100) { // 滑動100時觸發
            document.querySelector("header").classList.add("fixed")
            document.querySelector(".goog-te-menu-frame").classList.add("fixed")


        } else {
            document.querySelector("header").classList.remove("fixed")
            document.querySelector(".goog-te-menu-frame").classList.remove("fixed")

        }
    }
}