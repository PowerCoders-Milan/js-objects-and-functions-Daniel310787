/*Write a function named helloWorld that:
Takes 1 argument, a language code (e.g. "es", "de", "en")

Returns "Hello, World" for the given language, for at least 3 languages.

It should default to returning English. (defaul means that if no value is given it says it in english)

Prompt the user to give you a language and call the function passing that language as an argument.

Remember to print to the browser to cee if it works*/


function helloWorld() {
    lang = prompt("Choose a preferred language -en-, -es- or -it-")
    if(lang === "en"){
        window.alert("Hello Everyone")
    }else if(lang === "es"){
        window.alert("Hola a todos")
    } else if(lang === "it"){
        window.alert("Ciao Tutti")
    }
}
helloWorld()