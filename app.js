const mobiles = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
   

];

function filterMobiles() {
    const filterType = document.getElementById('filterType').value;
    const filterValue = document.getElementById('filterValue').value.toLowerCase();

    const filteredMobiles = mobiles.filter(mobile => {
        const value = mobile[filterType].toLowerCase();
        return value.includes(filterValue);
    });

    displayMobiles(filteredMobiles);
}

function displayMobiles(mobiles) {
    const mobileListContainer = document.getElementById('mobileList');
    mobileListContainer.innerHTML = "";

    mobiles.forEach(mobile => {
        const mobileCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${mobile.model}</h5>
                        <p class="card-text">Brand: ${mobile.brand}</p>
                        <p class="card-text">Price: ${mobile.price}</p>
                        <p class="card-text">Camera: ${mobile.camera}</p>
                        <p class="card-text">RAM: ${mobile.ram}</p>
                        <p class="card-text">ROM: ${mobile.rom}</p>
                    </div>
                </div>
            </div>
        `;
        mobileListContainer.innerHTML += mobileCard;
    });
}
