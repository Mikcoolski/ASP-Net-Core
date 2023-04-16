//The document object is used to represent the HTML document currently loaded in the browser.
//It provides methods and properties that allow you to interact with the various elements in the
//document, such as modifying their content, style, or position, as well as adding or removing elements dynamically


//--------------------------------------------------------------------------------------------------------------------
// We are finding an element id and assigning that element to a variable so we can
// use methods to interact with said element
//var theForm = document.getElementById("theForm");
//var button = document.getElementById("buyButton");


//Here we are hiding theForm div element
//theForm.hidden = true;

//Here we are adding an event listener for when a click is triggered on the button object
//We are using an anonymous function because this si the only use case it would be used so no need
//to create and name a function to pass in to this event listener
//button.addEventListener("click", function ()
//{
//    //On button click the method would be called and this alert would be generated
//    alert("Buying Item");

//    //Instead we can also write to the console to debug the client side application
//    console.log("Buying an item");
//});

//--------------------------------------------------------------------------------------------------------------------
//Here we are using jQuery:
//jQuery is a JavaScript library that simplifies HTML document traversing, event handling,
//animating, and Ajax interactions for rapid web development.It is often used to add interactivity
//and dynamic behavior to web pages.With jQuery, developers can write less code and achieve more
//functionality compared to traditional JavaScript.uery was originally created to provide a consistent
//way to interact with the Document Object Model(DOM) across different browsers.It abstracts away
//many of the differences in how browsers implement the DOM, making it easier to write cross - browser compatible code.

//We use this to ensure that there are no global variable collisions.
//Sometimes a following page will rename a variable
//By putting the functionality inside an anonymous function, this will only execute once the browser is ready
//Additionally, the code within the block will not interfere with other pages within other js files
$(document).ready(function () {

    //We can replace jQuery with $ as an alias
    //The default function is to query the document
    //The # synbol represents the id. This is the css selector
    var $theForm = $("#theForm");

    //This performs the operation on the entire collection in case multiple are returned from the document
    $theForm.hide();

    //The same can be done for the eventhandler
    var $theButton = $("#buyButton");
    $theButton.on("click", function () {
        //On button click the method would be called and this alert would be generated
        alert("Buying Item...");

        //Instead we can also write to the console to debug the client side application
        console.log("Buying an item");
    });

    //You can use css syntax with jquery to use functionality on css groupings
    //This will display what you are clicking on within the css list products-props
    var $productInfo = $("ul.products-props li");
    $productInfo.on("click", function ()
    {
        //the this keyboard binds to the object that was clicked on
        console.log("You clicked on " + $(this).text());
    });

    //sets the popup-form login section to a variable
    var $popup = $("#login-block .popup-form");
    //setting an event handler on that login button click to slide open and close
    $("#login-block .toggle-item").on("click", function () {
        $popup.slideToggle(250);
    });
});