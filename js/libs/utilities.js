// Trim string
String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g, "");
};

// Convert to camel case
String.prototype.camelCase = function() {
    return this
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}
