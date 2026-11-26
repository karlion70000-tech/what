function buyCAR(carName) {
    alert("Вы выбрали автомобиль: " + carName + "\nНаш менеджер поможет вам с покупкой!");
}

const stars = document.querySelectorAll(".star");

stars.forEach(star => {
    star.addEventListener("click", function() {
        const value = Number(this.getAttribute("data-value"));
        document.getElementById("ratingValue").value = value;
        highlightStars(value);
    });
});

function highlightStars(count) {
    const targetCount = Number(count);
    stars.forEach(star => {
        const starValue = Number(star.getAttribute("data-value"));
        if (starValue <= targetCount) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

function submitReview(event) {
    event.preventDefault();
    const name = document.getElementById("reviewName").value;
    const rating = document.getElementById("ratingValue").value;
    const text = document.getElementById("reviewText").value;

    alert("Спасибо за отзыв, " + name + "!\nВаша оценка: " + rating + " из 5 ★\nОтзыв: «" + text + "»");

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";
    document.getElementById("ratingValue").value = 5;
    highlightStars(5);
}
