Helpers = {
	dateConverter: function(date) {
		var hours = (date.getHours()<10?'0':'') + date.getHours();
		var minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
		var month = (date.getMonth()<10?'0':'') + date.getMonth();
		var day = (date.getDate()<10?'0':'') + date.getDate();
		return date.getFullYear() + "-" + month + "-" + date.getDate() + " " + hours + ":" + minutes;
	}
}