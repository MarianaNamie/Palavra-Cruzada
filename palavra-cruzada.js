function verificar_q1() {
    var rom = inp_rom.value;
    if (rom.toUpperCase() == "ROM") {
        romR.innerHTML = `R`;
        romO.innerHTML = `O`;
        romM.innerHTML = `M`;
    }
}

function verificar_q2() {
    var dualCore = inp_dualCore.value;
    if (dualCore.toUpperCase() == "DUAL CORE") {
        dual_coreD.innerHTML = `D`
        dual_coreU.innerHTML = `U`
        dual_coreA.innerHTML = `A`
        dual_coreL.innerHTML = `L`
        dual_coreC.innerHTML = `C`
        dual_coreO.innerHTML = `O`
        dual_coreR.innerHTML = `R`
    }
}

function verificar_q3() {
    var registradores = inp_registradores.value;
    if (registradores.toUpperCase() == "REGISTRADORES") {
        registradoresR1.innerHTML = `R`;
        registradoresE1.innerHTML = `E`;
        registradoresG.innerHTML = `G`;
        registradoresI.innerHTML = `I`;
        registradoresS1.innerHTML = `S`;
        registradoresT.innerHTML = `T`;
        registradoresA.innerHTML = `A`;
        registradoresD.innerHTML = `D`;
        registradoresO.innerHTML = `O`;
        registradoresR2.innerHTML = `R`;
        registradoresE2.innerHTML = `E`;
        registradoresS2.innerHTML = `S`;
    }
}

function verificar_q4() {
    var quadCore = inp_quadCore.value;
    if (quadCore.toUpperCase() == "QUAD CORE") {
        quad_coreQ.innerHTML = `Q`;
        dual_coreU.innerHTML = `U`;
        quad_coreA.innerHTML = `A`;
        quad_coreD.innerHTML = `D`;
        quad_coreC.innerHTML = `C`;
        quad_coreO.innerHTML = `O`;
        quad_coreR.innerHTML = `R`;
        quad_coreE.innerHTML = `E`;
    }
}

function verificar_q5() {
    var ram = inp_ram.value;
    if (ram.toUpperCase() == "RAM") {
        registradoresR1.innerHTML = `R`;
        ramA.innerHTML = `A`;
        romM.innerHTML = `M`;
    }
}

function verificar_q6() {
    var threads = inp_threads.value;
    if (threads.toUpperCase() == "THREADS") {
        threadsT.innerHTML = `T`;
        threadsH.innerHTML = `H`;
        threadsR.innerHTML = `R`;
        threadsE.innerHTML = `E`;
        threadsA.innerHTML = `A`;
        threadsS.innerHTML = `S`;
    }
}