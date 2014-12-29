define(['app.module'], function(bookmark){
	bookmark.service('LoginService', function(){
		var userName = '';
		var password = '';

		this.setCredentials = function(userName, password){
			this.userName = userName;
			this.password = password;
		};
		this.getCredentials = function(){
			alert(this.userName);
			return this;
		}
	});
	return bookmark;
});