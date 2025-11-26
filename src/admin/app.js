import favicon from './extensions/favicon.ico';
import {traducoes} from "./extensions/traducoes";

export default {
    config: {
        // Substitua estas URLs pelas suas imagens se quiser mudar o logo

        // Configuração de Traduções (Opcional)
        locales: ['pt-BR', 'en'],
        auth: {
            logo: favicon,
        },
        menu: {
            logo: favicon
        },
        tutorials: false,
        notifications: {releases: false},
        translations: {
            'pt-BR': traducoes
        },
        head: {
            favicon: favicon,
        },
        theme: {
            // Tema Claro (Light)
            light: {
                colors: {
                    // Cor Principal (Botões, Links ativos) - Usando seu Brand #BC8E38
                    primary100: '#fcf2f2', // Brand White (fundo suave)
                    primary200: '#e4d0ad',
                    primary500: '#CCA766', // Brand Light
                    primary600: '#BC8E38', // BRAND PRINCIPAL
                    primary700: '#766541', // Brand Dark (Hover)

                    // Botões de Ação
                    buttonPrimary100: '#fcf2f2',
                    buttonPrimary500: '#CCA766',
                    buttonPrimary600: '#BC8E38', // Cor do botão Salvar
                    buttonPrimary700: '#766541', // Cor do botão ao passar o mouse

                    neutral0: '#ffffff',  // Fundo dos cards/inputs (Branco puro para contraste)
                    neutral100: '#fcf2f2', // Fundo principal da tela (Seu Brand White)
                    neutral150: '#e4d0ad', // Bordas e divisórias sutis (Seu Brand Light suave)
                    neutral200: '#e4d0ad', // Bordas de inputs
                },
            },
            // Tema Escuro (Dark Mode)
            dark: {
                colors: {
                    // Cor Principal no modo escuro
                    primary100: '#1d0f0b', // Brand Black
                    primary200: '#766541',
                    primary500: '#BC8E38',
                    primary600: '#EFA906', // Accent (Amarelo mais vivo para destaque no escuro)
                    primary700: '#CCA766',

                    // Botões no modo escuro
                    buttonPrimary100: '#fcf2f2',
                    buttonPrimary500: '#CCA766',
                    buttonPrimary600: '#EFA906', // Botão bem vivo
                    buttonPrimary700: '#BC8E38',

                    neutral0: '#150a08',    // Fundo dos cards (Um pouco mais escuro que o brand black para profundidade)
                    neutral100: '#1d0f0b',  // Fundo principal da tela (Seu Brand Black)
                    neutral150: '#3b1f18',  // Bordas sutis
                    neutral200: '#766541',  // Bordas mais visíveis (Seu Brand Dark)
                    neutral800: '#fcf2f2',  // Cor do Texto principal no modo escuro
                },
            }
        },
    },
    bootstrap(app) {
        document.title = "Admin Insurgência";
    },
};