window.addEventListener('load', () => {
    // Custom Cursor Logic
    const customCursor = document.getElementById('custom-cursor');
    if (customCursor) {
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        });

        // Hover states for the custom cursor
        const interactiveElements = document.querySelectorAll('a, button, .node-card, .brutal-img');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => customCursor.classList.remove('hovering'));
        });
    }

    // Reduzido o tempo de entrada no site (de 2400ms para 400ms)
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const hero = document.getElementById('hero');
        
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        hero.classList.add('visible');
        
        setTimeout(() => {
            loader.remove();
        }, 1000);
    }, 400);

    // Sistema de Internacionalização (i18n)
    const translations = {
        en: {
            flag: "🇺🇸",
            code: "EN",
            play_free: "PLAY FOR FREE",
            monthly_players: "MONTHLY PLAYERS 29,399,919",
            news: "NEWS",
            faq: "FAQ",
            download: "DOWNLOAD",
            right_ui_text: "ATTENTION TO DETAIL",
            workshop_text_top: "THE COMMUNITY BUILDS<br>A WEAPON'S VISUAL IDENTITY",
            workshop_text_bottom: "COLLECT, TRADE & CUSTOMIZE<br>YOUR LOADOUT ARCHIVE",
            btn_workshop: "ACCESS WORKSHOP",
            teams_section_tag: "VALVE REGIONAL STANDINGS",
            teams_section_title: "TOP GLOBAL TEAMS",
            teams_section_sub: "Interactive Ranking Wheel — Select a team to inspect standings",
            esport_top_tag: "CS2 SCENE",
            esport_huge_title: "DISCOVER<br><span class=\"light\">THE COMPETITIVE</span><br>FORMAT",
            esport_top_subtext: "SHAPED BY MILLIONS<br>OF GLOBAL PLAYERS",
            esport_top_right: "3 competitive tiers — matched to your skill level<br>and the level of challenge you need to conquer.",
            card1_tag: "GRASSROOTS",
            card1_subtitle: "FOR CASUAL & LOCAL",
            card1_desc: "1-2 servers (e.g. community maps), basic match scenarios, local support.",
            card1_price_huge: "FREE",
            card2_tag: "MAJORS <span class=\"star\">★</span>",
            card2_subtitle: "FOR ELITE TEAMS",
            card2_desc: "Unlimited viewership, massive arenas, dedicated global support.",
            card2_price_huge: "GLOBAL",
            card2_price_period: "ELITE",
            card3_tag: "PREMIER",
            card3_subtitle: "FOR ACTIVE PLAYERS",
            card3_desc: "Up to 5 stack, global leaderboards, rank qualification, stat management.",
            card3_price_huge: "PRIME",
            card3_price_period: "REQ",
            esport_footer_note: "The competitive scene runs globally regardless of the number of teams — you play for the rank, not for individual stats.<br>Train upfront for 6 or 12 months and get a 10-15% skill increase.<br>A one-time setup and hardware fee applies separately,<br>depending on setup complexity.",
            footer_privacy: "PRIVACY POLICY",
            footer_legal: "LEGAL",
            footer_agreement: "STEAM SUBSCRIBER AGREEMENT",
            footer_support: "SUPPORT",
            footer_copyright: "This is a fan concept. All rights reserved to Valve Corporation.<br>Designed by Gustavo Kael: <a href=\"https://www.behance.net/kaelhash\" target=\"_blank\" style=\"color: #888;\">https://www.behance.net/kaelhash</a>",
            phrases: [
                "IN PURSUIT OF<br>PERFECTION",
                "FLAWLESS<br>EXECUTION",
                "TACTICAL<br>PRECISION",
                "UNMATCHED<br>EXCELLENCE",
                "GLOBAL<br>DOMINATION"
            ]
        },
        pt: {
            flag: "🇧🇷",
            code: "PT",
            play_free: "JOGUE DE GRAÇA",
            monthly_players: "JOGADORES MENSAIS 29.399.919",
            news: "NOTÍCIAS",
            faq: "FAQ",
            download: "BAIXAR",
            right_ui_text: "ATENÇÃO AOS DETALHES",
            workshop_text_top: "A COMUNIDADE CRIA<br>A IDENTIDADE VISUAL DAS ARMAS",
            workshop_text_bottom: "COLETE, NEGOCIE E PERSONALIZE<br>O SEU ARSENAL DE COMBATE",
            btn_workshop: "ACESSAR OFICINA",
            teams_section_tag: "RANKING REGIONAL VALVE",
            teams_section_title: "MELHORES TIMES DO MUNDO",
            teams_section_sub: "Roda de Ranking Interativa — Selecione um time para ver a classificação",
            esport_top_tag: "CENÁRIO CS2",
            esport_huge_title: "DESCUBRA<br><span class=\"light\">O FORMATO</span><br>COMPETITIVO",
            esport_top_subtext: "MOLDADO POR MILHÕES<br>DE JOGADORES NO MUNDO",
            esport_top_right: "3 níveis competitivos — ajustados ao seu nível de habilidade<br>e ao desafio que você precisa conquistar.",
            card1_tag: "AMADOR",
            card1_subtitle: "PARA CASUAIS E LOCAIS",
            card1_desc: "1-2 servidores (ex: mapas comunitários), cenários básicos de partida, suporte local.",
            card1_price_huge: "GRÁTIS",
            card2_tag: "MAJORS <span class=\"star\">★</span>",
            card2_subtitle: "PARA TIMES DE ELITE",
            card2_desc: "Audiência ilimitada, arenas massivas, suporte global dedicado.",
            card2_price_huge: "GLOBAL",
            card2_price_period: "ELITE",
            card3_tag: "PREMIER",
            card3_subtitle: "PARA JOGADORES ATIVOS",
            card3_desc: "Lobby de até 5 jogadores, ranqueamento global, qualificação e estatísticas.",
            card3_price_huge: "PRIME",
            card3_price_period: "OBRIG",
            esport_footer_note: "O cenário competitivo funciona globalmente independente do número de times — joga-se pela patente, não por estatísticas individuais.<br>Treine focado por 6 a 12 meses e alcance uma evolução de 10-15% em habilidade.<br>Configurações e periféricos aplicam-se separadamente,<br>conforme a complexidade do setup.",
            footer_privacy: "POLÍTICA DE PRIVACIDADE",
            footer_legal: "JURÍDICO",
            footer_agreement: "CONTRATO DE SUBSCRIÇÃO STEAM",
            footer_support: "SUPORTE",
            footer_copyright: "Este é um projeto conceitual de fã. Todos os direitos reservados à Valve Corporation.<br>Designed by Gustavo Kael: <a href=\"https://www.behance.net/kaelhash\" target=\"_blank\" style=\"color: #888;\">https://www.behance.net/kaelhash</a>",
            phrases: [
                "EM BUSCA DA<br>PERFEIÇÃO",
                "EXECUÇÃO<br>IMPECÁVEL",
                "PRECISÃO<br>TÁTICA",
                "EXCELÊNCIA<br>INIGUALÁVEL",
                "DOMINAÇÃO<br>GLOBAL"
            ]
        },
        ru: {
            flag: "🇷🇺",
            code: "RU",
            play_free: "ИГРАТЬ БЕСПЛАТНО",
            monthly_players: "ИГРОКОВ В МЕСЯЦ 29 399 919",
            news: "НОВОСТИ",
            faq: "FAQ",
            download: "СКАЧАТЬ",
            right_ui_text: "ВНИМАНИЕ К ДЕТАЛЯМ",
            workshop_text_top: "СООБЩЕСТВО СОЗДАЕТ<br>ВИЗУАЛЬНЫЙ СТИЛЬ ОРУЖИЯ",
            workshop_text_bottom: "КОЛЛЕКЦИОНИРУЙТЕ И МЕНЯЙТЕ<br>СВОЙ БОЕВОЙ АРСЕНАЛ",
            btn_workshop: "ПЕРЕЙТИ В МАСТЕРСКУЮ",
            teams_section_tag: "РЕЙТИНГ КОМАНД VALVE",
            teams_section_title: "ТОП КОМАНД МИРА",
            teams_section_sub: "Интерактивное колесо рейтинга — выберите команду для просмотра",
            esport_top_tag: "СЦЕНА CS2",
            esport_huge_title: "ОТКРОЙТЕ<br><span class=\"light\">СОРЕВНОВАТЕЛЬНЫЙ</span><br>ФОРМАТ",
            esport_top_subtext: "СОЗДАН МИЛЛИОНАМИ<br>ИГРОКОВ ПО ВСЕМУ МИРУ",
            esport_top_right: "3 соревновательных уровня — под ваш уровень навыка<br>и сложность испытаний, которые предстоит преодолеть.",
            card1_tag: "ЛЮБИТЕЛЬСКИЙ",
            card1_subtitle: "ДЛЯ ЛЮБИТЕЛЕЙ И КЛУБОВ",
            card1_desc: "1-2 сервера (кастомные карты), базовые сценарии матчей, локальная поддержка.",
            card1_price_huge: "БЕСПЛАТНО",
            card2_tag: "МЕЙДЖОРЫ <span class=\"star\">★</span>",
            card2_subtitle: "ДЛЯ ЭЛИТНЫХ КОМАНД",
            card2_desc: "Миллионы зрителей, масштабные арены, выделенная поддержка турниров.",
            card2_price_huge: "ГЛОБАЛ",
            card2_price_period: "ЭЛИТА",
            card3_tag: "ПРЕМЬЕР",
            card3_subtitle: "ДЛЯ АКТИВНЫХ ИГРОКОВ",
            card3_desc: "Группы до 5 игроков, глобальный рейтинг, квалификация и подробная статистика.",
            card3_price_huge: "PRIME",
            card3_price_period: "ТРЕБ",
            esport_footer_note: "Соревновательная сцена действует глобально независимо от числа команд — играйте на рейтинг, а не на личную статистику.<br>Тренируйтесь регулярно в течение 6–12 месяцев и улучшайте свои навыки на 10–15%.<br>Параметры оборудования и настройки применяются отдельно,<br>в зависимости от конфигурации.",
            footer_privacy: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
            footer_legal: "ПРАВОВАЯ ИНФОРМАЦИЯ",
            footer_agreement: "СОГЛАШЕНИЕ ПОДПИСЧИКА STEAM",
            footer_support: "ПОДДЕРЖКА",
            footer_copyright: "Это фанатский концепт. Все права принадлежат Valve Corporation.<br>Дизайн от Kaelhash: <a href=\"https://www.behance.net/kaelhash\" target=\"_blank\" style=\"color: #888;\">https://www.behance.net/kaelhash</a>",
            phrases: [
                "В ПОГОНЕ ЗА<br>СОВЕРШЕНСТВОМ",
                "БЕЗУПРЕЧНОЕ<br>ИСПОЛНЕНИЕ",
                "ТАКТИЧЕСКАЯ<br>ТОЧНОСТЬ",
                "НЕПРЕВЗОЙДЕННОЕ<br>МАСТЕРСТВО",
                "МИРОВОЕ<br>ГОСПОДСТВО"
            ]
        }
    };

    let currentLanguage = localStorage.getItem('cs2_selected_lang') || 'en';
    let currentPhrases = translations[currentLanguage].phrases;
    let phraseIndex = 0;

    const leftUiText = document.querySelector('.left-ui .ui-text');
    const leftUi = document.querySelector('.left-ui');

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLanguage = lang;
        localStorage.setItem('cs2_selected_lang', lang);

        const data = translations[lang];

        // Atualiza botão do seletor
        const flagEl = document.getElementById('current-lang-flag');
        const codeEl = document.getElementById('current-lang-code');
        if (flagEl) flagEl.textContent = data.flag;
        if (codeEl) codeEl.textContent = data.code;

        // Atualiza opções ativas no dropdown
        document.querySelectorAll('.lang-option').forEach(opt => {
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        // Atualiza todos os elementos com data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key] !== undefined) {
                el.innerHTML = data[key];
            }
        });

        // Atualiza as frases rotativas da HUD
        currentPhrases = data.phrases;
        if (leftUiText) {
            leftUiText.innerHTML = currentPhrases[phraseIndex % currentPhrases.length];
        }
    }

    // Dropdown toggle
    const langWrapper = document.querySelector('.lang-selector-wrapper');
    const langBtn = document.getElementById('lang-current-btn');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langBtn && langWrapper) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langWrapper.classList.toggle('open');
        });

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                setLanguage(selectedLang);
                langWrapper.classList.remove('open');
            });
        });

        document.addEventListener('click', () => {
            langWrapper.classList.remove('open');
        });
    }

    // Inicializa o idioma salvo/padrão
    setLanguage(currentLanguage);

    // Loop de animação das frases da HUD
    setInterval(() => {
        phraseIndex = (phraseIndex + 1) % currentPhrases.length;
        const newText = currentPhrases[phraseIndex];
        
        if (leftUi && leftUiText) {
            leftUi.classList.remove('ui-recreate');
            void leftUi.offsetWidth;
            
            leftUiText.innerHTML = newText;
            leftUi.classList.toggle('inverted-draw');
            leftUi.classList.add('ui-recreate');
        }
    }, 4000);

    // Funções de controle do player de vídeo do YouTube
    const videoIframe = document.getElementById('cs-trailer-video');
    
    function playTrailerVideo() {
        if (videoIframe && videoIframe.contentWindow) {
            videoIframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'playVideo',
                args: []
            }), '*');
            videoIframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'unMute',
                args: []
            }), '*');
            videoIframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'setVolume',
                args: [100]
            }), '*');
        }
    }

    function pauseTrailerVideo() {
        if (videoIframe && videoIframe.contentWindow) {
            videoIframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'pauseVideo',
                args: []
            }), '*');
            videoIframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'mute',
                args: []
            }), '*');
        }
    }

    // Inicia vídeo automaticamente com o site
    setTimeout(() => {
        playTrailerVideo();
    }, 500);

    // Observer para a segunda sessão (Vídeo)
    const videoSection = document.querySelector('.video-section');
    const numTwo = document.querySelector('.number-two-intro');
    const videoContainer = document.querySelector('.video-container');
    let videoIntroPlayed = false;
    let videoTimeout = null;

    if (videoSection && numTwo && videoContainer) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!videoIntroPlayed) {
                        videoSection.classList.add('animating-glows');
                        
                        // Number 2 appears precisely at the peak of the glow crash (1 second)
                        setTimeout(() => {
                            numTwo.classList.add('animate');
                        }, 1000);

                        // Number 2 stays solid for 3 seconds total before video
                        videoTimeout = setTimeout(() => {
                            videoSection.classList.remove('animating-glows');
                            numTwo.classList.remove('animate'); // Hide number 2 as video appears
                            videoContainer.classList.add('visible');
                            
                            // Let the video fade in for a moment, then play
                            setTimeout(() => {
                                playTrailerVideo();
                                videoIntroPlayed = true;
                            }, 500);
                        }, 4000);
                    } else {
                        videoContainer.classList.add('visible');
                        playTrailerVideo();
                    }
                } else {
                    if (videoTimeout && !videoIntroPlayed) {
                        clearTimeout(videoTimeout);
                        videoSection.classList.remove('animating-glows');
                        numTwo.classList.remove('animate');
                    }
                    pauseTrailerVideo();
                }
            });
        }, { threshold: 0.4 });
        videoObserver.observe(videoSection);
    }

    // Top Teams Circular Carousel Logic
    const teamsData = [
        { name: "Vitality", flag: "🇫🇷", logo: "vitality_logo.png", points: "3781.3 EGW Points", rank: "#1 GLOBAL RANK" },
        { name: "Team Spirit", flag: "🏳️", logo: "spirit_logo.webp", points: "3455.7 EGW Points", rank: "#2 GLOBAL RANK" },
        { name: "MOUZ", flag: "🇪🇺", logo: "mouz_logo.png", points: "3261.9 EGW Points", rank: "#3 GLOBAL RANK" },
        { name: "NaVi", flag: "🇺🇦", logo: "navi_logo.png", points: "2760.6 EGW Points", rank: "#4 GLOBAL RANK" },
        { name: "The MongolZ", flag: "🇲🇳", logo: "mongolz_logo.png", points: "2747.0 EGW Points", rank: "#5 GLOBAL RANK" },
        { name: "FURIA", flag: "🇧🇷", logo: "furia_logo.png", points: "2734.5 EGW Points", rank: "#6 GLOBAL RANK" },
        { name: "G2 Esports", flag: "🇩🇪", logo: "g2_logo.webp", points: "2687.9 EGW Points", rank: "#7 GLOBAL RANK" },
        { name: "Falcons", flag: "🇫🇷", logo: "falcons_logo.png", points: "2666.9 EGW Points", rank: "#8 GLOBAL RANK" }
    ];

    let currentTeamIndex = 0;
    const teamsWheel = document.getElementById('teams-wheel');
    const wheelNodes = document.querySelectorAll('.wheel-node');
    const atcFlag = document.getElementById('atc-flag');
    const atcRank = document.getElementById('atc-rank');
    const atcName = document.getElementById('atc-name');
    const atcPoints = document.getElementById('atc-points');

    // Inicializa as imagens nos nós da roda
    wheelNodes.forEach((node, idx) => {
        node.style.setProperty('--index', idx);
        const team = teamsData[idx];
        const flagEl = node.querySelector('.node-flag');
        if (flagEl) {
            if (team.logo) {
                flagEl.innerHTML = `<img src="${team.logo}" alt="${team.name}" class="node-logo-img">`;
            } else {
                flagEl.textContent = team.flag;
            }
        }
    });

    let currentWheelRotation = 0;
    let isSeeking = false;
    let targetRotation = 0;

    function updateActiveTeam(index) {
        currentTeamIndex = index;
        const team = teamsData[currentTeamIndex];

        wheelNodes.forEach((node, idx) => {
            if (idx === currentTeamIndex) {
                node.classList.add('active');
            } else {
                node.classList.remove('active');
            }
        });

        const activeCard = document.getElementById('active-team-card');
        if (activeCard) {
            activeCard.style.opacity = '0.5';
            activeCard.style.transform = 'translate(-50%, -50%) scale(0.97)';
            setTimeout(() => {
                const atcFlag = document.getElementById('atc-flag');
                const atcRank = document.getElementById('atc-rank');
                const atcName = document.getElementById('atc-name');
                const atcPoints = document.getElementById('atc-points');
                
                if (atcFlag) {
                    if (team.logo) {
                        atcFlag.innerHTML = `<img src="${team.logo}" alt="${team.name}" class="atc-logo-img">`;
                    } else {
                        atcFlag.textContent = team.flag;
                    }
                }
                if (atcRank) atcRank.innerHTML = team.rank.replace(/^(#\d+)/, '<span style="color: #002FEF;">$1</span>');
                if (atcName) atcName.textContent = team.name;
                if (atcPoints) atcPoints.textContent = team.points;
                
                activeCard.style.opacity = '1';
                activeCard.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 150);
        }
    }

    // Adiciona evento de click nos nodes
    wheelNodes.forEach((node, idx) => {
        node.addEventListener('click', () => {
            const currentMod = currentWheelRotation % 360;
            let targetAngle = - (idx * 45);
            let diff = targetAngle - currentMod;
            if (diff > 180) diff -= 360;
            if (diff < -180) diff += 360;
            targetRotation = currentWheelRotation + diff;
            isSeeking = true;
        });
    });

    function animateWheel() {
        if (isSeeking) {
            const diff = targetRotation - currentWheelRotation;
            if (Math.abs(diff) < 0.5) {
                currentWheelRotation = targetRotation;
                isSeeking = false;
            } else {
                currentWheelRotation += diff * 0.08; // smooth ease out
            }
        } else {
            currentWheelRotation -= 0.04; // velocidade continua
        }
        
        if (teamsWheel) {
            teamsWheel.style.transform = `rotate(${currentWheelRotation}deg)`;
            teamsWheel.style.setProperty('--wheel-rot', `${currentWheelRotation}deg`);
        }

        let normalizedRot = (-currentWheelRotation) % 360;
        if (normalizedRot < 0) normalizedRot += 360;
        
        let closestIndex = Math.round(normalizedRot / 45) % 8;
        
        if (closestIndex !== currentTeamIndex) {
            updateActiveTeam(closestIndex);
        }
        
        requestAnimationFrame(animateWheel);
    }

    animateWheel();
    updateActiveTeam(0);

    const teamsSection = document.querySelector('.teams-section');
    if (teamsSection) {
        // Entrada da seção com animação
        const teamsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    teamsSection.classList.add('visible');
                    teamsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        teamsObserver.observe(teamsSection);
    }

    // Observer para a terceira sessão (Workshop)
    const workshopSection = document.querySelector('.workshop-section');
    if (workshopSection) {
        const workshopObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    workshopSection.classList.add('visible');
                    workshopObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        workshopObserver.observe(workshopSection);
    }

    // Observer para a quarta sessão (Esports)
    const esportSection = document.querySelector('.esport-section');
    if (esportSection) {
        const esportObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    esportSection.classList.add('visible');
                    esportObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        esportObserver.observe(esportSection);
    }

    // Efeito de Parallax no texto STRIKE (25% mais lento e só ao passar o mouse por cima das letras)
    const strikeText = document.querySelector('.strike-text');
    if (strikeText) {
        let isHoveringStrike = false;

        strikeText.addEventListener('mouseenter', () => {
            isHoveringStrike = true;
        });

        strikeText.addEventListener('mousemove', (e) => {
            if (!isHoveringStrike) return;
            const rect = strikeText.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // 25% mais lento que a velocidade anterior (-0.015 * 0.75 = -0.01125)
            const moveX = Math.round((e.clientX - centerX) * -0.01125);
            const moveY = Math.round((e.clientY - centerY) * -0.01125);
            
            document.documentElement.style.setProperty('--px', `${moveX}px`);
            document.documentElement.style.setProperty('--py', `${moveY}px`);
        });

        strikeText.addEventListener('mouseleave', () => {
            isHoveringStrike = false;
            document.documentElement.style.setProperty('--px', `0px`);
            document.documentElement.style.setProperty('--py', `0px`);
        });
    }
});
