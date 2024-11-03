module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-stare', {
            resultDir: 'jest-stare',
            reportTitle: 'Relatório de Testes',
            additionalResultsProcessors: ['jest-html-reporter'],
            outputPath: 'jest-stare/report.html', // Especifica onde o relatório HTML será gerado
        }]
    ],
    testResultsProcessor: 'jest-html-reporter', // Adiciona o processor para gerar o relatório HTML
};
