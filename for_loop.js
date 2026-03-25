for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5) {
        console.log("5 is present");
    }
    console.log(element);  
}

for (let i = 1; i <= 10; i++) {    
    console.log("\n");
    console.log(`${i} Table`);
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// break and continue

// break statment stop the loop when condition meet the current need
for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        console.log(`5 is Detected`);
        break
    }
    console.log(`${i} is Common`);
}

// continue statement stop the current statement that meet with condition 
// but it does not stop the loop only not show the condiotion statement that meet with
for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        console.log(`5 is Detected`);
        continue
    }
    console.log(`${i} is Common`);
}