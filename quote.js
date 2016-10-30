/**
 * Created by Jessica Prades on 10/26/2016.
 */

/* Generate a Random number*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* Generate a random quote and his author*/
function generateQuote() {

    var arrQuotes = ["Programs must be written for people to read, and only incidentally for machines to execute.", "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live", "That's the thing about people who think they hate computers. What they really hate is lousy programmers.", "You've baked a really lovely cake, but then you've used dog shit for frosting.", "Give a man a program, frustrate him for a day.Teach a man to program, frustrate him for a lifetime.", "I'm not a great programmer; I'm just a good programmer with great habits.", "How you look at it is pretty much how you'll see it", "A language that doesn't affect the way you think about programming is not worth knowing.", "Perl – The only language that looks the same before and after RSA encryption.", "Walking on water and developing software from a specification are easy if both are frozen.", "The most disastrous thing that you can ever learn is your first programming language.", "The most important property of a program is whether it accomplishes the intention of its user.", "Big Brother fills us all with the same crap. My guess is he was clever the same way everybody thinks they're clever.", "At forty, I was too old to work as a programmer myself anymore; writing code is a young person’s job."];
    var arrAuthors = ["Harold Abelson", "John Woods", " Larry Niven", "Steve Jobs", "Waseem Latif", "Kent Beck", "Rasheed Ogunlaru", "Alan J. Perlis", "Keith Bostic", "Edward Berard", "Alan Kay", "C.A.R. Hoare", "Chuck Palahniuk, Lullaby", "Michael Crichton, Prey"];

    var n = getRandomNumber(0, arrQuotes.length);

    $(".codeQuote").html(arrQuotes[n]);
    $(".author").html("- " + arrAuthors[n]);

    /* Twitter Button */

    var totalLength = arrQuotes[n].length + arrAuthors[n].length + 3;

    if (totalLength > 140) {

        arrQuotes[n] = arrQuotes[n].substring(0, (140 - arrAuthors[n].length - 6)) + "...";
    }

    $("#twitterBtn").attr("href", "https://twitter.com/intent/tweet?text=" + arrQuotes[n] + " - " + arrAuthors[n]);

}

/* Calling the Function*/

$(document).ready(function () {
    generateQuote();


    $("#buttonGenerator").on("click", generateQuote);

});

