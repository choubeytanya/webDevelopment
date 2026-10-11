(function() {
    console.log("This is an Immediately Invoked Function Expression (IIFE).")
})();

(function(name) {
    console.log("Hello, " + name + "! This is another IIFE.")
})("Tanya");