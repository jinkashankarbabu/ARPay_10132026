sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/redbull/fi/arpay/test/integration/pages/HeaderList.gen",
	"com/redbull/fi/arpay/test/integration/pages/HeaderObjectPage.gen",
	"com/redbull/fi/arpay/test/integration/pages/ItemObjectPage.gen"
], function (JourneyRunner, HeaderListGenerated, HeaderObjectPageGenerated, ItemObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/redbull/fi/arpay') + '/test/flp.html#app-preview',
        pages: {
			onTheHeaderListGenerated: HeaderListGenerated,
			onTheHeaderObjectPageGenerated: HeaderObjectPageGenerated,
			onTheItemObjectPageGenerated: ItemObjectPageGenerated
        },
        async: true
    });

    return runner;
});

