let Tab = (function(){
    let selector_attribute = 'data-tab';

    function init(){
        setup('.tabs');
    }

    function setup(pSelector){
        document.querySelectorAll(pSelector+' *['+selector_attribute+']').forEach(function(pLi){
            pLi.addEventListener("click", tabSelectedHandler, false);
        });
    }

    function tabSelectedHandler(e){
        e.preventDefault();
        var t = e.currentTarget;
        var selector = t.getAttribute(selector_attribute);
        var currentLi = t.parentNode.querySelector(".current");
        if(!selector){
            return;
        }
        var content = document.querySelector(selector);
        if(!content){
            return;
        }
        currentLi.setAttribute("class", "");
        t.setAttribute("class", "current");
        var currentlyDisplay = document.querySelector(currentLi.getAttribute(selector_attribute));
        currentlyDisplay.style.display = "none";
        content.style.display = "block";
    }

    window.addEventListener("DOMContentLoaded", init, false);

    return {
        setup:setup,
        selectTab:function(pSelector){
            tabSelectedHandler({preventDefault:function(){}, currentTarget:document.querySelector('['+selector_attribute+'="'+pSelector+'"]')});
        }
    };
})();