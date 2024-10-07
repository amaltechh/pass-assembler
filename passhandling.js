let leftselected, rightselected, side;

document.addEventListener('DOMContentLoaded', async () => {
    leftselected = "input";
    rightselected = "intermediate";
    try {
        document.querySelector('.input-btn').click();
        document.querySelector('.intermediate-btn').click();
    } catch (error) {
        console.error("Error during DOMContentLoaded:", error);
    }
});

document.querySelector('.left-box textarea').addEventListener('blur', function () {
    this.setAttribute('readonly', true);
    document.querySelector('.leftsave').click();
});

document.querySelector('.input-btn').addEventListener('click', async () => {
    try {
        if (document.querySelector('.left-box textarea').value !== localStorage.getItem('optab.txt') && leftselected === "optab" && localStorage.getItem('optab.txt')) {
            const result = confirm('You have unsaved changes. Do you want to save them?');
            if (result) {
                document.querySelector('.leftsave').click();
            } else {
                return;
            }
        }

        document.querySelector('#lname').textContent = "Input File";
        leftselected = "input";
        document.querySelector('.input-btn').style.backgroundColor = "#38405c";
        document.querySelector('.optab-btn').style.backgroundColor = "#44475a";

        const text = localStorage.getItem('input.txt');
        if (text) {
            document.querySelector('.left-box textarea').value = text;
        } else {
            document.querySelector('.left-box textarea').value = "";
            document.querySelector('.left-box textarea').placeholder = "Write your input code here";
        }
    } catch (error) {
        console.error("Error in input button click:", error);
    }
});

document.querySelector('.optab-btn').addEventListener('click', async () => {
    try {
        if (document.querySelector('.left-box textarea').value !== localStorage.getItem('input.txt') && leftselected === "input" && localStorage.getItem('input.txt')) {
            const result = confirm('You have unsaved changes. Do you want to save them?');
            if (result) {
                document.querySelector('.leftsave').click();
            } else {
                return;
            }
        }

        document.querySelector('#lname').innerHTML = "Optab File";
        leftselected = "optab";
        document.querySelector('.optab-btn').style.backgroundColor = "#38405c";
        document.querySelector('.input-btn').style.backgroundColor = "#44475a";

        const text = localStorage.getItem('optab.txt');
        if (text) {
            document.querySelector('.left-box textarea').value = text;
        } else {
            document.querySelector('.left-box textarea').value = "";
            console.log('No optab file found in local storage');
            document.querySelector('.left-box textarea').placeholder = "Write your optab code here";
        }
    } catch (error) {
        console.error("Error in optab button click:", error);
    }
});

document.querySelector('.intermediate-btn').addEventListener('click', async () => {
    try {
        document.querySelector('#rname').innerHTML = "Intermediate File";
        rightselected = "intermediate";
        document.querySelector('.intermediate-btn').style.backgroundColor = "#38405c";
        document.querySelectorAll('.symtab-btn, .output-btn, .output-btn2').forEach((btn) => {
            btn.style.backgroundColor = "#44475a";
        });

        const text = localStorage.getItem('intermediate.txt');
        if (text) {
            document.querySelector('.right-box textarea').value = text;
        } else {
            document.querySelector('.right-box textarea').value = "";
            document.querySelector('.right-box textarea').placeholder = "Run the assembler to generate intermediate file";
        }
    } catch (error) {
        console.error("Error in intermediate button click:", error);
    }
});

document.querySelector('.symtab-btn').addEventListener('click', async () => {
    try {
        document.querySelector('#rname').innerHTML = "Symtab File";
        rightselected = "symtab";
        document.querySelector('.symtab-btn').style.backgroundColor = "#38405c";
        document.querySelectorAll('.intermediate-btn, .output-btn, .output-btn2').forEach((btn) => {
            btn.style.backgroundColor = "#44475a";
        });

        const text = localStorage.getItem('symtab.txt');
        if (text) {
            document.querySelector('.right-box textarea').value = text;
        } else {
            document.querySelector('.right-box textarea').value = "";
            document.querySelector('.right-box textarea').placeholder = "Run the assembler to generate symtab file";
        }
    } catch (error) {
        console.error("Error in symtab button click:", error);
    }
});

document.querySelector('.output-btn').addEventListener('click', async () => {
    try {
        document.querySelector('#rname').innerHTML = "Output File";
        rightselected = "output";
        document.querySelector('.output-btn').style.backgroundColor = "#38405c";
        document.querySelectorAll('.symtab-btn, .intermediate-btn, .output-btn2').forEach((btn) => {
            btn.style.backgroundColor = "#44475a";
        });

        const text = localStorage.getItem('output.txt');
        if (text && text !== "AUGEYSTOOOO") {
            document.querySelector('.right-box textarea').value = text;
        } else {
            document.querySelector('.right-box textarea').value = "";
            document.querySelector('.right-box textarea').placeholder = "Run the assembler to generate output file";
        }
    } catch (error) {
        console.error("Error in output button click:", error);
    }
});

document.querySelector('.output-btn2').addEventListener('click', async () => {
    try {
        document.querySelector('#rname').innerHTML = "Output Code";
        rightselected = "output2";
        document.querySelector('.output-btn2').style.backgroundColor = "#38405c";
        document.querySelectorAll('.symtab-btn, .intermediate-btn, .output-btn').forEach((btn) => {
            btn.style.backgroundColor = "#44475a";
        });

        const text = localStorage.getItem('output2.txt');
        if (text && text !== "AUGEYSTOOOO") {
            document.querySelector('.right-box textarea').value = text;
        } else {
            document.querySelector('.right-box textarea').value = "";
            document.querySelector('.right-box textarea').placeholder = "Run the assembler to generate output code";
        }
    } catch (error) {
        console.error("Error in output2 button click:", error);
    }
});

document.getElementById('editButton').addEventListener('click', function () {
    const textarea = document.querySelector('.left-box textarea');
    textarea.removeAttribute('readonly');
    textarea.focus();
});

document.querySelector('.leftsave').addEventListener('click', async function () {
    try {
        console.log('leftsave clicked');
        const textArea = document.querySelector('.left-box textarea');
        const content = textArea.value;

        let fileName;
        if (leftselected === "input") {
            fileName = 'input.txt';
        } else if (leftselected === "optab") {
            fileName = 'optab.txt';
        }

        localStorage.setItem(fileName, content);
    } catch (error) {
        console.error("Error during left save:", error);
    }
});

document.querySelector('.left-download').addEventListener('click', async function () {
    side = "left";
});

document.querySelector('.right-download').addEventListener('click', async function () {
    side = "right";
});

document.querySelectorAll('.download').forEach(element => {
    element.addEventListener('click', async function () {
        let fileName;
        try {
            if (side === "left") {
                leftselected === "input" ? fileName = 'input.txt' : fileName = 'optab.txt';
            } else if (side === "right") {
                if (rightselected === "intermediate") {
                    fileName = 'intermediate.txt';
                } else if (rightselected === "symtab") {
                    fileName = 'symtab.txt';
                } else if (rightselected === "output") {
                    fileName = 'output.txt';
                } else if (rightselected === "output2") {
                    fileName = 'output2.txt';
                }
            }
            const text = localStorage.getItem(fileName);

            const handle = await window.showSaveFilePicker({
                suggestedName: fileName,
                types: [{
                    description: 'Text Files',
                    accept: { 'text/plain': ['.txt'] },
                }],
            });

            const writable = await handle.createWritable();
            await writable.write(text);
            await writable.close();
        } catch (error) {
            console.error('Error saving file:', error);
        }
    });
});

document.querySelector('.reset-btn').addEventListener('click', async () => {
    const result = confirm('Do you want to clear both the files?');
    if (result) {
        document.querySelector('.left-box textarea').value = "";
        document.querySelector('.right-box textarea').value = "";
        localStorage.removeItem('input.txt');
        localStorage.removeItem('optab.txt');
        localStorage.removeItem('intermediate.txt');
        localStorage.removeItem('symtab.txt');
        localStorage.removeItem('output.txt');
        localStorage.removeItem('output2.txt');
    }
});


function pass1(inputArr, optabArr) {
    let locctr = 0, i = 1, prev, top = 0, pos = -1;
    let interAddr = [];
    const symtabArr = [[]];
    let opcode;
    let intermediate = "", symtab = "";
    if (inputArr[0][1] === 'START') {
        locctr = parseInt(inputArr[0][2], 16);
        prev = locctr;
    } else {
        locctr = 0;
    }

    while (inputArr[i][1] !== 'END') {
        let found = false;
        opcode = inputArr[i][1];
        for (let x = 0; x < optabArr.length; x++) {
            if (optabArr[x][0] === opcode) {
                locctr += 3;
                found = true;
                break;
            }
        }
        if (!found) {
            if (inputArr[i][1] === 'WORD') {
                locctr += 3;
            } else if (inputArr[i][1] === 'RESW') {
                locctr += 3 * parseInt(inputArr[i][2]);
            } else if (inputArr[i][1] === 'RESB') {
                locctr += parseInt(inputArr[i][2]);
            } else if (inputArr[i][1] === 'BYTE') {
                const len = inputArr[i][2].length;
                locctr += len - 3;
            } else {
                console.log("Invalid opcode");
            }
        }
        top++;
        interAddr[top] = prev.toString(16);
        i++;
        prev = locctr;

        
        if (inputArr[i][0] !== '-') {
            let flag = 0;
            for (let x = 0; x < symtabArr.length; x++) {
                if (symtabArr[x][0] === inputArr[i][0]) {
                    flag = 1;
                    symtabArr[x][2] = 1;
                }
            }
            pos++;
            symtabArr[pos] = ([inputArr[i][0], prev.toString(16), flag]);
        }
    }
    top++;
    interAddr[top] = prev.toString(16);

    intermediate = "-\t" + inputArr[0][0] + "\t" + inputArr[0][1] + "\t" + inputArr[0][2] + "\n";
    for (let j = 1; j < interAddr.length; j++) {
        intermediate += interAddr[j] + "\t" + inputArr[j][0] + "\t" + inputArr[j][1] + "\t" + inputArr[j][2] + "\n";
    }
    intermediate = intermediate.slice(0, -1);

    for (let j = 0; j < symtabArr.length; j++) {
        symtab += symtabArr[j][0] + "\t" + symtabArr[j][1] + "\t" + symtabArr[j][2] + "\n";
    }
    symtab = symtab.slice(0, -1);

    return { intermediate, symtab };
}

function pass2(optabArr, intermediateArr, symtabArr) {
    let i = 1, objectCode;
    let objectCodeArr = [];

    while (intermediateArr[i][2] !== 'END') {
        let found = false;
        optabArr.forEach((opLine) => {
            if (opLine[0] === intermediateArr[i][2]) {
                found = true;
                objectCode = opLine[1];
                symtabArr.forEach((symLine) => {
                    if (symLine[0] === intermediateArr[i][3]) {
                        objectCode += symLine[1];
                        objectCodeArr.push(objectCode);
                    }
                });
            }
        });

        if (!found) {
            if (intermediateArr[i][2] === 'WORD') {
                const val = parseInt(intermediateArr[i][3]);
                objectCode = val.toString(16).padStart(6, '0');
                objectCodeArr.push(objectCode);
            } else if (intermediateArr[i][2] === 'BYTE') {
                const val = intermediateArr[i][3].substring(2, intermediateArr[i][3].length - 1);
                objectCode = "";
                for (let char of val) {
                    objectCode += char.charCodeAt(0).toString(16);
                }
                objectCodeArr.push(objectCode);
            } else if (intermediateArr[i][2] === 'RESW' || intermediateArr[i][2] === 'RESB') {
                objectCode = "\t";
                objectCodeArr.push(objectCode);
            }
        }
        i++;
    }
    objectCodeArr.push("\t");

    let output = intermediateArr[0][0] + "\t" + intermediateArr[0][1] + "\t" + intermediateArr[0][2] + "\t" + intermediateArr[0][3] + "\n";
    for (let j = 1; j < intermediateArr.length; j++) {
        output += intermediateArr[j][0] + "\t" + intermediateArr[j][1] + "\t" + intermediateArr[j][2] + "\t" + intermediateArr[j][3] + "\t" + objectCodeArr[j - 1] + "\n";
    }
    const lower = parseInt(intermediateArr[1][0], 16);
    const upper = parseInt(intermediateArr[intermediateArr.length - 1][0], 16);
    const length = upper - lower;
    let output2 = "H^" + intermediateArr[0][1].padEnd(6, "_") + "^" + intermediateArr[1][0] + "^" + length.toString(16).padStart(6, "0") + "\n\n";
    let lines = intermediateArr.length - 1, x = 1, text = "", size = 0, keri = false;
    let start = intermediateArr[x][0];
    while (x < intermediateArr.length) {
        keri = false;
        if (objectCodeArr[x - 1] === "\t") {
            x++;
            continue;
        }
        text += "^" + objectCodeArr[x - 1];
        size += objectCodeArr[x - 1].length / 2;
        if (size > 21) {
            keri = true;
            size -= objectCodeArr[x - 1].length / 2;
            text = text.slice(0, -objectCodeArr[x - 1].length - 1);
            output2 += "T^" + start + "^" + size.toString(16).padStart(2, "0") + text + "\n";
            start = intermediateArr[x][0];
            text = "";
            size = 0;
            continue;
        }
        x++;
    }
    if (!keri) {
        output2 += "T^" + start + "^" + size.toString(16).padStart(2, "0") + text + "\n\n";
    }

    output2 += "E^" + intermediateArr[1][0];

    symtabArr.forEach((symLine) => {
        if (symLine[2] == 1) {
            output = "AUGEYSTOOOO";
            output2 = "AUGEYSTOOOO";
        }
    });

    return { output, output2 };
}
document.querySelector('.intermediate-btn').addEventListener('click', async () => {
    try {
        document.querySelector('#rname').innerHTML = "Intermediate File";
        rightselected = "intermediate";
        document.querySelector('.intermediate-btn').style.backgroundColor = "#38405c";
        document.querySelectorAll('.symtab-btn, .output-btn, .output-btn2').forEach((btn) => {
            btn.style.backgroundColor = "#44475a";
        });

        const text = localStorage.getItem('intermediate.txt');
        if (text) {
            document.querySelector('.right-box textarea').value = text;
        } else {
            document.querySelector('.right-box textarea').value = "";
            document.querySelector('.right-box textarea').placeholder = "Run the assembler to generate intermediate file";
        }
    } catch (error) {
        console.error("Error in intermediate button click:", error);
    }
});

document.querySelector('.symtab-btn').addEventListener('click', async () => {
    try {
        document.querySelector('#rname').innerHTML = "Symtab File";
        rightselected = "symtab";
        document.querySelector('.symtab-btn').style.backgroundColor = "#38405c";
        document.querySelectorAll('.intermediate-btn, .output-btn, .output-btn2').forEach((btn) => {
            btn.style.backgroundColor = "#44475a";
        });

        const text = localStorage.getItem('symtab.txt');
        if (text) {
            document.querySelector('.right-box textarea').value = text;
        } else {
            document.querySelector('.right-box textarea').value = "";
            document.querySelector('.right-box textarea').placeholder = "Run the assembler to generate symtab file";
        }
    } catch (error) {
        console.error("Error in symtab button click:", error);
    }
});


document.querySelector('.assemble-btn').addEventListener('click', async () => {
    try {
        const inputText = localStorage.getItem('input.txt').trim();
        const optabText = localStorage.getItem('optab.txt').trim();

        
        const inputArr = inputText.split('\n').map(line => line.split(/\s+/));
        
        const optabArr = optabText.split('\n').map(line => line.split(/\s+/));

        
        const { intermediate, symtab } = pass1(inputArr, optabArr);
        localStorage.setItem('intermediate.txt', intermediate);
        localStorage.setItem('symtab.txt', symtab);

        
        const intermediateArr = intermediate.split('\n').map(line => line.split(/\s+/));
        const symtabArr = symtab.split('\n').map(line => line.split(/\s+/));

        
        const { output, output2 } = pass2(optabArr, intermediateArr, symtabArr);
        localStorage.setItem('output.txt', output);
        localStorage.setItem('output2.txt', output2);

        
        document.querySelector('.right-box textarea').value = intermediate; 
        document.querySelector('.right-box textarea').placeholder = "Run the assembler to generate output file";

        
        document.querySelector('.right-box textarea').value += "\n\nSymbol Table:\n" + symtab;
    } catch (error) {
        console.error("Error during assembly process:", error);
    }
});
