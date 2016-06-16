var app;
(function (app) {
    var domain;
    (function (domain) {
        var ConvStarter = (function () {
            function ConvStarter(Id, Text, Language) {
                this.Id = Id;
                this.Text = Text;
                this.Language = Language;
            }
            return ConvStarter;
        }());
        domain.ConvStarter = ConvStarter;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=ConvStarter.js.map