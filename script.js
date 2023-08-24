let etapaAtual = 1;
let coresTimes = {};

function irParaEtapa2() {
    // Coletar os nomes dos times e cores
    const time1Nome = document.getElementById("time1").value;
    const time2Nome = document.getElementById("time2").value;
    const time3Nome = document.getElementById("time3").value;
    const time4Nome = document.getElementById("time4").value;
    const time1Cor = document.getElementById("cor1").value;
    const time2Cor = document.getElementById("cor2").value;
    const time3Cor = document.getElementById("cor3").value;
    const time4Cor = document.getElementById("cor4").value;

    // Verificar se todos os campos na Etapa 1 estão preenchidos
    if (time1Nome === "" || time2Nome === "" || time3Nome === "" || time4Nome === "" ||
        time1Cor === "" || time2Cor === "" || time3Cor === "" || time4Cor === "") {
        alert("Por favor, preencha todos os campos na Etapa 1.");
        return;
    }

    // Armazenar as cores selecionadas em um objeto
    coresTimes[time1Nome] = time1Cor;
    coresTimes[time2Nome] = time2Cor;
    coresTimes[time3Nome] = time3Cor;
    coresTimes[time4Nome] = time4Cor;

    // Preencher os nomes dos times nas etapas seguintes
    document.getElementById("time1j1").textContent = time1Nome;
    document.getElementById("time2j1").textContent = time2Nome;
    document.getElementById("time3j2").textContent = time3Nome;
    document.getElementById("time4j2").textContent = time4Nome;

    // Mudar cores dos nomes dos times nas etapas seguintes
    document.getElementById("time1j1").style.color = time1Cor;
    document.getElementById("time2j1").style.color = time2Cor;
    document.getElementById("time3j2").style.color = time3Cor;
    document.getElementById("time4j2").style.color = time4Cor;

    document.getElementById("etapa1").style.display = "none";
    document.getElementById("etapa2").style.display = "block";
    etapaAtual = 2;
}

function irParaEtapa3() {
    // Verificar se os campos na Etapa 2 estão preenchidos
    const golsJ1Jogo1 = parseInt(document.getElementById("golsj1j1").value);
    const golsJ2Jogo1 = parseInt(document.getElementById("golsj2j1").value);
    const golsJ1Jogo2 = parseInt(document.getElementById("golsj1j2").value);
    const golsJ2Jogo2 = parseInt(document.getElementById("golsj2j2").value);

   
    // Coletar os nomes dos times vencedores da semifinal
    const vencedorJ1 = document.getElementById("vencedorj1").textContent;
    const vencedorJ2 = document.getElementById("vencedorj2").textContent;

    // Preencher os nomes dos times vencedores na etapa 3
    document.getElementById("vencedorj1").textContent = vencedorJ1;
    document.getElementById("vencedorj2").textContent = vencedorJ2;

    // Mudar a cor da fonte para a cor selecionada na etapa de registro na etapa 3
    document.getElementById("vencedorj1").style.color = coresTimes[vencedorJ1];
    document.getElementById("vencedorj2").style.color = coresTimes[vencedorJ2];

    document.getElementById("etapa2").style.display = "none";
    document.getElementById("etapa3").style.display = "block";
    etapaAtual = 3;
}

function determinarCampeao() {
    // Coletar os nomes dos times vencedores do jogo final
    const vencedorJ1 = document.getElementById("vencedorj1").textContent;
    const vencedorJ2 = document.getElementById("vencedorj2").textContent;

    // Coletar os gols do jogo final
    const golsFinalJ1 = parseInt(document.getElementById("golsfinalj1").value);
    const golsFinalJ2 = parseInt(document.getElementById("golsfinalj2").value);

    let campeao;

    if (golsFinalJ1 > golsFinalJ2) {
        campeao = vencedorJ1;
    } else if (golsFinalJ1 < golsFinalJ2) {
        campeao = vencedorJ2;
    }

    // Preencher o nome do campeão na etapa 4
    document.getElementById("etapa3").style.display = "none";
    document.getElementById("etapa4").style.display = "block";
    document.getElementById("campeao").textContent = campeao;
    // Mudar a cor da fonte do campeão para a cor selecionada na etapa de registro na etapa 4
    document.getElementById("campeao").style.color = coresTimes[campeao];
}
    
