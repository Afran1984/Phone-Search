const textSearch = () => {
    const Searchvalue = document.getElementById('Text-input');
    const text = Searchvalue.value;
    Searchvalue.value = '';
    console.log(text);
    const url = ` https://openapi.programming-hero.com/api/phones?search=${text}`;
    fetch(url)
        .then(res => res.json())
        .then(datas => DishplayShow(datas.data))
};

const DishplayShow = Phone => {
    console.log(Phone);
    const Maindiv = document.getElementById('cardMain');
    Phone.forEach(Phones => {
        console.log(Phones);
        const SubDiv = document.createElement('div');
        SubDiv.classList.add('col');
        SubDiv.innerHTML = `
        <div class="card">
                <img src="${Phones.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${Phones.brand}</h5>
                    <h3 class="card-title">${Phones.phone_name}</h3>
                    <p class="card-text">${Phones.slug}</p>
                </div>
            </div>
        
        `;
        Maindiv.appendChild(SubDiv);


    });
}