let arr = ["Web Design", "Web Developer", "Front End Developer", "Back End Developer", "Full Stack Developer"];

let arryIndex_number = 0;

let arryTextIndex_number = 0;

setInterval(textType, 300);

function textType() {
    let totalArry_countNumber = arr[arryIndex_number];

    let arryCount_number_and_totalText_countNumber = totalArry_countNumber.slice(0, arryTextIndex_number++);

    document.getElementById("s1").innerHTML = arryCount_number_and_totalText_countNumber;

    if (arryCount_number_and_totalText_countNumber.length == totalArry_countNumber.length) {
        arryIndex_number++;

        arryTextIndex_number = 0;
    }

    if (arryIndex_number == arr.length) {
        arryIndex_number = 0;
    }
}
