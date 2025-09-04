document.addEventListener('DOMContentLoaded', () => {
    // Função para personalizar o título
    const personalizarTitulo = () => {
        const heroTitle = document.getElementById('main-headline');
        if (!heroTitle) return;

        const userGoal = localStorage.getItem('userGoal');
        if (userGoal) {
            let novoTitulo = heroTitle.textContent; 
            if (userGoal === 'atrair') novoTitulo = "Vamos Criar a Estratégia Perfeita para Atrair Mais Clientes";
            else if (userGoal === 'vender') novoTitulo = "Transforme o Seu Site Numa Máquina de Vendas Online";
            else if (userGoal === 'organizar') novoTitulo = "Organize as Suas Redes Sociais e Conecte-se com o Seu Público";
            heroTitle.textContent = novoTitulo;
        }
    };

    // Inicializa todas as funcionalidades
    const initSlider = () => {
        const slider = document.querySelector('.slider-container');
        if (!slider) return;

        const beforeImage = slider.querySelector('.before-image');
        const handle = slider.querySelector('.slider-handle');
        let isDragging = false;

        const startDrag = () => { isDragging = true; };
        const stopDrag = () => { isDragging = false; };

        const onDrag = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const rect = slider.getBoundingClientRect();
            let offsetX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
            offsetX = Math.max(0, Math.min(offsetX, rect.width));
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
    };

    const initWelcomeBanner = () => {
        const banner = document.getElementById('welcome-banner');
        if (!banner || localStorage.getItem('bannerDismissed')) return;
        
        const closeBtn = document.getElementById('close-banner');
        const optionBtns = document.querySelectorAll('.banner-btn');

        setTimeout(() => banner.classList.add('show'), 1500);

        const dismissBanner = (goal = null) => {
            banner.classList.remove('show');
            localStorage.setItem('bannerDismissed', 'true');
            if (goal) {
                localStorage.setItem('userGoal', goal);
                personalizarTitulo();
            }
        };

        closeBtn.addEventListener('click', () => dismissBanner());
        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => dismissBanner(btn.dataset.goal));
        });
    };

    const initIdeaGenerator = () => {
        const gerarIdeiaBtn = document.getElementById('gerar-ideia-btn');
        if (!gerarIdeiaBtn) return;

        const nichoSelect = document.getElementById('nicho-select');
        const ideiaResultadoDiv = document.getElementById('ideia-resultado');
        const ideiasDeConteudo = {
            restaurante: ["Faça um vídeo curto a mostrar a preparação do seu prato mais popular.", "Poste uma foto de um cliente satisfeito (com a permissão dele!) e conte uma pequena história.", "Crie uma votação nos stories: 'Qual destes pratos deve ter um desconto esta semana?'"],
            loja: ["Crie um 'Look do Dia' combinando 3 peças do seu stock.", "Faça um vídeo 'unboxing' a mostrar as novidades que acabaram de chegar.", "Poste um carrossel com 5 formas diferentes de usar o seu produto mais vendido."],
            servicos: ["Dê uma 'dica rápida' em vídeo de 1 minuto que resolva um pequeno problema do seu cliente.", "Publique um depoimento de um cliente e marque-o, agradecendo a parceria.", "Desmistifique um mito comum na sua área de atuação."]
        };

        gerarIdeiaBtn.addEventListener('click', () => {
            const nichoEscolhido = nichoSelect.value;
            const listaDeIdeias = ideiasDeConteudo[nichoEscolhido];
            const ideiaAleatoria = listaDeIdeias[Math.floor(Math.random() * listaDeIdeias.length)];
            ideiaResultadoDiv.innerHTML = `<p>${ideiaAleatoria}</p>`;
        });
    };

    const initDigitalAudit = () => {
        const calcularBtn = document.getElementById('calcular-score-btn');
        if (!calcularBtn) return;

        const resultadoDiv = document.getElementById('auditoria-resultado');
        const perguntasDiv = document.querySelector('.auditoria-perguntas');
        
        calcularBtn.addEventListener('click', () => {
            const questions = document.querySelectorAll('.pergunta-bloco');
            let score = 0;
            let answeredQuestions = 0;

            questions.forEach(pergunta => {
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

            let nivel, texto, recomendacoes = [];

            if (score <= 1) {
                nivel = 'Iniciante';
                texto = 'A sua presença digital está nos primeiros passos. Existe um enorme potencial de crescimento à sua frente!';
                recomendacoes = ['<strong>Prioridade Máxima:</strong> Crie e otimize o seu perfil no Google Meu Negócio.', '<strong>Essencial:</strong> Garanta que o seu site seja rápido e funcione perfeitamente em telemóveis.', '<strong>Primeiros Passos:</strong> Comece a planear um calendário de publicações para as redes sociais.'];
            } else if (score <= 3) {
                nivel = 'Intermediário';
                texto = 'Você já tem uma base sólida, mas há oportunidades claras para acelerar o seu crescimento.';
                recomendacoes = ['<strong>Próximo Nível:</strong> Invista em tráfego pago para alcançar novos públicos.', '<strong>Consistência é Chave:</strong> Mantenha uma frequência constante de publicações nas redes sociais.', '<strong>Otimização:</strong> Analise as métricas do seu site e redes para entender o que funciona melhor.'];
            } else {
                nivel = 'Avançado';
                texto = 'Parabéns, a sua presença digital já é forte! O foco agora é em otimizar e escalar os seus resultados.';
                recomendacoes = ['<strong>Escala:</strong> Aumente o investimento em campanhas de anúncios que já demonstraram bons resultados.', '<strong>Engajamento:</strong> Crie campanhas interativas que gerem conversas com o seu público.', '<strong>Análise Preditiva:</strong> Use os dados que já tem para prever tendências e tomar decisões.'];
            }

            scoreValorSpan.textContent = nivel;
            scoreTextoP.textContent = texto;
            scoreRecomendacoesUl.innerHTML = recomendacoes.map(rec => `<li><i class="fa-solid fa-circle-check"></i>${rec}</li>`).join('');
            resultadoDiv.style.display = 'block';
        });
    };

    // Executa tudo
    personalizarTitulo();
    initSlider();
    initWelcomeBanner();
    initIdeaGenerator();
    initDigitalAudit();
});