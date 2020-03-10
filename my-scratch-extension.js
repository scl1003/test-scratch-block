(function(ext) {
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
            [' ', 'my first block', 'my_first_block'],
        ]
    };

    // Register the extension
<<<<<<< HEAD:my-first-scratch-extension.js
    ScratchExtensions.register('My first extension', descriptor, ext);
=======
    ScratchExtensions.register('Joe first extension', descriptor, ext);
})({});
>>>>>>> 13a3e061e637936a715519c08e13dc8beb1136d6:my-scratch-extension.js
