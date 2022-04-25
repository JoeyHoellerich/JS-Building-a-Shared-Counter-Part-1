async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    // get counter value from server (returns promise object)
    let serverCount = await fetch("http://192.168.1.158:9001/counter");
    
    // grab JSON data from promise object
    let countJSON = await serverCount.json();

    let countValue = countJSON;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()