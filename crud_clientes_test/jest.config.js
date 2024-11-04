module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-stare', {
            resultDir: 'jest-stare', // Diretório onde os resultados do Jest Stare serão salvos
            reportTitle: 'Relatório de Testes', // Título do relatório
            additionalResultsProcessors: ['jest-html-reporter'] // Processador adicional para relatórios em HTML
        }],
        ['jest-html-reporter', {
            pageTitle: 'Relatório de Testes', // Título da página do relatório
            outputPath: 'reports/test-report.html', // Caminho onde o relatório HTML será salvo
            includeFailureMsg: true, // Incluir mensagens de falha
            includeSuiteFailure: true, // Incluir falhas de suíte
            customScriptPath: './custom_script.js', // Caminho para um script personalizado (opcional)
        }]
    ],
    // Adicione esta configuração para gerar relatórios em caso de falha
    testResultsProcessor: 'jest-stare', // Garante que os resultados sejam processados pelo jest-stare
};
