var app;
(function (app) {
    var domain;
    (function (domain) {
        var Starter = (function () {
            function Starter(Id, Text, Language) {
                this.Id = Id;
                this.Text = Text;
                this.Language = Language;
            }
            return Starter;
        }());
        domain.Starter = Starter;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=Starter.js.map