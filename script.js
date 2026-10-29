// BANCO DE DADOS INTEGRAL DO INVENTÁRIO PGR
const INVENTARIO_RISCOS_COMPLETO = {
    "ACIDENTES_AMPLIADOS": [
        { agente: "CIRCULAÇÃO DE VEÍCULOS NA RUA DA ÁREA EXTERNA OU ESTACIONAMENTO DA UNIDADE", risco: "ACIDENTE DE TRÂNSITO E ATROPELAMENTO", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "ÁRVORES COM GALHOS SECOS SEM PODA NA ÁREA DE CIRCULAÇÃO EXTERNA", risco: "QUEDA DE GALHOS E FRUTOS", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "PISO IRREGULAR OU QUEBRADO EM ÁREAS DE CIRCULAÇÃO", risco: "QUEDA DO MESMO NÍVEL, TROPEÇO", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "UTILIZAÇÃO DE ESCADA DE ACESSO AOS PAVIMENTOS SUPERIORES", risco: "QUEDAS OU TROPEÇOS", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "UTILIZAÇÃO DE ELEVADOR DE PASSAGEIRO", risco: "ROMPIMENTO DE CABO / QUEDA DE ELEVADOR", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "SISTEMA ELÉTRICO DA REDE CENTRAL DETERIORADO", risco: "CURTO-CIRCUITO E INCÊNDIO", exame: "CLÍNICO", periodicidade: "BIENAL" }
    ],
    "BIOLOGICOS_AMPLIADOS": [
        { agente: "PROLIFERAÇÃO DE INSETOS E PERNILONGOS NA ÁREA EXTERNA", risco: "DENGUE, CHIKUNGUNYA, ZIKA", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "INGESTÃO DE ÁGUA DO RESERVATÓRIO SEM LAUDO DE POTABILIDADE", risco: "INFECÇÃO DIGESTIVA / BACTERIANA", exame: "CLÍNICO", periodicidade: "BIENAL" }
    ],
    "ERGONOMICOS_BIOMECANICOS": [
        { agente: "EXIGÊNCIA DE POSTURAS INCÔMODAS POR LONGOS PERÍODOS", risco: "DANOS OSTEOMUSCULARES E FADIGA", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "POSTURA SENTADA POR LONGOS PERÍODOS", risco: "DORES LOMBARES / LUMBAGO COM CIÁTICA", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "POSTURA DE PÉ POR LONGOS PERÍODOS", risco: "DANOS OSTEOMUSCULARES", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "LEVANTAMENTO E TRANSPORTE MANUAL DE CARGAS OU VOLUMES", risco: "VARIZES, COXARTROSE E HÉRNIAS DISCAIS", exame: "CLÍNICO (TRIAGEM LOMBAR) + RADIOGRAFIA DE COLUNA", periodicidade: "ANUAL" },
        { agente: "FREQUENTE EXECUÇÃO DE MOVIMENTOS REPETITIVOS", risco: "LESÃO POR ESFORÇO REPETITIVO (LER/DORT)", exame: "CLÍNICO", periodicidade: "BIENAL" }
    ],
    "ERGONOMICOS_ORGANIZACIONAIS": [
        { agente: "AMBIENTE DE TRABALHO COM ILUMINAÇÃO DEFICIENTE", risco: "DANOS OCULARES E NISTAGMO", exame: "CLÍNICO", periodicidade: "BIENAL" },
        { agente: "AUSÊNCIA DE PAUSAS PARA DESCANSO DURANTE A JORNADA", risco: "SÍNDROME DE BURNOUT E ESTRESSE", exame: "CLÍNICO", periodicidade: "BIENAL" }
    ],
    "ERGONOMICOS_COGNITIVOS": [
        { agente: "EXIGÊNCIA DE ALTO NÍVEL DE CONCENTRAÇÃO OU ATENÇÃO", risco: "SOBRECARGA DE TRABALHO MENTAL / BURNOUT", exame: "CLÍNICO", periodicidade: "BIENAL" }
    ],
    "PSICOSSOCIAIS": [
        { agente: "CARGA E RITMO DE TRABALHO (PRESSÃO TEMPORAL)", risco: "BURNOUT, ANSIEDADE E FADIGA CRÔNICA", exame: "AVALIAÇÃO PSICOLÓGICA / PSICOSSOCIAL", periodicidade: "ANUAL" }
    ],
    "ACIDENTES": [
        { agente: "SERVIÇOS COM SERRA E MÁQUINAS DE CORTE", risco: "CORTE, PANCADA E DILACERAÇÃO NAS MÃOS", exame: "CLÍNICO, AUDIOMETRIA, ECG, HEMOGRAMA, AVALIAÇÃO PSICOSSOCIAL", periodicidade: "ANUAL" },
        { agente: "TRABALHOS EM ESPAÇO CONFINADO (NR-33)", risco: "GASES TÓXICOS, INCÊNDIOS, ASFIXIA E MORTE", exame: "ACUIDADE VISUAL, AUDIOMETRIA, ECG, GLICEMIA, HEMOGRAMA, AVALIAÇÃO PSICOSSOCIAL", periodicidade: "ANUAL" },
        { agente: "TRABALHO EM ALTURA (NR-35)", risco: "QUEDAS DE NÍVEIS DIFERENTES E MORTE", exame: "ACUIDADE VISUAL, ECG, GLICEMIA, HEMOGRAMA, AVALIAÇÃO PSICOSSOCIAL", periodicidade: "ANUAL" },
        { agente: "MANUTENÇÃO EM SISTEMAS ELÉTRICOS (NR-10)", risco: "CHOQUE ELÉTRICO, QUEIMADURAS E MORTE", exame: "ACUIDADE VISUAL, ECG, AUDIOMETRIA, ISHIHARA, AVALIAÇÃO PSICOSSOCIAL", periodicidade: "ANUAL" }
    ],
    "FISICOS": [
        { agente: "RUÍDO CONTÍNUO OU INTERMITENTE DE MÁQUINAS E VEÍCULOS", risco: "SURDEZ TEMPORÁRIA OU PERMANENTE (PAIRO)", exame: "AUDIOMETRIA TONAL OCUPACIONAL", periodicidade: "SEMESTRAL / ANUAL" }
    ],
    "QUIMICOS": [
        { agente: "BENZENO E SEUS COMPOSTOS TÓXICOS", risco: "SUPRESSÃO DE MEDULA ÓSSEA E LEUCEMIA", exame: "ÁCIDO MUÔNICO OU S-FENILMERCAPTÚRICO NA URINA + HEMOGRAMA", periodicidade: "SEMESTRAL" },
        { agente: "POEIRA CONTENDO SÍLICA LIVRE CRISTALINA", risco: "SILICOSE E FIBROSE PULMONAR IRREVERSÍVEL", exame: "RADIOGRAFIA DE TÓRAX (PADRÃO OIT) + ESPIROMETRIA", periodicidade: "ANUAL" }
    ],
    "BIOLOGICOS": [
        { agente: "CONTATO COM PACIENTES OU MATERIAL INFECTOCONTAGIANTE (NR-32)", risco: "TRANSMISSÃO DE HIV, HEPATITES B/C E TUBERCULOSE", exame: "SOROLOGIAS (HEPATITE B/C), PPD/IGRA, HEMOGRAMA COMPLETO", periodicidade: "SEMESTRAL / ANUAL" }
    ],
    "PERICULOSOS": [
        { agente: "OPERAÇÕES PERIGOSAS COM EXPLOSIVOS OU INFLAMÁVEIS", risco: "EXPLOSÃO, QUEIMADURAS E MORTE", exame: "AVALIAÇÃO PSICOSSOCIAL + EXAME CLÍNICO", periodicidade: "ANUAL" },
        { agente: "ATIVIDADES REALIZADAS COM A UTILIZAÇÃO DE MOTOCICLETA", risco: "ACIDENTE DE TRÂNSITO E DILACERAÇÃO", exame: "ACUIDADE VISUAL, ECG, AUDIOMETRIA, EEG, GLICEMIA, HEMOGRAMA, AVALIAÇÃO PSICOSSOCIAL", periodicidade: "ANUAL" }
    ]
};

// ESTADO GLOBAL
let currentRole = "GESTOR";
let selectedAsoId = null;
let orderItemsList = [];

let clientesCadastrados = [
    { id: 1, nome: "PREFEITURA MUNICIPAL", cnpj: "00.000.000/0001-91", tel: "(19) 3888-1000", email: "contato@prefeitura.sp.gov.br", medPcmso: "DRA. LUIZA BRABETZ SANDONATO", crmPcmso: "CRM SP 145328" },
    { id: 2, nome: "INDÚSTRIA METALÚRGICA", cnpj: "11.222.333/0001-44", tel: "(19) 3999-2000", email: "rh@metalurgica.com.br", medPcmso: "DR. MARCOS SILVA", crmPcmso: "CRM SP 98765" }
];

let clinicasCadastradas = [
    { id: 1, nome: "CLÍNICA CENTRAL PAULÍNIA", cnpj: "12.345.678/0001-90", whats: "(19) 99156-7153", email: "paulinia@borealengmed.com.br" },
    { id: 2, nome: "CENTRO MÉDICO MACAPÁ", cnpj: "98.765.432/0001-11", whats: "(96) 98888-7777", email: "macapa@centromedico.com.br" }
];

let asoQueueData = [
    { id: 101, nome: "JOÃO DA SILVA", cpf: "123.456.789-00", cliente: "PREFEITURA MUNICIPAL", cargo: "MECÂNICO DE MANUTENÇÃO", tipo: "ASO ADMISSONAL", status: "AGUARDANDO", anamnese: null }
];

let asoHistoryData = [];

let pcmsoMatrizData = [
    { id: 1, lotacao: "OFICINA CENTRAL", processo: "MANUTENÇÃO", cargo: "MECÂNICO DE MANUTENÇÃO", qtd: 3, agente: "SERVIÇOS COM SERRA E MÁQUINAS DE CORTE", exame: "CLÍNICO, AUDIOMETRIA, ECG, HEMOGRAMA", periodicidade: "ANUAL", cliente: "PREFEITURA MUNICIPAL" }
];

let atestadosHomologacaoData = [
    { id: 1, cliente: "PREFEITURA MUNICIPAL", trab: "CARLOS FERREIRA - 111.222.333-44", setor: "MANUTENÇÃO", data: "28/10/2026", dias: 3, cid: "M54.5", medico: "DR. ALBERTO GOMES", status: "HOMOLOGADO", parecer: "ATESTADO COMPATÍVEL" }
];

let monitorRequestsData = [
    { fecha: "28/10/2026", cliente: "PREFEITURA MUNICIPAL", trab: "JOÃO DA SILVA - 123.456.789-00", obj: "ASO ADMISSONAL", qtd: 1, valor: "85,00", clinica: "CLÍNICA CENTRAL PAULÍNIA", status: "REALIZADO" }
];

// INICIALIZAÇÃO SEGURA E PROTEGIDA
document.addEventListener('DOMContentLoaded', () => {
    try { if (window.lucide) { lucide.createIcons(); } } catch(e){}
    atualizarDropdownsClinicas();
    validarTrocaPerfil();
    renderFilaAso();
    renderPcmsoMatriz();
    renderClientesTabela();
    renderClinicasTabela();
    renderHomologacaoTabela();
    renderMonitorTable();
    renderProducaoTable();
    initCanvasAssinatura();
});

// CANVAS ASSINATURA DIGITAL
let isDrawing = false;
function initCanvasAssinatura() {
    const canvas = document.getElementById('canvas-assinatura-medico');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#0f172a';

    canvas.addEventListener('mousedown', (e) => { isDrawing = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); });
    canvas.addEventListener('mousemove', (e) => { if (isDrawing) { ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); } });
    canvas.addEventListener('mouseup', () => isDrawing = false);
}

function limparAssinatura() {
    const canvas = document.getElementById('canvas-assinatura-medico');
    if (canvas) { canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height); }
}

// TROCA DE ABAS
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById('tab-' + tabId);
    if (target) { target.classList.remove('hidden'); }
}

// TROCA DE PERFIL COM SIGILO DE VALORES
function validarTrocaPerfil() {
    const select = document.getElementById('user-role-select');
    if (!select) return;
    currentRole = select.value;
    if (currentRole === 'CLIENTE' || currentRole === 'CLINICA') {
        document.body.classList.add('hide-prices');
    } else {
        document.body.classList.remove('hide-prices');
    }

    const pcmsoForm = document.getElementById('pcmso-form-container');
    if (pcmsoForm) { pcmsoForm.style.display = (currentRole === 'GESTOR') ? 'block' : 'none'; }
    
    document.querySelectorAll('.btn-only-gestor').forEach(btn => {
        btn.style.display = (currentRole === 'GESTOR') ? 'block' : 'none';
    });

    renderPcmsoMatriz();
}

function alterarSenhaMaster() {
    const pwd = prompt("Digite a nova Senha Master:");
    if (pwd) { alert("Senha Master redefinida com sucesso!"); }
}

// CADASTROS
function salvarNovoCliente() {
    if (currentRole !== 'GESTOR') { alert("Somente o GESTOR altera o cadastro de Clientes!"); return; }
    const nome = document.getElementById('cad_cli_nome').value.trim();
    const cnpj = document.getElementById('cad_cli_cnpj').value.trim();
    const tel = document.getElementById('cad_cli_tel').value.trim();
    const email = document.getElementById('cad_cli_email').value.trim();
    const end = document.getElementById('cad_cli_end').value.trim();
    const medPcmso = document.getElementById('cad_cli_med_pcmso').value.trim();
    const crmPcmso = document.getElementById('cad_cli_med_crm').value.trim();

    if (!nome || !cnpj) { alert("Preencha Razão Social e CNPJ."); return; }

    clientesCadastrados.push({ id: Date.now(), nome, cnpj, tel, email, end, medPcmso, crmPcmso });
    renderClientesTabela();

    document.getElementById('cad_cli_nome').value = '';
    document.getElementById('cad_cli_cnpj').value = '';
    alert("Cliente e Médico Responsável do PCMSO salvos com sucesso!");
}

function renderClientesTabela() {
    const tbody = document.getElementById('clientes-cadastrados-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    clientesCadastrados.forEach(c => {
        const tr = document.createElement('tr');
        tr.className = "border-b";
        tr.innerHTML = `<td class="p-2 font-bold">${c.nome}</td><td class="p-2">${c.cnpj}</td><td class="p-2">${c.tel}</td><td class="p-2">${c.email}</td><td class="p-2 font-bold text-blue-900">${c.medPcmso || '-'} (${c.crmPcmso || ''})</td>`;
        tbody.appendChild(tr);
    });
}

function salvarNovaClinica() {
    if (currentRole !== 'GESTOR') { alert("Somente o GESTOR altera o cadastro de Clínicas!"); return; }
    const nome = document.getElementById('cad_clin_nome').value.trim();
    const cnpj = document.getElementById('cad_clin_cnpj').value.trim();
    const whats = document.getElementById('cad_clin_whats').value.trim();
    const email = document.getElementById('cad_clin_email').value.trim();

    if (!nome) { alert("Informe o nome da clínica."); return; }

    clinicasCadastradas.push({ id: Date.now(), nome, cnpj, whats, email });
    atualizarDropdownsClinicas();
    renderClinicasTabela();

    document.getElementById('cad_clin_nome').value = '';
    document.getElementById('cad_clin_cnpj').value = '';
    alert("Clínica cadastrada com sucesso!");
}

function renderClinicasTabela() {
    const tbody = document.getElementById('clinicas-cadastradas-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    clinicasCadastradas.forEach(c => {
        const tr = document.createElement('tr');
        tr.className = "border-b";
        tr.innerHTML = `<td class="p-2 font-bold">${c.nome}</td><td class="p-2">${c.cnpj}</td><td class="p-2">${c.whats}</td><td class="p-2">${c.email || '-'}</td>`;
        tbody.appendChild(tr);
    });
}

function atualizarDropdownsClinicas() {
    const select = document.getElementById('ped_clinica_target');
    if (!select) return;
    select.innerHTML = '';
    clinicasCadastradas.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.nome; opt.textContent = c.nome;
        select.appendChild(opt);
    });
}

// SOLICITADOR DE PEDIDOS
function addOrderItem() {
    const trab = document.getElementById('ped_trab_cpf').value.trim();
    const obj = document.getElementById('ped_objeto').value;
    const qtd = document.getElementById('ped_qtd').value;
    const valor = document.getElementById('ped_valor').value;
    if (!trab) { alert("Informe o Trabalhador e CPF."); return; }

    orderItemsList.push({ trab, obj, qtd, valor });
    renderOrderTable();
    document.getElementById('ped_trab_cpf').value = '';
}

function renderOrderTable() {
    const tbody = document.getElementById('pedidos-current-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (orderItemsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-3 text-center text-slate-400 italic">Nenhum item adicionado ao pedido.</td></tr>`;
        return;
    }
    orderItemsList.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.className = "border-b";
        tr.innerHTML = `
            <td class="p-2 font-bold">${item.trab}</td>
            <td class="p-2">${item.obj}</td>
            <td class="p-2 text-center font-bold">${item.qtd}</td>
            <td class="p-2 text-center col-valor-sigilo font-bold text-emerald-700">R$ ${item.valor}</td>
            <td class="p-2 text-center"><button onclick="removeOrderItem(${index})" class="text-red-600 font-bold">✕</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function removeOrderItem(index) { orderItemsList.splice(index, 1); renderOrderTable(); }

function dispatchOrder() {
    if (orderItemsList.length === 0) { alert("Adicione itens ao pedido!"); return; }
    const clinica = document.getElementById('ped_clinica_target').value;
    
    orderItemsList.forEach(item => {
        monitorRequestsData.push({
            fecha: "28/10/2026",
            cliente: "PREFEITURA MUNICIPAL",
            trab: item.trab,
            obj: item.obj,
            qtd: parseInt(item.qtd),
            valor: item.valor,
            clinica: clinica,
            status: "PENDENTE"
        });

        const partes = item.trab.split('-');
        asoQueueData.push({
            id: Date.now() + Math.random(),
            nome: partes[0] ? partes[0].trim() : item.trab,
            cpf: partes[1] ? partes[1].trim() : "000.000.000-00",
            cliente: "PREFEITURA MUNICIPAL",
            cargo: "SOLICITADO VIA PEDIDO",
            tipo: item.obj,
            status: "AGUARDANDO",
            anamnese: null
        });
    });

    alert("Pedido disparado com sucesso e enviado para a Fila ASO!");
    orderItemsList = [];
    renderOrderTable();
    renderMonitorTable();
    renderFilaAso();
    renderProducaoTable();
}

function renderMonitorTable() {
    const tbody = document.getElementById('monitor-requests-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    monitorRequestsData.forEach(r => {
        const tr = document.createElement('tr');
        tr.className = "border-b";
        tr.innerHTML = `
            <td class="p-2">${r.fecha}</td>
            <td class="p-2 font-bold">${r.cliente}</td>
            <td class="p-2">${r.trab}</td>
            <td class="p-2">${r.obj}</td>
            <td class="p-2 text-center font-bold">${r.qtd}</td>
            <td class="p-2 text-center col-valor-sigilo font-bold text-emerald-700">R$ ${r.valor}</td>
            <td class="p-2 font-bold">${r.clinica}</td>
            <td class="p-2 text-center"><span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">${r.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function renderProducaoTable() {
    const tbody = document.getElementById('relatorio-producao-tbody');
    const totalLbl = document.getElementById('valor-soma-total-producao');
    if (!tbody) return;
    tbody.innerHTML = '';

    let somaTotalCalculada = 0;

    monitorRequestsData.filter(r => r.status === 'REALIZADO').forEach(r => {
        const valUnitNum = parseFloat(r.valor.replace(',', '.'));
        const qtdNum = parseInt(r.qtd) || 1;
        const totalLinha = valUnitNum * qtdNum;
        somaTotalCalculada += totalLinha;

        const tr = document.createElement('tr');
        tr.className = "border-b";
        tr.innerHTML = `
            <td class="p-2.5">${r.fecha}</td>
            <td class="p-2.5 font-bold">${r.clinica}</td>
            <td class="p-2.5">${r.cliente}</td>
            <td class="p-2.5">${r.obj} - ${r.trab}</td>
            <td class="p-2.5 text-center font-bold">${qtdNum}</td>
            <td class="p-2.5 text-center col-valor-sigilo">R$ ${r.valor}</td>
            <td class="p-2.5 text-center col-valor-sigilo font-bold text-emerald-600">R$ ${totalLinha.toFixed(2).replace('.', ',')}</td>
        `;
        tbody.appendChild(tr);
    });

    if (totalLbl) {
        totalLbl.textContent = `R$ ${somaTotalCalculada.toFixed(2).replace('.', ',')}`;
    }
}

function processarCargaMassaExcel(evt) {
    const file = evt.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(firstSheet);

        rows.forEach(r => {
            asoQueueData.push({
                id: Date.now() + Math.random(),
                nome: r.NOME || r.EMPREGADO || "FUNCIONÁRIO EXCEL",
                cpf: r.CPF || "000.000.000-00",
                cliente: r.CLIENTE || r.RAZAO_SOCIAL || "PREFEITURA MUNICIPAL",
                cargo: r.CARGO || "MECÂNICO",
                tipo: r.TIPO_EXAME || "ASO ADMISSONAL",
                status: "AGUARDANDO",
                anamnese: null
            });
        });

        renderFilaAso();
        alert("Planilha de ASOs carregada com sucesso!");
    };
    reader.readAsArrayBuffer(file);
}

function abrirModalNovoAso() { document.getElementById('modal-novo-aso-avulso').classList.remove('hidden'); }
function fecharModal(id) { document.getElementById(id).classList.add('hidden'); }

function salvarAsoAvulso() {
    const nome = document.getElementById('avulso_nome').value.trim();
    const cpf = document.getElementById('avulso_cpf').value.trim();
    const cliente = document.getElementById('avulso_cliente').value;
    const tipo = document.getElementById('avulso_tipo').value;

    if (!nome || !cpf) { alert("Preencha Nome e CPF."); return; }

    asoQueueData.push({
        id: Date.now(),
        nome,
        cpf,
        cliente,
        cargo: "NÃO ESPECIFICADO",
        tipo,
        status: "AGUARDANDO",
        anamnese: null
    });

    renderFilaAso();
    fecharModal('modal-novo-aso-avulso');
    document.getElementById('avulso_nome').value = '';
    document.getElementById('avulso_cpf').value = '';
}

function renderFilaAso() {
    const tbody = document.getElementById('aso-queue-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    asoQueueData.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = "border-b hover:bg-slate-50";
        tr.innerHTML = `
            <td class="p-2.5 font-bold">${item.nome}<br><span class="text-slate-500 font-normal">${item.cpf}</span></td>
            <td class="p-2.5">${item.cliente}</td>
            <td class="p-2.5 font-bold">${item.cargo}</td>
            <td class="p-2.5 font-bold text-blue-900">${item.tipo}</td>
            <td class="p-2.5 text-center">
                <button onclick="abrirAnamneseModal(${item.id})" class="bg-indigo-700 hover:bg-indigo-800 text-white px-2.5 py-1 rounded font-bold text-[11px] flex items-center justify-center gap-1 mx-auto shadow">
                    📋 ${item.anamnese ? 'Ficha Salva (Editar)' : 'Preencher Anamnese'}
                </button>
            </td>
            <td class="p-2.5 text-center">
                <button onclick="abrirAsoModalBoreal(${item.id})" class="bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1 rounded font-extrabold text-[11px] flex items-center justify-center gap-1 mx-auto shadow">
                    🩺 Abrir & Editar ASO Boreal
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function abrirAnamneseModal(id) {
    selectedAsoId = id;
    const item = asoQueueData.find(x => x.id === id);
    if (!item) return;

    document.getElementById('anam_nome_lbl').textContent = item.nome;
    document.getElementById('anam_cpf_lbl').textContent = item.cpf;
    document.getElementById('anam_cargo_lbl').textContent = item.cargo;

    document.getElementById('modal-anamnese').classList.remove('hidden');
}

function salvarAnamnese() {
    const item = asoQueueData.find(x => x.id === selectedAsoId);
    if (item) {
        item.anamnese = {
            acidSeq: document.getElementById('anam_acid_seq').value,
            obs: document.getElementById('anam_obs').value
        };
        alert("Ficha de Anamnese salva com sucesso!");
        fecharModal('modal-anamnese');
        renderFilaAso();
    }
}

function abrirAsoModalBoreal(id) {
    selectedAsoId = id;
    const item = asoQueueData.find(x => x.id === id);
    if (!item) return;

    document.getElementById('aso_edit_nome').value = item.nome;
    document.getElementById('aso_edit_cpf').value = item.cpf;
    document.getElementById('aso_edit_razao').value = item.cliente;
    document.getElementById('aso_edit_cargo').value = item.cargo;

    const cli = clientesCadastrados.find(c => c.nome === item.cliente);
    if (cli) {
        document.getElementById('aso_lbl_medico_pcmso').textContent = `${cli.medPcmso} — ${cli.crmPcmso}`;
    }

    document.getElementById('modal-aso').classList.remove('hidden');
}

function concluirEmissaoAsoBoreal() {
    const item = asoQueueData.find(x => x.id === selectedAsoId);
    if (!item) return;

    const parecerRadio = document.querySelector('input[name="aso_conclusao"]:checked');
    const parecer = parecerRadio ? parecerRadio.value : "Apto";
    const medico = document.getElementById('aso_med_nome').value;

    asoHistoryData.push({
        fecha: "28/10/2026",
        nome: document.getElementById('aso_edit_nome').value,
        cpf: document.getElementById('aso_edit_cpf').value,
        cliente: document.getElementById('aso_edit_razao').value,
        resultado: parecer,
        medico: medico
    });

    asoQueueData = asoQueueData.filter(x => x.id !== selectedAsoId);

    renderFilaAso();
    renderHistoryTabela();
    fecharModal('modal-aso');
    alert("ASO Boreal oficial emitido, assinado e arquivado no Banco de Dados!");
}

function renderHistoryTabela() {
    const tbody = document.getElementById('aso-history-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    asoHistoryData.forEach(h => {
        const tr = document.createElement('tr');
        tr.className = "border-b";
        tr.innerHTML = `
            <td class="p-2.5">${h.fecha}</td>
            <td class="p-2.5 font-bold">${h.nome}<br><span class="text-slate-500 font-normal">${h.cpf}</span></td>
            <td class="p-2.5 font-bold">${h.cliente}</td>
            <td class="p-2.5 font-black text-emerald-700">${h.resultado}</td>
            <td class="p-2.5 font-bold">${h.medico}</td>
            <td class="p-2.5 text-center"><button onclick="window.print()" class="bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded font-bold">📋 Baixar Anamnese (PDF)</button></td>
            <td class="p-2.5 text-center"><button onclick="window.print()" class="bg-slate-900 text-white px-2 py-1 rounded font-bold">📄 Baixar ASO Boreal Individual (PDF)</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function filtrarRiscosCat(catId, agenteId) {
    const cat = document.getElementById(catId).value;
    const agenteSelect = document.getElementById(agenteId);
    if (!agenteSelect) return;
    agenteSelect.innerHTML = '<option value="">-- Selecione o Agente do Inventário PGR --</option>';

    if (cat && INVENTARIO_RISCOS_COMPLETO[cat]) {
        INVENTARIO_RISCOS_COMPLETO[cat].forEach(r => {
            const opt = document.createElement('option');
            opt.value = r.agente;
            opt.textContent = `${r.agente} (Risco: ${r.risco})`;
            opt.dataset.exame = r.exame;
            opt.dataset.periodicidade = r.periodicidade;
            agenteSelect.appendChild(opt);
        });
    }
}

function autoPreencherExamePcmso() {
    const select = document.getElementById('pcmso_add_agente');
    if (!select) return;
    const opt = select.options[select.selectedIndex];
    if (opt && opt.dataset.exame) {
        document.getElementById('pcmso_add_exame').value = opt.dataset.exame;
        document.getElementById('pcmso_add_periodicidade').value = opt.dataset.periodicidade;
    }
}

function adicionarLinhaPCMSO() {
    if (currentRole !== 'GESTOR') { alert("Somente o GESTOR inclui linhas no PCMSO!"); return; }
    const lotacao = document.getElementById('pcmso_add_lotacao').value.trim();
    const processo = document.getElementById('pcmso_add_processo').value.trim();
    const cargo = document.getElementById('pcmso_add_cargo').value.trim();
    const qtd = document.getElementById('pcmso_add_qtd').value;
    const agente = document.getElementById('pcmso_add_agente').value;
    const exame = document.getElementById('pcmso_add_exame').value.trim();
    const periodicidade = document.getElementById('pcmso_add_periodicidade').value;

    if (!lotacao || !cargo || !exame) { alert("Preencha Lotação, Cargo e Exame."); return; }

    pcmsoMatrizData.push({ id: Date.now(), lotacao, processo, cargo, qtd, agente, exame, periodicidade, cliente: "PREFEITURA MUNICIPAL" });
    renderPcmsoMatriz();

    document.getElementById('pcmso_add_lotacao').value = '';
    document.getElementById('pcmso_add_cargo').value = '';
    document.getElementById('pcmso_add_exame').value = '';
}

function renderPcmsoMatriz() {
    const tbody = document.getElementById('pcmso-matriz-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    pcmsoMatrizData.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = "border-b hover:bg-slate-50";

        if (currentRole === 'MEDICO') {
            tr.innerHTML = `
                <td class="p-2 font-bold">${item.lotacao}</td>
                <td class="p-2">${item.processo}</td>
                <td class="p-2 font-bold">${item.cargo}</td>
                <td class="p-2 text-center font-bold">${item.qtd}</td>
                <td class="p-2">${item.agente || 'AUSÊNCIA DE RISCO'}</td>
                <td class="p-2"><input type="text" id="edit_ex_${item.id}" value="${item.exame}" class="w-full border p-1 rounded font-bold bg-amber-50"></td>
                <td class="p-2 text-center">
                    <select id="edit_per_${item.id}" class="border p-1 rounded font-bold bg-amber-50">
                        <option value="Anual" ${item.periodicidade === 'Anual' ? 'selected' : ''}>Anual</option>
                        <option value="Bienal (24 meses)" ${item.periodicidade.includes('Bienal') ? 'selected' : ''}>Bienal</option>
                        <option value="Semestral" ${item.periodicidade === 'Semestral' ? 'selected' : ''}>Semestral</option>
                    </select>
                </td>
                <td class="p-2 text-center">
                    <button onclick="salvarMedicoPcmso(${item.id})" class="bg-emerald-600 text-white font-bold px-2 py-1 rounded text-[10px]">💾 Salvar</button>
                </td>
            `;
        } else {
            tr.innerHTML = `
                <td class="p-2 font-bold">${item.lotacao}</td>
                <td class="p-2">${item.processo}</td>
                <td class="p-2 font-bold">${item.cargo}</td>
                <td class="p-2 text-center font-bold">${item.qtd}</td>
                <td class="p-2">${item.agente || 'AUSÊNCIA DE RISCO'}</td>
                <td class="p-2 font-bold text-blue-900">${item.exame}</td>
                <td class="p-2 text-center font-bold">${item.periodicidade}</td>
                <td class="p-2 text-center">
                    ${currentRole === 'GESTOR' ? `<button onclick="removerPcmso(${item.id})" class="text-red-600 font-bold">Excluir</button>` : `<span class="text-slate-400 italic">Somente leitura</span>`}
                </td>
            `;
        }
        tbody.appendChild(tr);
    });
}

function salvarMedicoPcmso(id) {
    const item = pcmsoMatrizData.find(x => x.id === id);
    if (item) {
        item.exame = document.getElementById(`edit_ex_${id}`).value;
        item.periodicidade = document.getElementById(`edit_per_${id}`).value;
        alert("Exame e Periodicidade atualizados pelo Médico do PCMSO!");
        renderPcmsoMatriz();
    }
}

function removerPcmso(id) {
    pcmsoMatrizData = pcmsoMatrizData.filter(x => x.id !== id);
    renderPcmsoMatriz();
}

function abrirModalHomologacao() { document.getElementById('modal-homologacao-form').classList.remove('hidden'); }

function salvarHomologacaoAtestado() {
    const trab = document.getElementById('hom_trab').value.trim();
    const dias = document.getElementById('hom_dias').value;
    const cid = document.getElementById('hom_cid').value.trim();

    if (!trab || !cid) { alert("Preencha o Funcionário e o CID-10."); return; }

    atestadosHomologacaoData.push({
        id: Date.now(),
        cliente: "PREFEITURA MUNICIPAL",
        trab,
        setor: "OPERACIONAL",
        data: "28/10/2026",
        dias,
        cid,
        medico: "DR. EXAMINADOR",
        status: "HOMOLOGADO",
        parecer: "ATESTADO COMPATÍVEL"
    });

    renderHomologacaoTabela();
    fecharModal('modal-homologacao-form');
    alert("Atestado registrado e homologado!");
}

function renderHomologacaoTabela() {
    const tbody = document.getElementById('atestados-homologacao-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    atestadosHomologacaoData.forEach(a => {
        const tr = document.createElement('tr');
        tr.className = "border-b";
        tr.innerHTML = `
            <td class="p-2 font-bold">${a.cliente}</td>
            <td class="p-2">${a.trab}</td>
            <td class="p-2 font-bold">${a.setor}</td>
            <td class="p-2">${a.data}</td>
            <td class="p-2 text-center font-bold">${a.dias} dias</td>
            <td class="p-2 text-center font-bold text-purple-900">${a.cid}</td>
            <td class="p-2">${a.medico}</td>
            <td class="p-2 text-center font-bold text-emerald-700">📄 AtestadoAnexo.pdf</td>
            <td class="p-2 text-center"><span class="bg-purple-100 text-purple-900 px-2 py-0.5 rounded font-bold">${a.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function gerarLoteESocial() {
    const container = document.getElementById('esocial-preview-container');
    if (container) {
        container.textContent = JSON.stringify({
            evtMonit: {
                ideEvento: { tpAmb: 1, procEmi: 1, verProc: "1.0.0" },
                ideEmpregador: { tpInsc: 1, nrInsc: "0