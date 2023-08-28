
const loadData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    showPhones(phones);
}


const showPhones = phones => {
    // parent div getting step 1
    const phoneContainer = document.getElementById('phone-container');
    // clear after search phone container
    phoneContainer.innerHTML = '';
    
    phones.forEach(phone => {
        // console.log(phone);
        // create child div step 2 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact  bg-gray-100 shadow-xl text-center mt-4`;
        // child div set inner html step 3
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title text-center">${phone.phone_name}</h2>
            <p >${phone.slug}</p>
            <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        
        `;
        // append child div to parent div step 4
        phoneContainer.appendChild(phoneCard);
    });
}


const searchHandler = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    loadData(searchText);
    inputField.value = '';
}


// loadData();