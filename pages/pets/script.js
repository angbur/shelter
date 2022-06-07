import getPets from "../../assets/data/pets.js";

const petsPage = () => {
    let pets = getPets().sort(() => Math.random() - .5);

    const burgerMenu= document.querySelector(".burger-menu");
    const menu = document.querySelector(".navbar");
    let n = 8;
    let startCard = 0;
    let endCard = startCard+n;

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

    const ourFriendsContainerCards = document.getElementById('card-container');

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

        const shuffleCard = (data) => {
            data = data.sort(() => Math.random() - .5);
            return data;
        };

        const setPagination = () => {
            const leftArrowDouble = document.getElementById('arrow-left-start');
            const leftArrow = document.getElementById('arrow-left');
            const rightArrow = document.getElementById('arrow-right');
            const rightArrowDouble = document.getElementById('arrow-right-start');
            const page = document.getElementById('page');

            rightArrow.addEventListener('click', (event)=>{
                pets = shuffleCard(pets);
                document.getElementById('card-container').innerHTML='';
                getCard(pets, startCard, endCard);
                setPagination();
                console.log( page.innerText)
                parseInt(page.innerHTML) < 10
                    page.innerHTML = (parseInt(page.innerText)+1).toString() 
                    parseInt(page.innerHTML) === 10 ? (
                        rightArrow.disabled = true,
                        rightArrow.classList.add('disabled'),
                        rightArrowDouble.disabled = true,
                        rightArrowDouble.classList.add('disabled')
                      ) : null
                page.innerHTML > 1 
                    ?   (
                        leftArrowDouble.disabled = false,
                        leftArrowDouble.classList.remove('disabled'),
                        leftArrow.disabled = false,
                        leftArrow.classList.remove('disabled')
                        )
                    : (
                        leftArrowDouble.disabled = true,
                        leftArrowDouble.classList.add('disabled'),
                        leftArrow.disabled = true,
                        leftArrow.classList.add('disabled')
                      )
                      event.stopImmediatePropagation();
            });

            leftArrow.addEventListener('click', (event)=>{
                pets = shuffleCard(pets);
                document.getElementById('card-container').innerHTML='';
                getCard(pets, startCard, endCard);
                setPagination();
                page.innerHTML = parseInt(page.innerText)-1;

                parseInt(page.innerHTML) === 1 
                    ? (
                        leftArrowDouble.disabled = true,
                        leftArrowDouble.classList.add('disabled'),
                        leftArrow.disabled = true,
                        leftArrow.classList.add('disabled'),
                        rightArrow.disabled = false,
                        rightArrowDouble.disabled = false,
                        rightArrow.classList.remove('disabled'),
                        rightArrowDouble.classList.remove('disabled')

                    ) : null
                
                parseInt(page.innerHTML) < 10 
                    ? (
                        rightArrow.disabled = false,
                        rightArrowDouble.disabled = false,
                        rightArrow.classList.remove('disabled'),
                        rightArrowDouble.classList.remove('disabled')
                    ): null

                event.stopImmediatePropagation();
            });

            leftArrowDouble.addEventListener('click', (event)=>{
                page.innerHTML = 1;
               
                leftArrowDouble.disabled = true,
                leftArrowDouble.classList.add('disabled'),
                leftArrow.disabled = true,
                leftArrow.classList.add('disabled'),

                rightArrow.disabled = false,
                rightArrow.classList.remove('disabled'),
                rightArrowDouble.disabled = false,
                rightArrowDouble.classList.remove('disabled')
                    
                event.stopImmediatePropagation();
            });

            rightArrowDouble.addEventListener('click', ()=>{
                page.innerHTML = '10';

                rightArrowDouble.disabled = true,
                rightArrowDouble.classList.add('disabled'),
                rightArrow.disabled = true,
                rightArrow.classList.add('disabled'),

                leftArrowDouble.disabled = false,
                leftArrowDouble.classList.remove('disabled'),
                leftArrow.disabled = false,
                leftArrow.classList.remove('disabled')
                
            });
       




        }
    

    return (
        getCard(pets, startCard, endCard),
        setPagination()
    )
}

petsPage();
