// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const cpuContent = document.querySelector("#cpu");
const ramContent = document.querySelector("#ram");

function getInfo(){
    const memory = process.getSystemMemoryInfo()
    const freeram = memory.free / memory.total * 100
    ramContent.textContent = `${freeram.toFixed(2)}%`
    
    const cpu = process.getCPUUsage().percentCPUUsage * 100
    cpuContent.textContent = `${cpu.toFixed(2)}%`

}

setInterval(getInfo,500)