
function searchBooks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        const title = book.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}
