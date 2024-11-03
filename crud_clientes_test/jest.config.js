module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-stare', {
            resultDir: 'jest-stare',
            reportTitle: 'Relatório de Testes',
            additionalResultsProcessors: ['jest-html-reporter']
        }],
        ['jest-html-reporter', {
            pageTitle: 'Relatório de Testes',
            outputPath: 'reports/test-report.html',
            includeFailureMsg: true,
            includeSuiteFailure: true,
            customScriptPath: './custom_script.js', // se você tiver um script personalizado
        }]
    ]
};
