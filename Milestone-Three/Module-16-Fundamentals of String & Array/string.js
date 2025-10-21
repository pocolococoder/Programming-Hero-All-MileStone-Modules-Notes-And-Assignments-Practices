// const country = "Bangladesh";
// const division = 'Russia';

// const province = `kandahar`;
// const thana = new String("Demra");
// // console.log(typeof thana);

// const real = ['rahim','karim','jarin'];
// console.log(typeof real.join("-"));

// let reverse = "";
const sentence = 'i am learning web dev.';
// for(const word of sentence){
//    reverse = word + reverse;
//  console.log(reverse)
// }

// let rev = "";
// for(let i = 0; i<sentence.length;i++){
//     const letter = sentence[i];
//     rev = letter + rev;

// }
// console.log(rev);

// const reversed = sentence.split("").reverse().join(" ");
// console.log(reversed)

// const bottle = {
//     brand: "solor",
//     price: 100,
//     color: "white",
//     isClean : flase
// }

const subject = {
    name: "math",
    techer : "salar",
    exam: 30,
    marks: 200,
    }

    // for(const prop in subject){
    //     console.log(prop);
    //     console.log(subject[prop]);
    // }
    const subjects = Object.keys(subject);
    console.log(subjects);
    for(const course of subjects){
        // console.log(course);
        console.log(course,subject[course])
    }