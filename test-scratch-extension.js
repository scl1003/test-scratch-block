(function(ext) {

    $.getScript('https://scl1003.github.io/test-scratch-block/aws-sdk-2.636.0.js', initExtension);

	var accessKeyId = '';
    var secretAccessKey = '';
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
        // Code that gets executed when the block is run
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'init AWS %s', 'initAWSServices', 'eu-west-1'],
            [' ', 'my first block', 'my_first_block'],
        ]
    };

    function initExtension() {
    }
    
	function initAWSServices(region) {
		initAWS(region);
	}

    function initAWS(region) {
		AWS.config.region = region;
		AWS.config.accessKeyId = accessKeyId;
		AWS.config.secretAccessKey = secretAccessKey;
	}

    // Initialization services
	
	ext.initAWSServices = function(region) {
		if (accessKeyId === '')
			accessKeyId = prompt('Please enter your AWS_ACCESS_KEY_ID');
		if (secretAccessKey === '')
			secretAccessKey = prompt('Please enter your AWS_SECRET_ACCESS_KEY');
		
		initAWSServices(region);
	}

    // Register the extension
    ScratchExtensions.register('Joe\'s first extension', descriptor, ext);
})({});