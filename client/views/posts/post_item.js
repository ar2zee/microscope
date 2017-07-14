Template.postItem.helpers({
	domain: function() {
		var a = document.createElemant('a');
		a.href = this.url;
		return a.hostname;
	}
});