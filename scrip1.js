const buttons = document.querySelectorAll(".filter button");
  const cards = document.querySelectorAll(".card");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const filter = button.getAttribute("data-filter");

      cards.forEach(card => {

        if(filter === "all"){
          card.style.display = "block";
        }

        else if(card.classList.contains(filter)){
          card.style.display = "block";
        }

        else{
          card.style.display = "none";
        }

      });

    });

  });