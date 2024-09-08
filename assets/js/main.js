document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('love-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name1 = document.getElementById('name1').value.toLowerCase();
        const name2 = document.getElementById('name2').value.toLowerCase();

        const lovePercentage = calculateLovePercentage(name1, name2);

        document.getElementById('percentage').value = `${lovePercentage}%`;
    });

    function calculateLovePercentage(name1, name2) {
        const combinedNames = name1 + name2;
        let total = 0;

        for (let i = 0; i < combinedNames.length; i++) {
            total += combinedNames.charCodeAt(i);
        }

        return total % 101; // Get a percentage value from 0 to 100
    }

    // function calculateLovePercentage(name1, name2) {
    //     return Math.floor(Math.random() * 101);
    // }
    
});