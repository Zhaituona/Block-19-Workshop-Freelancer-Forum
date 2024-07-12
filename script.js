document.addEventListener('DOMContentLoaded', () => {
    const freelancers = [
        { name: 'Alice', occupation: 'Writer', price: 30 },
        { name: 'Bob', occupation: 'Teacher', price: 50 }
    ];

    function calculateAveragePrice() {
        const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
        return (total / freelancers.length).toFixed(2);
    }

    function updateAveragePrice() {
        const averagePriceElement = document.getElementById('average-price');
        averagePriceElement.textContent = `The average starting price is $${calculateAveragePrice()}.`;
    }

    function addFreelancer(freelancer) {
        freelancers.push(freelancer);
        const freelancerList = document.getElementById('freelancer-list');

        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const occupationCell = document.createElement('td');
        const priceCell = document.createElement('td');

        nameCell.textContent = freelancer.name;
        occupationCell.textContent = freelancer.occupation;
        priceCell.textContent = `$${freelancer.price}`;

        row.appendChild(nameCell);
        row.appendChild(occupationCell);
        row.appendChild(priceCell);
        freelancerList.appendChild(row);

        updateAveragePrice();
    }

    // Initial average price update
    updateAveragePrice();

    // Add new freelancer Carol after a few seconds
    setTimeout(() => {
        const newFreelancer = { name: 'Carol', occupation: 'Programmer', price: 70 };
        addFreelancer(newFreelancer);
    }, 5000);

    // Add more freelancers every few seconds
    setInterval(() => {
        const randomPrice = Math.floor(Math.random() * 100) + 1;
        const newFreelancer = { name: `Freelancer${freelancers.length + 1}`, occupation: 'Random', price: randomPrice };
        addFreelancer(newFreelancer);
    }, 10000);
});
