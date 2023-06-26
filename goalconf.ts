import { Config, browser } from "protractor";
import * as reporter from 'cucumber-html-reporter';
export const config: Config = {
    SELENIUM_PROMISE_MANAGER: false,
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    ignoreUncaughtExceptions: true,
    capabilities: {
        browserName: "chrome",
    },
    beforeLaunch: function () {
        require('ts-node/register')

    },
    onPrepare: async () => {
        await browser.manage().window().maximize();
    },
    specs: [
        '../features/'
    ],
    cucumberOpts: {
        require: [
            '../jsfiles/stepdef/*.js', '../jsfiles/hooks/screenshot.js'
        ],
        tags: '@unifiedmmr or @CreateCareTeam1 or  @goals',

        format: 'json:../report/cucumber_report.json',
        strict: true,
    },
    onComplete: () => {
        let date: Date = new Date();
        var cdate = date.toString().slice(0, 15);
        var time = date.getTime();
        var currentDate = cdate + "-" + time;
        var options = {

            theme: 'bootstrap' as const,
            jsonFile: './report/cucumber_report.json',
            output: "./report/Goals" + currentDate + ".html",
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };

        reporter.generate(options);
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 180000,
        // Set the default timeout to 60 seconds
        getPageTimeout: 60000, // Set the timeout for loading a page to 30 seconds
        allScriptsTimeout: 60000 // Set the timeout for executing scripts to 60 seconds
    },
}
// @VerifyEngagementRequests_V2
// @VerifyEngagementRequestsSecond