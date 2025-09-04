// Função para personalizar o título
function personalizarTitulo() {
    const heroTitle = document.getElementById('main-headline');
    if (!heroTitle) return;

    const userGoal = localStorage.getItem('userGoal');

    if (userGoal) {
        let novoTitulo = heroTitle.textContent; 

        if (userGoal === 'atrair') {
            novoTitulo = "Vamos Criar a Estratégia Perfeita para Atrair Mais Clientes";
        } else if (userGoal === 'vender') {
            novoTitulo = "Transforme o Seu Site Numa Máquina de Vendas Online";
        } else if (userGoal === 'organizar') {
            novoTitulo = "Organize as Suas Redes Sociais e Conecte-se com o Seu Público";
        }
        
        heroTitle.textContent = novoTitulo;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Slider "Antes e Depois"
    const slider = document.querySelector('.slider-container');
    if (slider) {
        const beforeImage = slider.querySelector('.before-image');
        const handle = slider.querySelector('.slider-handle');
        let isDragging = false;

        const startDrag = () => { isDragging = true; };
        const stopDrag = () => { isDragging = false; };

        const onDrag = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const rect = slider.getBoundingClientRect();
            let offsetX = (e.clientX || e.touches[0].clientX) - rect.left;
            if (offsetX < 0) offsetX = 0;
            if (offsetX > rect.width) offsetX = rect.width;
            const percent = (offsetX / rect.width) * 100;
            beforeImage.style.width = percent + '%';
            handle.style.left = percent + '%';
        };

        handle.addEventListener('mousedown', startDrag);
        window.addEventListener('mouseup', stopDrag);
        slider.addEventListener('mousemove', onDrag);
        slider.addEventListener('mouseleave', stopDrag);
        handle.addEventListener('touchstart', startDrag, { passive: true });
        window.addEventListener('touchend', stopDrag);
        slider.addEventListener('touchmove', onDrag);
    }

    // Lógica do Banner de Boas-Vindas
    const banner = document.getElementById('welcome-banner');
    const closeBtn = document.getElementById('close-banner');
    const optionBtns = document.querySelectorAll('.banner-btn');

    if (banner && !localStorage.getItem('bannerDismissed')) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 1500);
    }

    function dismissBanner(goal = null) {
        if (banner) {
            banner.classList.remove('show');
        }
        localStorage.setItem('bannerDismissed', 'true');
        if (goal) {
            localStorage.setItem('userGoal', goal);
            personalizarTitulo();
        }
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => dismissBanner());
    }

    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const goal = btn.getAttribute('data-goal');
            dismissBanner(goal);
        });
    });
    
    // Lógica do Gerador de Ideias de Conteúdo
    const gerarIdeiaBtn = document.getElementById('gerar-ideia-btn');
    const nichoSelect = document.getElementById('nicho-select');
    const ideiaResultadoDiv = document.getElementById('ideia-resultado');

    const ideiasDeConteudo = {
        restaurante: [
            "Faça um vídeo curto a mostrar a preparação do seu prato mais popular.",
            "Poste uma foto de um cliente satisfeito (com a permissão dele!) e conte uma pequena história.",
            "Crie uma votação nos stories: 'Qual destes pratos deve ter um desconto esta semana?'",
            "Mostre os bastidores da sua cozinha ou a chegada de ingredientes frescos.",
            "Publique a 'história do dia': um facto curioso sobre um dos seus ingredientes."
        ],
        loja: [
            "Crie um 'Look do Dia' combinando 3 peças do seu stock e explique a combinação.",
            "Faça um vídeo 'unboxing' a mostrar as novidades que acabaram de chegar.",
            "Poste um carrossel com 5 formas diferentes de usar o seu produto mais vendido.",
            "Inicie uma conversa: 'Qual tendência da moda você mais gosta neste momento?'",
            "Mostre o processo de embalagem de uma encomenda, destacando o seu cuidado e carinho."
        ],
        servicos: [
            "Dê uma 'dica rápida' em vídeo de 1 minuto que resolva um pequeno problema do seu cliente.",
            "Publique um depoimento de um cliente e marque-o, agradecendo a parceria.",
            "Desmistifique um mito comum na sua área de atuação.",
            "Crie um post 'Antes e Depois' a mostrar o resultado do seu serviço.",
            "Faça uma lista de 3 ferramentas (apps, livros, etc.) que você recomenda para profissionais da sua área."
        ]
    };

    function gerarIdeia() {
        if (!nichoSelect || !ideiaResultadoDiv) return;

        const nichoEscolhido = nichoSelect.value;
        const listaDeIdeias = ideiasDeConteudo[nichoEscolhido];
        const ideiaAleatoria = listaDeIdeias[Math.floor(Math.random() * listaDeIdeias.length)];

        ideiaResultadoDiv.innerHTML = `<p>${ideiaAleatoria}</p>`;
    }

    if (gerarIdeiaBtn) {
        gerarIdeiaBtn.addEventListener('click', gerarIdeia);
    }
    
    // Lógica da Auditoria Digital
    const calcularBtn = document.getElementById('calcular-score-btn');
    if (calcularBtn) {
        const resultadoDiv = document.getElementById('auditoria-resultado');
        const perguntasDiv = document.querySelector('.auditoria-perguntas');
        
        calcularBtn.addEventListener('click', () => {
            const questions = document.querySelectorAll('.pergunta-bloco');
            let score = 0;
            let answeredQuestions = 0;

            questions.forEach((pergunta, index) => {
                const radioChecked = pergunta.querySelector('input[type="radio"]:checked');
                if (radioChecked) {
                    score += parseInt(radioChecked.value);
                    answeredQuestions++;
                }
            });

            if (answeredQuestions < questions.length) {
                alert('Por favor, responda a todas as perguntas para ver o seu diagnóstico.');
                return;
            }

            perguntasDiv.style.display = 'none';
            calcularBtn.style.display = 'none';
            
            const scoreValorSpan = document.getElementById('score-valor');
            const scoreTextoP = document.getElementById('score-texto');
            const scoreRecomendacoesUl = document.getElementById('score-recomendacoes');

            let nivel = '';
            let texto = '';
            let recomendacoes = [];

            if (score <= 1) {
                nivel = 'Iniciante';
                texto = 'A sua presença digital está nos primeiros passos. Existe um enorme potencial de crescimento à sua frente!';
                recomendacoes = [
                    '<strong>Prioridade Máxima:</strong> Crie e otimize o seu perfil no Google Meu Negócio para ser encontrado localmente.',
                    '<strong>Essencial:</strong> Garanta que o seu site seja rápido e funcione perfeitamente em telemóveis.',
                    '<strong>Primeiros Passos:</strong> Comece a planear um calendário de publicações simples para as redes sociais.'
                ];
            } else if (score <= 3) {
                nivel = 'Intermediário';
                texto = 'Você já tem uma base sólida, mas há oportunidades claras para acelerar o seu crescimento e superar a concorrência.';
                recomendacoes = [
                    '<strong>Próximo Nível:</strong> Invista em tráfego pago para alcançar novos públicos de forma segmentada.',
                    '<strong>Consistência é Chave:</strong> Mantenha uma frequência constante de publicações de valor nas redes sociais.',
                    '<strong>Otimização:</strong> Analise as métricas do seu site e redes para entender o que funciona melhor.'
                ];
            } else { // score === 4
                nivel = 'Avançado';
                texto = 'Parabéns, a sua presença digital já é forte! O foco agora é em otimizar processos e escalar os seus resultados.';
                recomendacoes = [
                    '<strong>Escala:</strong> Aumente o investimento em campanhas de anúncios que já demonstraram bons resultados.',
                    '<strong>Engajamento:</strong> Crie campanhas interativas e conteúdo que gere conversas com o seu público.',
                    '<strong>Análise Preditiva:</strong> Use os dados que já tem para prever tendências e tomar decisões estratégicas.'
                ];
            }

            scoreValorSpan.textContent = nivel;
            scoreTextoP.textContent = texto;
            scoreRecomendacoesUl.innerHTML = recomendacoes.map(rec => `<li><i class="fa-solid fa-circle-check"></i>${rec}</li>`).join('');

            resultadoDiv.style.display = 'block';
        });
    }

    // Executa a personalização do título assim que a página carregar
    personalizarTitulo();
});