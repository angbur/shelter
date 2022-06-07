import getPets from "../../assets/data/pets.js";

const mainPage = () => {
    let pets = getPets().sort(() => Math.random() - .5);
    const burgerMenu= document.querySelector(".burger-menu");
    const menu = document.querySelector(".navbar");
    let startCard = 0;
    let endCard = startCard+3;

    const toggleMenu = () => {
        if (burgerMenu.classList.contains("showMenu")) {
            burgerMenu.classList.remove("showMenu");
            menu.classList.remove("navbar-mobile");
        } else {
            burgerMenu.classList.add("showMenu");
            menu.classList.add("navbar-mobile");
        }
    };
  
    burgerMenu.addEventListener("click", toggleMenu);

    const ourFriendsContainerCards = document.getElementById('container-class');

    const getCard = (petsList,startCard, endCard) => {

            petsList.slice(startCard,endCard).map((pet, id)=>{
            const card = document.createElement('div');
            card.classList.add('card');
            ourFriendsContainerCards.appendChild(card);

            const petImage = document.createElement('img');
            petImage.src = pet.img;
            petImage.alt = `${pet.breed} - ${pet.name}`;
            card.appendChild(petImage);

            const petName = document.createElement('p');
            petName.classList.add('caption');
            petName.innerHTML = pet.name;
            card.append(petName);

            const moreButton = document.createElement('button');
            moreButton.setAttribute('id', `btnMod${id}`);
            moreButton.setAttribute('value', id);
            moreButton.classList.add('primary-outlined');
            moreButton.classList.add('load-more');
            moreButton.type = "button";
            moreButton.innerHTML = 'Learn more';
            
            card.appendChild(moreButton);

            const modalDiv = document.createElement('div');
            modalDiv.setAttribute('id', `modal${id}`);
            modalDiv.classList.add("modal");
            
            const modalContentDiv = document.createElement('div');
            modalContentDiv.classList.add("modal-content");
            const closeButton = document.createElement('button');
            closeButton.id = `closeButton${id}`;
            closeButton.setAttribute('value', id);
            closeButton.setAttribute('type', 'button');
            closeButton.classList.add('close-button');
            closeButton.innerHTML = '&times;';

            modalContentDiv.appendChild(closeButton);

            const petImageModal = document.createElement('img');
            petImageModal.src = pet.img;
            petImageModal.alt = `${pet.breed} - ${pet.name}`;

            modalContentDiv.appendChild(petImageModal);

            const box = document.createElement('div');
            const boxTitle = document.createElement('h3');
            boxTitle.innerHTML = pet.name;
            const boxSubtitle = document.createElement('h4');
            boxSubtitle.innerHTML = pet.type;
            const boxDescription = document.createElement('h5');
            boxDescription.innerHTML = pet.description;

            const boxList = document.createElement('ul');
            const liAge = document.createElement('li');
            liAge.innerHTML = pet.age;
            const liInoculations = document.createElement('li');
            liInoculations.innerHTML = pet.inoculations;
            const liDiseases = document.createElement('li');
            liDiseases.innerHTML = pet.diseases;
            const liParasites = document.createElement('li');
            liParasites.innerHTML = pet.parasites;

            boxList.appendChild(liAge);
            boxList.appendChild(liInoculations);
            boxList.appendChild(liDiseases);
            boxList.appendChild(liParasites);

            box.appendChild(boxTitle);
            box.appendChild(boxSubtitle);
            box.appendChild(boxDescription);
            box.appendChild(boxList);

            modalContentDiv.appendChild(box);
            modalDiv.appendChild(modalContentDiv);
            card.appendChild(modalDiv);


            moreButton.addEventListener('click', function (event) {
                event.preventDefault();
                const modal = document.getElementById(`modal${event.target.value}`);
                modal ? modal.classList.add('show-modal') : null;
            });
            

            closeButton.addEventListener('click', function (event) {
                event.preventDefault();
                const modal = document.getElementById(`modal${event.target.value}`);
                modal ? modal.classList.remove('show-modal') : null;
            });

          
            
            return ourFriendsContainerCards.appendChild(card)
            });
        };

    const getLeftArrow = () => {
        const leftArrow = document.createElement('button');
        leftArrow.setAttribute('type', 'button');
        leftArrow.classList.add('arrow-button');
        leftArrow.innerHTML = '&larr;';

        leftArrow.addEventListener('click', ()=> {

            for (let i=0; i<3; i++){
                let newElem = pets.pop();
                pets.unshift(newElem);
            };
            
            document.getElementById('container-class').innerHTML='';
            getLeftArrow();
            getCard(pets, startCard, endCard);
            getRightArrow();
        });

        return ourFriendsContainerCards.appendChild(leftArrow);
    }

    const getRightArrow = () => {
        const rightArrow = document.createElement('button');
        rightArrow.setAttribute('type', 'button');
        rightArrow.classList.add('arrow-button');
        rightArrow.innerHTML = '&rarr;';

        rightArrow.addEventListener('click', ()=> {
          
            for (let i=0; i<3; i++){
                let newElem = pets.shift();
                pets.push(newElem);
            };
            
            document.getElementById('container-class').innerHTML='';
            getLeftArrow();
            getCard(pets, startCard, endCard);
            getRightArrow();
        });

        return ourFriendsContainerCards.appendChild(rightArrow);
    }
    

    return (
        getLeftArrow(),
        getCard(pets, startCard, endCard),
        getRightArrow()
    )
}

mainPage();

